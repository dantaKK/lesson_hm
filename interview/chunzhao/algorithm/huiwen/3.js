function longerstPalindrome(s){
    if(s.length<2) return s;
    let start=0,maxLength=1;
    // 最小的回文 一个字符 左边和右边相等 字符串是奇数
    // 两个字符 偶数
    function expandAroundCenter(left,right){
      // 四周扩展
        while(left>=0 && right<s.length && s[left]===s[right]){
            if(right-left+1>maxLength){
                maxLength=right-left+1;
                start=left;
            }
            left--;
            right++;
        }    
    }
        for(let i=0;i<s.length;i++){
            expandAroundCenter(i,i);//奇数
            expandAroundCenter(i,i+1); // 偶数
        }

    return s.substring(start,start+maxLength);
}