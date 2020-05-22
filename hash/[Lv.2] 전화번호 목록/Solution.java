import java.util.*;

class Solution {
    public boolean solution(String[] phone_book) {
        boolean answer = true;        
        ArrayList<String>  phone_book_list = new ArrayList<String>(Arrays.asList(phone_book));
        for (String p: phone_book) {
            phone_book_list.remove(p);
            phone_book = phone_book_list.toArray(new String[phone_book_list.size()]);
            for (int i = 0; i < phone_book.length; i++) {
                if (phone_book[i].startsWith(p)) return false;
            }
            phone_book_list.add(p);
        }
        return answer;
    }
}