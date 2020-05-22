function solution(clothes) {
  var answer = 1;
  const map = new Map();
  clothes.forEach((c, i) => {
    const key = c[1];
    const value = map.get(key);
    if (value) map.set(key, value + 1);
    else map.set(c[1], 2);
  });
  for (const [key, value] of map) {
    answer *= value;
  }
  return answer - 1;
}
