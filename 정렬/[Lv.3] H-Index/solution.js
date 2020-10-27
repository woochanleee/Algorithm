function solution(citations) {
    let answer = 0;
    const cicationCount = citations.length;
    
    for (let i = 0; ; i++) {
        const citationedPaperCount = citations.filter((citation) => citation >= i).length;

        if (citationedPaperCount >= i && (cicationCount - citationedPaperCount) <= i) {
            answer = i;
        } else {
            break;
        }
    }
    
    return answer;
}
