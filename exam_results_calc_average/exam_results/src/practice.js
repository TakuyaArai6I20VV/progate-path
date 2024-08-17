import allResults from "./results.js";

const count = (results) => {
  return results.length;
}

console.log("total count", count(allResults));

const fileterByGrade = (results, grade) => {
  const filterdResults = [];
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    if (result.grade === grade) {
      filterdResults.push(result);
    }
  }
  return filterdResults;
}

const averageOf = (results, grade, subject) => {
  const filterdResults = fileterByGrade(results, grade);
  let total = 0;
  for (let i = 0; i < filterdResults.length; i++) {
    const filterdResult = filterdResults[i];
    total += filterdResult.points[subject];
  }
  return total / filterdResults.length;
}

console.log("grade2", fileterByGrade(allResults, 2));
console.log("average of grade2 and Japanese", averageOf(allResults, 2, "Japanese"));
