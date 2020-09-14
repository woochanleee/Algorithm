const ascSort = (a, b) => a - b;

function solution(operations) {
    let answer;
    const queue = [];
    const commandObj = {
        I: (number) => {
            queue.push(number);
            queue.sort(ascSort);
        },
        D: (option) => {
            const maxMode = option === 1 ? true : false;

            if (maxMode) {
                queue.pop();
            } else {
                queue.shift();
            }
        }
    }
    
    operations.forEach(operation => {
        const command = operation.slice(0, 1);
        const number = Number(operation.slice(2));
        
        commandObj[command](number);
    });
    
    if (queue.length) {
        answer = [queue[queue.length - 1], queue[0]];
    } else {
        answer = [0, 0];
    }
    
    return answer;
}
