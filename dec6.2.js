function isPalindrome(str){ 
    let reversedStr = '';
    for(let i = str.length - 1; i >= 0; i--){
      reversedStr += str[i];
    }
    return reversedStr === str;
  }
  
  console.log(isPalindrome('level')); //true
  console.log(isPalindrome('india')); //false