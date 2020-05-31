function solution(priorities, location) {
    const sortedPriorities = [];
    const prioritiesObj = priorities.map((p, i) => ({
          value: p,
          index: i,
    }));
    const length = priorities.length;
    let i = 0;
    while (sortedPriorities.length !== length) {
        const maxIndex = prioritiesObj.
          findIndex((v) => v.value === Math.max.apply(null, prioritiesObj.map(p => p.value)));
        if (maxIndex === 0) {
            const maxDoc = prioritiesObj[0];
            prioritiesObj.splice(0, 1);
            sortedPriorities.push(maxDoc);   
        } else {
            const firstDoc = prioritiesObj[0];
            prioritiesObj.splice(0, 1);
            prioritiesObj.push(firstDoc);
        }
    }
    for (let i = 0; ; i++) {
        if (sortedPriorities[i].index === location) return i + 1;
    }
    
}
