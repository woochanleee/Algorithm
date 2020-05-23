function solution(genres, plays) {
    var answer = [];
    const map = new Map();
    genres.forEach((g, i) => {
        const value = map.get(g);
        map.set(g, {
            uniqueNumber: value ? value.uniqueNumber.concat([[i, plays[i]]]) : [[i, plays[i]]],
            value: value ? value.value + plays[i] : plays[i]
        });
    });
    const ranking = [];
    for (const [key, value] of map) {
        ranking.push([key, value.value]);
    }
    ranking.sort((a, b) => b[1] - a[1]);
    ranking.forEach((r, i) => {
        const unique = map.get(r[0]).uniqueNumber.sort((a, b) => b[1] - a[1]);
        for (let i = 0; i < 2; i++) {
            if (unique[i]) answer.push(unique[i][0]);
        }
    });
    return answer;
}
