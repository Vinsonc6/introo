/**
 * CCC '11 S1 - English or French?
 * * This program distinguishes between English and French text by comparing
 * the total number of 't'/'T' characters against the total number of 's'/'S' characters.
 * * Rule:
 * - If T-count > S-count, the language is English.
 * - If S-count >= T-count, the language is French.
 */


function solveLanguagePuzzle(inputLines) {
  // Initialize counters for 't'/'T' and 's'/'S'
  let tCount = 0;
  let sCount = 0;

  // Iterate over every line of the input text
  for (const line of inputLines) {
    // Iterate over every character in the current line
    for (const char of line) {
      const lowerChar = char.toLowerCase(); // Convert character to lowercase for case-insensitive counting

      if (lowerChar === 't') {
        tCount++;
      } else if (lowerChar === 's') {
        sCount++;
      }
    }
  }

  // Apply the language determination rule
  if (tCount > sCount) {
    return "English";
  } else {
    // This covers the case where sCount > tCount AND where sCount === tCount
    return "French";
  }
}

// --- Sample Inputs for Testing ---

// Sample 1: Expects "English"
const sampleInput1 = [
  "The red cat sat on the mat.",
  "Why are you so sad cat?",
  "Don't ask that."
];

// Sample 2: Expects "French"
const sampleInput2 = [
  "Lorsque j'avais six ans j'ai vu, une fois,",
  "une magnifique image,",
  "dans un livre"
];

// Sample 3: Expects "English"
const sampleInput3 = [
  "Si je discernais ta voix encore",
  "Connaissant ce coeur qui doute,",
  "Tu me dirais de tirer un trait",
  "Quoi que partir me coute."
];


console.log("--- Results ---");

// Run and print results for Sample 1
const result1 = solveLanguagePuzzle(sampleInput1);
console.log(`Sample 1 Result: ${result1} (Expected: English)`);

// Run and print results for Sample 2
const result2 = solveLanguagePuzzle(sampleInput2);
console.log(`Sample 2 Result: ${result2} (Expected: French)`);

// Run and print results for Sample 3
const result3 = solveLanguagePuzzle(sampleInput3);
console.log(`Sample 3 Result: ${result3} (Expected: English)`);

// --- Detailed T/S Counts for Sample 1 Verification ---
/*
Line 1: The red cat sat on the mat. (T: 5, S: 1)
Line 2: Why are you so sad cat?     (T: 1, S: 2)
Line 3: Don't ask that.             (T: 2, S: 1)
Total: T = 5+1+2 = 8, S = 1+2+1 = 4.
T-count (8) > S-count (4) -> English.
*/