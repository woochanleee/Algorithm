const descByMax = (a, b) => {
        let prev = a, next = b;
    
        for (let i = 0; i < 4; i++) {
            prev += a.toString();
            next += b.toString();
            if (prev.length >= 4 && next.length >= 4) {
                break;
            }
        }
    
        if (next.slice(0, 4) === prev.slice(0, 4)) {
            return a - b;
        } else {
            return next.slice(0, 4) - prev.slice(0, 4);
        }
    };

function solution(numbers) {
    numbers.sort(descByMax);
    
    if (numbers[0] === 0) {
        return '0';
    } else {
        return numbers.join('');    
    }
}
