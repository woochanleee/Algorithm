function solution(arrangement) {
    var answer = 0;
    let stack = 0;
    for (let i = 0; i < arrangement.length; i++) {
        if (arrangement[i] + arrangement[i + 1] === '()') {
            answer += stack;
            i++;
        } else if (arrangement[i] === '(') {
            stack++;
        } else if (arrangement[i] === ')') {
            answer++;
            stack--;
        }
    }
    return answer;
}
