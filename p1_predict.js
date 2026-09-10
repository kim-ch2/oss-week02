// P1. Predict the output  (commit: "p1: equality predictions")
//
// For each line, write your prediction in the comment BEFORE running.
// Then run:  node p1_predict.js
// Wrong predictions are the point. For every miss, add one line
// explaining why, and commit.

console.log(1, 1 == "1");            // prediction: 1 true
console.log(2, 1 === "1");           // prediction: 2 false 1과 "1"의 자료형이 다르기 때문
console.log(3, 0 == "");             // prediction: 3 true
console.log(4, 0 === "");            // prediction: 4 false 자료형이 다르기때문 
console.log(5, "" == " ");           // prediction: 5 false 앞은 공백이 없는 빈 문자열이고 뒤는 띄어쓰기가 포함된 공백이기때문에 다르다
console.log(6, null == undefined);   // prediction: 6 true
console.log(7, null === undefined);  // prediction: 7 false 둘의 타입이 다르기때문 앞은 객체, 뒤는 undefined.
console.log(8, "4" - true);          // prediction: 8 3 true는 1이므로 4-1인 3이 출력된다.
console.log(9, "4" + 1);             // prediction: 9 41 "4"는 문자열이기때문에 숫자 1도 문자열로 변환되어 41로 출력된다.
console.log(10, "4" * "2");          // prediction: 10 8 문자열 4,2가 숫자 4,2로 변환되어 곱해지므로 8이된다.
console.log(11, typeof "4");         // prediction: 11 string "4"는 문자열이기때문에 string이출력된다.
console.log(12, typeof null);        // prediction: 12 object null의 타입은 object이기 때문
console.log(13, typeof []);          // prediction: 13 object 배열은 객체의 한 종류이기 때문에 object를 반환한다.
console.log(14, [1, 2] == [1, 2]);   // prediction: 14 false 배열은 객체인데 객체를 비교할때 값을 비교하는것이 아니라 메모리상의 주소를 비교하기 때문에 false가 된다.
console.log(15, NaN === NaN);        // prediction: 15 false NaN은 자기 자신을 포함하여 어떤 값과도 일치하지 않기 때문에 false가된다.
