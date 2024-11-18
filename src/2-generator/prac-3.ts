// 기본 제너레이터 함수 정의
function* numberGen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

// 1. 구조 분해 할당 (Destructuring)
const [first, second, ...rest] = numberGen();
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// 2. 전개 연산자 (Spread Operator)
const numbers = [...numberGen()];
console.log(numbers); // [1, 2, 3, 4, 5]

// 3. 복합 예제
function* colorGen() {
    yield 'red';
    yield 'green';
    yield 'blue';
    yield 'yellow';
    yield 'purple';
}

// 구조 분해와 전개 연산자 조합
const [primaryColor1, primaryColor2, ...otherColors] = colorGen();
console.log(primaryColor1);  // 'red'
console.log(primaryColor2);  // 'green'
console.log(otherColors);    // ['blue', 'yellow', 'purple']

// 4. 다중 값을 반환하는 제너레이터
function* multiValueGen() {
    yield* [1, 2, 3];           // 숫자 시퀀스
    yield* 'HELLO';             // 문자열 시퀀스
    yield* new Set([4, 5, 6]);  // Set 시퀀스
}

const [...allValues] = multiValueGen();
console.log(allValues); // [1, 2, 3, 'H', 'E', 'L', 'L', 'O', 4, 5, 6]

// 5. 객체 생성에 활용
function* keyValueGen() {
    yield ['name', 'John'];
    yield ['age', 30];
    yield ['city', 'Seoul'];
}

const person = { ...Object.fromEntries(keyValueGen()) };
console.log(person); // { name: 'John', age: 30, city: 'Seoul' }

// 6. 무한 시퀀스에서 특정 부분만 추출
function* infiniteGen() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

// 처음 5개 값만 가져오기
const [num1, num2, ...nums] = infiniteGen();
console.log(num1);  // 1
console.log(num2);  // 2
console.log(nums.length); // 3 (나머지 3개 값)

// 7. 중첩 제너레이터
function* outerGen() {
    yield* numberGen();
    yield* colorGen();
}

const [...combined] = outerGen();
console.log(combined); 
// [1, 2, 3, 4, 5, 'red', 'green', 'blue', 'yellow', 'purple']

// 8. 실용적인 예제 - 페이지네이션
function* createPages(items:string[], pageSize:number) {
    for (let i = 0; i < items.length; i += pageSize) {
        yield items.slice(i, i + pageSize);
    }
}

const items = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const [firstPage, secondPage, ...remainingPages] = createPages(items, 3);

console.log(firstPage);       // ['A', 'B', 'C']
console.log(secondPage);      // ['D', 'E', 'F']
console.log(remainingPages);  // [['G']]

// 9. 필터링된 값 생성
function* filterGen(arr:number[], predicate:(item:number) => boolean) {
    for (const item of arr) {
        if (predicate(item)) {
            yield item;
        }
    }
}

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [...evenNumbers] = filterGen(numbers2, n => n % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]