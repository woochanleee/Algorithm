function solution(jobs) {
    let allTakenTime = 0,
        count = 0;
    const totalJobs = jobs.length,
          ENTER_TIME_INDEX = 0,
          JOB_TIME_INDEX = 1;
      
    const getTakenTime = (count, job) => (count - job[ENTER_TIME_INDEX] + job[JOB_TIME_INDEX]);

    const isEqual = (array1, array2, index) => (array1[index] === array2[index]);

    const addAllTakenTimeAndAddCountAndSpliceJobs = (enableJobs) => {
        const enableJob = enableJobs[0];
        
        allTakenTime += getTakenTime(count, enableJob);
        count += enableJob[JOB_TIME_INDEX];    
      
        const index = jobs.findIndex((job) => isEqual(job, enableJob, ENTER_TIME_INDEX) && isEqual(job, enableJob, JOB_TIME_INDEX));
        jobs.splice(index, 1);
    };
    
    jobs = jobs.sort((job1, job2) => job1[ENTER_TIME_INDEX] - job2[ENTER_TIME_INDEX]);
    
    while (jobs.length) {
        let enableJobs = jobs.filter((job) => job[ENTER_TIME_INDEX] <= count);
        if (enableJobs.length === 1) {
            addAllTakenTimeAndAddCountAndSpliceJobs(enableJobs);
        } else if (enableJobs.length >= 2) {
            enableJobs = enableJobs.sort((job1, job2) => job1[JOB_TIME_INDEX] - job2[JOB_TIME_INDEX]);
            addAllTakenTimeAndAddCountAndSpliceJobs(enableJobs);
        } else {
            count = jobs[0][ENTER_TIME_INDEX];
        }
    }
    return Math.floor(allTakenTime / totalJobs);
}
