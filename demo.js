let arr = [1, 2, 3, 4];
class Counter {
  constructor(limit) {
    this.limit = limit;
  }

  [Symbol.iterator]() {
    let count = 1,
      limit = this.limit;
    return {
      next() {
        if (count <= limit) {
          return { done: false, value: count++ };
        } else {
          return { done: true };
        }
      },
      return() {
        console.log("退出");
        return { done: true };
      },
    };
  }
}

let count = new Counter(5);
let [a, b, c] = count;
