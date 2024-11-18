// 제너레이터 함수 정의
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// 제너레이터 객체 생성
const generator = numberGenerator();

// 값 하나씩 얻기
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }

// for...of로 순회 가능 -> 제너레이터의 반환값은 이터러블한 이터레이터이기 때문
for (const num of numberGenerator()) {
    console.log(num); // 1, 2, 3
}