function solution(participant, completion) {
  let map = new Map();
  participant.forEach((p) => {
    map.set(p, map.get(p) ? map.get(p) + 1 : 1);
  });

  completion.forEach((c) => {
    const value = map.get(c);
    map.set(c, value - 1);
  });

  for (const [key, value] of map.entries()) {
    if (value) return key;
  }
}
