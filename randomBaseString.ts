/**
 * Generates a random string in a given numeric base (e.g., hex16, binary2).
 * You can specify the length of the output string and optionally print debug info.
 *
 * @param base - The numeric base for the generated string (default is 16 for hexadecimal).
 * @param length - The desired length of the output string (default is 6).
 * @param printDebugInfo - If true, debug information will be logged to the console (default is false).
 *
 * @returns A string of random characters in the specified base with the given length.
 */
export function randomBaseString(base: number = 16, length: number = 6, printDebugInfo: boolean = false): string {
    // Generate a random decimal number and convert it to the specified base
    const decimal: number = Math.random() ** Math.random();
    const newBaseString: string = decimal.toString(base).slice(2); // Remove '0.'

    // Ensure the string is padded to the required length, then slice to the final length
    const output: string = newBaseString.padStart(length, '0').slice(0, length);

    if (printDebugInfo) {
        logDebugInfo(decimal, newBaseString, output);
    }

    return output;
}

// Debug logging function
function logDebugInfo(decimal: number, newBaseString: string, output: string): void {
    console.table([
        { variable: "decimal", value: decimal, length: String(decimal).length },
        { variable: "newBaseString", value: newBaseString, length: newBaseString.length },
        { variable: "output", value: output, length: output.length }
    ]);
}