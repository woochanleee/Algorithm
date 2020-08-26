import java.util.*;

class Solution {
    public int solution(int[] scoville, int K) {
        int answer = 0;
        
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
        
        for (int oneScoville : scoville) {
            priorityQueue.offer(oneScoville);
        }
        
        while (priorityQueue.peek() < K) {
            if (priorityQueue.size() == 1) { 
                answer = -1;    
                break;
            }
            int mixedScoville = priorityQueue.poll() + priorityQueue.poll() * 2;
            
            priorityQueue.add(mixedScoville);        
            answer++;
        }
        return answer;
    }
}
