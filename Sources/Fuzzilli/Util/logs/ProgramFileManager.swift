import Foundation

public class ProgramFileManager {
    private let programsDirectory: URL

    public init(baseDirectory: String) {
        self.programsDirectory = URL(fileURLWithPath: baseDirectory)
        createDirectoryIfNeeded()
    }

    private func createDirectoryIfNeeded() {
        let fileManager = FileManager.default

        if !fileManager.fileExists(atPath: programsDirectory.path) {
            do {
                try fileManager.createDirectory(at: programsDirectory, withIntermediateDirectories: true, attributes: nil)
            } catch {
                print("Failed to create directory \(programsDirectory.path): \(error)")
            }
        }
    }

    public func saveProgramCode(_ code: Code, programID: UUID, weight: Int) -> URL? {
        let fileName = "program_\(programID.uuidString)weight\(weight).txt"
        let fileURL = programsDirectory.appendingPathComponent(fileName)

        // Convertendo o objeto 'code' em uma representação textual
        let codeString = String(describing: code)

        do {
            // Escrevendo a representação textual no arquivo
            try codeString.write(to: fileURL, atomically: true, encoding: .utf8)
            return fileURL
        } catch {
            print("Failed to save program code: \(error)")
            return nil
        }
    }
}
