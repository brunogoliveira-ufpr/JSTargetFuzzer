import os
import lizard
import re
from statistics import mean, stdev

# Regular expressions for identifying loops
loop_pattern = re.compile(r'\b(for|while|do)\b')

def count_loops_in_file(file_path):
    """Count the number of loops (for, while, do) in the file."""
    with open(file_path, 'r') as file:
        content = file.read()
        loops = loop_pattern.findall(content)
        return len(loops)

def analyze_js_files(files):
    cyclomatic_complexities = []
    variable_counts = []
    operation_counts = []
    loop_counts = []

    for file_path in files:
        # Analyze the JavaScript file using lizard
        analysis = lizard.analyze_file(file_path)

        # Gather metrics for each file
        file_cyclomatic = 0
        file_variables = 0
        file_operations = 0

        for function in analysis.function_list:
            file_cyclomatic += function.cyclomatic_complexity
            file_operations += function.token_count  # Approximation for number of operations
            file_variables += len(function.parameters)  # Count variables in function parameters

        # Count loops using regular expressions
        file_loops = count_loops_in_file(file_path)

        # Add file metrics to global lists
        cyclomatic_complexities.append(file_cyclomatic)
        variable_counts.append(file_variables)
        operation_counts.append(file_operations)
        loop_counts.append(file_loops)

    # Calculate average, min, max, and standard deviation for each metric
    avg_cyclomatic = mean(cyclomatic_complexities) if cyclomatic_complexities else 0
    min_cyclomatic = min(cyclomatic_complexities) if cyclomatic_complexities else 0
    max_cyclomatic = max(cyclomatic_complexities) if cyclomatic_complexities else 0
    stddev_cyclomatic = stdev(cyclomatic_complexities) if len(cyclomatic_complexities) > 1 else 0

    avg_variables = mean(variable_counts) if variable_counts else 0
    min_variables = min(variable_counts) if variable_counts else 0
    max_variables = max(variable_counts) if variable_counts else 0
    stddev_variables = stdev(variable_counts) if len(variable_counts) > 1 else 0

    avg_operations = mean(operation_counts) if operation_counts else 0
    min_operations = min(operation_counts) if operation_counts else 0
    max_operations = max(operation_counts) if operation_counts else 0
    stddev_operations = stdev(operation_counts) if len(operation_counts) > 1 else 0

    avg_loops = mean(loop_counts) if loop_counts else 0
    min_loops = min(loop_counts) if loop_counts else 0
    max_loops = max(loop_counts) if loop_counts else 0
    stddev_loops = stdev(loop_counts) if len(loop_counts) > 1 else 0

    return {
        "avg_cyclomatic": avg_cyclomatic,
        "min_cyclomatic": min_cyclomatic,
        "max_cyclomatic": max_cyclomatic,
        "stddev_cyclomatic": stddev_cyclomatic,
        "avg_variables": avg_variables,
        "min_variables": min_variables,
        "max_variables": max_variables,
        "stddev_variables": stddev_variables,
        "avg_operations": avg_operations,
        "min_operations": min_operations,
        "max_operations": max_operations,
        "stddev_operations": stddev_operations,
        "avg_loops": avg_loops,
        "min_loops": min_loops,
        "max_loops": max_loops,
        "stddev_loops": stddev_loops
    }

def print_results(results, label):
    print(f"Results for {label}:")
    print(f"  Cyclomatic Complexity: Avg = {results['avg_cyclomatic']:.2f}, Min = {results['min_cyclomatic']}, Max = {results['max_cyclomatic']}, Std Dev = {results['stddev_cyclomatic']:.2f}")
    print(f"  Number of Variables: Avg = {results['avg_variables']:.2f}, Min = {results['min_variables']}, Max = {results['max_variables']}, Std Dev = {results['stddev_variables']:.2f}")
    print(f"  Number of Operations: Avg = {results['avg_operations']:.2f}, Min = {results['min_operations']}, Max = {results['max_operations']}, Std Dev = {results['stddev_operations']:.2f}")
    print(f"  Number of Loops: Avg = {results['avg_loops']:.2f}, Min = {results['min_loops']}, Max = {results['max_loops']}, Std Dev = {results['stddev_loops']:.2f}")
    print()

def analyze_js_directory(directory):
    # To store the file paths for each category
    all_files = []
    weight_1_files = []
    weight_1000_files = []

    # Traverse the directory for .js files
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.js'):
                file_path = os.path.join(root, file)
                all_files.append(file_path)

                # Check for suffix weight_1 or weight_1000
                if file.endswith('weight_1.js'):
                    weight_1_files.append(file_path)
                elif file.endswith('weight_1000.js'):
                    weight_1000_files.append(file_path)

    # Analyze all files
    all_results = analyze_js_files(all_files)
    weight_1_results = analyze_js_files(weight_1_files)
    weight_1000_results = analyze_js_files(weight_1000_files)

    # Print the results for each category
    print_results(all_results, "all files")
    print_results(weight_1_results, "files with weight_1")
    print_results(weight_1000_results, "files with weight_1000")


if __name__ == "__main__":
    # Replace with your directory containing .js files
    js_directory = "/home/kali/PhD/JSTargetFuzzer-Dev2/programs/duktape-run2-files/"
    analyze_js_directory(js_directory)
