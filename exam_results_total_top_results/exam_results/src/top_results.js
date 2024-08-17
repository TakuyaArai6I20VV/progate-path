import allResults from "./results.js";

/*
grade: 2
subjects: Japanese、Mathematics、Physics
total points top3

all student avg total points (round)

console log
-----------------------
# Top 3 of total points
1 | [Grade] | [Name] | [Total points]
2 | [Grade] | [Name] | [Total points]
3 | [Grade] | [Name] | [Total points]
average: [Total points average]
-----------------------
*/

// console.log(allResults.length)
// console.log(allResults[0].grade);

const top3 = (results) => {
  const total = [];
  const students_total = [];
  let points_sum = 0;
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    if (result.grade === 2) {
      // console.log(result);
      // console.log(result.points["Japanese"]);
      // console.log(result.points["Mathematics"]);
      // console.log(result.points["Physics"]);
      // result.points["Japanese"];
      // calc total pintsresult.points["Mathmatics"] + result.points["Physics"]
      points_sum =
        result.points["Japanese"] +
        result.points["Mathematics"] +
        result.points["Physics"];
      total.push(points_sum);
      // console.log(total);
      students_total.push([points_sum, result.grade, result.name]);
      // console.log(student_total);
    }
  }

  // top3
  const sorted_students_total = students_total.sort((a, b) => {
    if (a === b) {
      return 0;
    } else if (a > b) {
      return -1;
    } else {
      return 1;
    }
  });
  // console.log(students_total[0][0]);
  // console.log(sorted_total);
  // console.log(students_total);
  // console.log(students_total.length);
  // const top3_total = sorted_total.slice(0, 3);
  // console.log(top3_total);
  // console.log("------------")
  // console.log(sorted_students_total.slice(0, 3));
  // console.log(students_total.sort());

  console.log("# Top 3 of total points");
  console.log(
    `1 | ${sorted_students_total[0][1]} | ${sorted_students_total[0][2]} | ${sorted_students_total[0][0]}`
  );
  console.log(
    `2 | ${sorted_students_total[1][1]} | ${sorted_students_total[1][2]} | ${sorted_students_total[1][0]}`
  );
  console.log(
    `3 | ${sorted_students_total[2][1]} | ${sorted_students_total[2][2]} | ${sorted_students_total[2][0]}`
  );

  // avg all students
  console.log(
    "average: ",
    Math.round(total.reduce((sum, element) => sum + element, 0) / total.length)
  );
};
top3(allResults);
