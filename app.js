#!/usr/bin/env node
// CCC 2007 J1 - Goldilocks
// Reads three positive integers from stdin and prints the weight of Mama Bear's bowl (the median).

const fs = require('fs');

function medianOfThree(a, b, c) {
  // Simple approach: place into array and sort numeric
  return [a, b, c].sort((x, y) => x - y)[1];
}

function main() {
  const data = fs.readFileSync(0, 'utf8').trim();
  if (!data) {
    console.error('Please provide three integer weights (space or newline separated).');
    process.exit(1);
  }
  const parts = data.split(/\s+/).filter(Boolean);
  if (parts.length < 3) {
    console.error('Please provide at least three numbers.');
    process.exit(1);
  }
  const nums = parts.slice(0, 3).map(x => Number(x));
  if (!nums.every(n => Number.isInteger(n) && n > 0)) {
    console.error('All weights must be positive integers.');
    process.exit(1);
  }
  console.log(medianOfThree(nums[0], nums[1], nums[2]));
}

if (require.main === module) main();

module.exports = { medianOfThree };






const sentence = "Edward is cool and Jean is a problem";

function lang(setence) {
  let t = 0;
  let s = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "e" || sentence[i] === "E") {
      t++;
    } else if (sentence[i] === "s" || sentence[i] === "S") {
      s++;
    }
    