// P3. Scores pipeline  (commit: "p3: scores pipeline")
//
// Pipeline: keep odd numbers -> double them -> sort descending -> keep the first half
//
// (a) Step by step. One variable per step, print the array after each step.
// (b) The whole pipeline as a single method chain. Print only the result.
// (c) Print scores once more at the end. Is it still the same? Why?
//
// You will need: filter, map, sort, slice, and Math.ceil.
// Not sure what one of them does? Look it up (MDN) before asking.

const scores = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));
console.log("start:", scores);

// (a)
// 반환값이 true인 것만 가져온다.
const odd = scores.filter((s) => s % 2 === 1);
console.log("odd:", odd);
// 함수를 실행하고 그 결과값들로 구성된 배열을 생성한다.
const doubled = odd.map((s) => s * 2);
console.log("doubled:", doubled);
// 숫자 배열은 비교함수를 전달해야하며 b-a를 반환하면 내림차순으로 정렬된다.
const sorted = doubled.sort((a, b) => b - a);
console.log("sorted:", sorted);
// 7개일 때 3개가 아니라 4개가 되도록 올림 연산을 사용한다.
const half = Math.ceil(sorted.length / 2);
const firstHalf = sorted.slice(0, half);
console.log("first half:", firstHalf);
// (b)
// 배열 메서드들은 결과로 다시 배열을 반환하므로 다음 매서드를 바로 연결
//filter를 거친 후에는 배열 길이가 변하지 않아서 (a)에서 계산해 둔 변수를 재사용한다.
const result = scores
  .filter((s) => s % 2 === 1)
  .map((s) => s * 2)
  .sort((a, b) => b - a)
  .slice(0, half);
console.log("chain:", result);
// (c)
console.log("scores again:", scores);
