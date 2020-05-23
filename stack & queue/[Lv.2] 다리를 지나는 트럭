function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    const finish_trucks = [],
    wait_trucks = [...truck_weights],
    crossing_trucks = [],
    truck_status = [];
    while (finish_trucks.join() !== truck_weights.join()) {
        truck_status.forEach((t, i, arr) => {
            if (truck_status[i] === bridge_length) {
                arr.splice(0, 1);
                finish_trucks.push(crossing_trucks.splice(0, 1)[0]);
            }
        }); 
        answer++;
        if (
            crossing_trucks
            .concat(wait_trucks[0])
            .reduce((a, b) => a + b, 0) <= weight
        ) {
            crossing_trucks.push(wait_trucks.splice(0, 1)[0]);
            truck_status.push(0);
        }
        truck_status.forEach((t, i, arr) => {
            arr[i]++;
        }); 
    }
    return answer;
}
