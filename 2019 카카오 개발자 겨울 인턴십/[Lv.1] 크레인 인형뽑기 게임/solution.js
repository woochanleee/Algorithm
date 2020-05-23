function solution(board, moves) {
    var answer = 0;
    const basket = [];
    
    moves.forEach((m, i) => {
        board.some((b, j, arr) => {
            if (b[m - 1] === 0) {
                return false;
            } else {
                basket.push(b[m - 1]);
                arr[j][m - 1] = 0;
                answer += checkBoom(basket);
                return true;
            }
        });
    });
    return answer;
}

function checkBoom(basket) {
    let count = 0;
    
    if (basket.length >= 2 && basket[basket.length -2] === basket[basket.length - 1]) {
        basket.splice(-2, 2);
        count += 2;
    }
    
    return count;
}
