import Foundation

public class SecCoverageHandler {
    private let fuzzer: Fuzzer
    private let logger: Logger
    private let statisticsService: StatisticsService
    private let engineName: String

    public init(fuzzer: Fuzzer, logger: Logger, engineName: String) {
        self.fuzzer = fuzzer
        self.logger = logger
        self.statisticsService = StatisticsService.getInstance(for: engineName)
        self.engineName = engineName
    }

    public func checkAndHandleCoverage(for program: Program, context: String) {
        if fuzzer.evaluator.isCovered {
            logger.warning("[\(context)] [JST] Target addresses were found!")
            program.weight = 1000.0
            program.comments.add("[\(context)] Interesting", at: .footer)
            logger.warning("[\(context)] [JST] Program weight just modified to \(program.weight)")
            if context.contains("after execution") || context.contains("during evaluation") {
                fuzzer.corpus.add(program, ProgramAspects(outcome: .succeeded))
                logger.warning("[\(context)] Program added to corpus com weight \(program.weight)")
            }
            
        }
    }
}
