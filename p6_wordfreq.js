// P6. Word frequency + your own module  (commit: "p6: word frequency")
//
// node p6_wordfreq.js sample.txt
//
//   48 words, 17 distinct
//   code     9
//   the      7
//   ship     5
//   it       5
//   you      3
//
// tokenize, countWords, topN live in utils.js. Implement the missing two there,
// then import all three here. Your own file: "./" and ".js" are both required.

import fs from "node:fs";
// TODO: import { tokenize, countWords, topN } from ...

const path = process.argv[2];
const text = fs.readFileSync(path, "utf8");

const words = tokenize(text);
const counts = countWords(words);
// 내가 만든 파일은 "./"로 "이 폴더에서 찾아라"를 알려 주고, ".js"까지 다 적어야 함.
import { tokenize, countWords, topN } from "./utils.js";
// TODO: print "<total> words, <distinct> distinct"
//       Object.keys(counts).length is the number of distinct words.

// TODO: print the top 5 as "word count", one per line
//       topN(counts, 5) returns [["code", 9], ["the", 7], ...]

// words 배열의 길이는 중복되어 나타난 단어들까지 모두 합친 전체 단어 수
// counts 객체의 키들은 고유한 단어들이므로 이 키 배열의 크기가 중복없는 단어의 종류 수 
console.log(`${words.length} words, ${Object.keys(counts).length} distinct`);

// topN은 중첩 배열을 반환한다
// padEnd(8)은 문자열의 길이가 8이 될 때까지 끝에 공백을 추가한다
topN(counts, 5).forEach(([word, count]) => {
  console.log(`${word.padEnd(8)} ${count}`);
});