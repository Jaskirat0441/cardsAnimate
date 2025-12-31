const find = (num) => {
  let arr = [];
  for (let i = 0; i < 100000; i++) {
    arr[i] = i * i;
  }

  console.log(arr[num]);
};

console.time("6");
find(6);
console.timeEnd("6");
console.time("12");
find(12);
console.timeEnd("12");
