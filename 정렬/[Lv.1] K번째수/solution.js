const ascSort = (a, b) => a - b;

function solution(array, commands) {    
    return commands.map(command => {
        const slicedArray = array.slice(command[0] - 1, command[1])
        
        slicedArray.sort(ascSort);
        
        return slicedArray[command[2] - 1];
    })
}
