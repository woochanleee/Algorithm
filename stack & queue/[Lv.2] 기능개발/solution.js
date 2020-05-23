function solution(progresses, speeds) {
    var answer = [];
    let completeTimes = progresses.map((p, i) =>
        (100 - p) % speeds[i] ? Math.ceil((100 - p) / speeds[i]) : (100 - p) / speeds[i]);
    while (completeTimes.length) {
        let count = 0;
        let deleteIndexs = [];
        completeTimes.some((c, i) => {
            if (completeTimes[0] >= c) {
                count++;
                deleteIndexs.push(i);
            }
            return completeTimes[0] < c;
        });
        completeTimes = completeTimes.filter((c, i) => !deleteIndexs.includes(i));
        answer.push(count);
    }
    return answer;
}
