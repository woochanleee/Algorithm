function solution(heights) {
    var answer = [];
    heights.forEach((h, i) => {
        if (i) {
            for (let j = i - 1; j !== -1; j--) {
                if (heights[j] > h) {
                    answer.push(j + 1);
                    break;
                }
            }
        }
        if (!answer[i]) answer.push(0);
    });
    return answer;
}
