function solution(answers) {
    const p1 = [1, 2, 3, 4, 5],
          p2 = [2, 1, 2, 3, 2, 4, 2, 5],
          p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    var score = [0, 0, 0];
    answers.forEach((a, i) => {
        let i1 = i % p1.length,
            i2 = i % p2.length,
            i3 = i % p3.length;
        (p1[i1] === a) && (score[0] ? score[0]++ : score[0] = 1);
        (p2[i2] === a) && (score[1] ? score[1]++ : score[1] = 1);
        (p3[i3] === a) && (score[2] ? score[2]++ : score[2] = 1);
    });
    score = score.map((s, i, arr) => ({
            number: i + 1,
            value: arr[i]
    }));
    score.sort((a, b) => b.value - a.value);
    var answer = [];
    for (let i = 0; i < score.length; i++) {
        if (score[i].value === score[0].value && score[i].value !== 0) answer.push(score[i].number);
        else break;
    }
    return answer;
}
