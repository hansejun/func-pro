const arr = [1, 2, 3, 4, 5];
const iterator = arr[Symbol.iterator]();


// while (true) {
//   const result = iterator.next();
//   if (result.done) break;
 
// }


const customIterator = {
    [Symbol.iterator]() {
        let i = 3;
        return {
            next() { 
                return i === 0 ? { value: undefined, done: true } : { value: --i, done: false };
            },
            [Symbol.iterator]() {
                return this;
            }
        }
    }
}

const iterator2 = customIterator[Symbol.iterator]();

while (true) {
    const result = iterator2.next();
    console.log(result);
    if (result.done) break;
}