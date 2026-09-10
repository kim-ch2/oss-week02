// P4. Roster queries  (commit: "p4: roster queries")
//
// An array of objects is the shape of every API response you will meet.
// Do not change the data.

const students = [
  { name: "Yuna",    dept: "CS", score: 92 },
  { name: "Minho",   dept: "EE", score: 88 },
  { name: "Hana",    dept: "ME", score: 84 },
  { name: "Jiho",    dept: "CS", score: 71 },
  { name: "Soyeon",  dept: "CS", score: 97 },
  { name: "Taeyang", dept: "EE", score: 65 },
  { name: "Eunji",   dept: "ME", score: 79 },
  { name: "Junseo",  dept: "CS", score: 58 },
  { name: "Dohyun",  dept: "EE", score: 86 },
  { name: "Seoyeon", dept: "CS", score: 83 },
];

// (a) Names with score >= 80, as an array of strings.  (filter, then map)
//     expected: 80 or more: [ 'Yuna', 'Minho', 'Hana', 'Soyeon', 'Dohyun', 'Seoyeon' ]
// TODO
// console.log("80 or more:", ...);
//filter를 사용해 조건에 맞는 학생을 골라낸 뒤, map을 통해 객체를 이름으로 반환
//매개변수 s는 배열을 구성하는 개별 학생 객체이다.
const highScorers = students
  .filter((s) => s.score >= 80)
  .map((s) => s.name);
console.log("80 or more:", highScorers);
// (b) Students per department, as an object.  (forEach + an empty object)
//     expected: per dept: { CS: 5, EE: 3, ME: 2 }
//     Hint: counts[s.dept] = (counts[s.dept] ?? 0) + 1;
// TODO
// console.log("per dept:", ...);
//각 학과의 초기 인원수를 0으로 설정 후, 학생 데이터를 순회하며 1명씩 누적한다.
const counts = { CS: 0, EE: 0, ME: 0 };
students.forEach((s) => {
  counts[s.dept] += 1;
});
console.log("per dept:", counts);
// (c) Ranking by score, one line each: "1. Soyeon (CS) 97"
//     Copy the array before sorting (students.slice()).
//     sort() is destructive and (a) and (b) must still see the original order.
// TODO
//매개변수 없이 slice()를 호출하여 원본 배열을 얕은 복사 
//sort를 적용하기 때문에 원본 배열의 요소 순서는 변하지 않는다.
const ranked = students.slice().sort((a, b) => b.score - a.score);
//foreach의 두 번째 매개변수는 현재 요소의 인덱스를 나타낸다.
//인덱스는 0부터 시작하므로 실제 순위를 출력할때는 1을 더해야한다.
ranked.forEach((s, i) => {
  console.log(`${i + 1}. ${s.name} (${s.dept}) ${s.score}`);
});