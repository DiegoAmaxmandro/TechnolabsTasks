/*function countCharacter(inputString, inputCharacter) {
    let count = 0;
    let string = inputString.toLowerCase();
    let character = inputCharacter.toLowerCase();
      for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
           count++;
        }
      }
    return count; 
  };
  
  function capitalizeFirstCharacterOfWords(string) {
    let arr = string.split(" ");  
      for (let i = 0; i < arr.length; i++) {  
        let word = arr[i];
          arr[i] = word[0].toUpperCase() + word.substring(1); 
      }
    return arr.join(" "); 
  };
  
  
  function reverseWord(word) {
    return word.split("").reverse().join("");
  };
  
  function reverseAllWords(sentence) {
    let words = sentence.split(" ");
      for (let i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i]);
      }
     return words.join(" ");
  };
  
  
  function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
    return string.replace(toBeReplaced, replaceWith);
  };
  
  
  function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
    return string.split(toBeReplaced).join(replaceWith);
  };
  
  function encode(string) {
    let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
      for (let key in replacementObject) {
        string = replaceAllOccurrences(string, key, replacementObject[key]); 
      }	
      return string;
  };*/
  

  //********************************************************************************* */

  let MessageMixer = {};

  MessageMixer.countCharacter = function(inputString, inputCharacter){
    let count = 0;
    let string = inputString.toLowerCase();
    let character = inputCharacter.toLowerCase();
      for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
           count++;
        }
      }
    return count; 

  }

  MessageMixer.capitalizeFirstCharacterOfWords = function(string){
    let arr = string.split(" ");  
    for (let i = 0; i < arr.length; i++) {  
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1); 
    }
   return arr.join(" "); 

  }

  MessageMixer.reverseWord = function(word){
    return word.split("").reverse().join("");
  }

  MessageMixer.reverseAllWords = function(sentence){
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseWord(words[i]);
    }
    return words.join(" ");
  }

  MessageMixer.replaceAllOccurrences = function(string, toBeReplaced, replaceWith){
    return string.split(toBeReplaced).join(replaceWith);

  }

  MessageMixer.replaceFirstOccurence = function(string, toBeReplaced, replaceWith){
    return string.replace(toBeReplaced, replaceWith);
  }

  MessageMixer.encode = function(string){
    let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
      for (let key in replacementObject) {
        string = replaceAllOccurrences(string, key, replacementObject[key]); 
      }	
      return string;
  }

  MessageMixer.palindrome = function(string){
    return `${string} ${MessageMixer.reverseWord(string)}`
  }

  MessageMixer.pigLatin = function(sentence, character){
    return sentence.split(' ').join(character + ' ');
  }

  export default MessageMixer;


  export const countCharacter = function(inputString, inputCharacter) { 
      let count = 0;
      let string = inputString.toLowerCase();
      let character = inputCharacter.toLowerCase();
        for (let i = 0; i < string.length; i++) {
          if (string[i] === character) {
            count++;
          }
        }
      return count; 
   }

   export const capitalizeFirstCharacterOfWords = function(string){
        let arr = string.split(" ");  
        for (let i = 0; i < arr.length; i++) {  
          let word = arr[i];
            arr[i] = word[0].toUpperCase() + word.substring(1); 
        }
      return arr.join(" "); 
    
   }

   export const reverseWord = function(word){
    return word.split("").reverse().join("");
  
  }

   export const reverseAllWords = function(sentence){
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseWord(words[i]);
    }
    return words.join(" ");
  }
   export const replaceAllOccurrences = function(string, toBeReplaced, replaceWith){
    return string.split(toBeReplaced).join(replaceWith);

  }
   export const replaceFirstOccurence = function(string, toBeReplaced, replaceWith){
    return string.replace(toBeReplaced, replaceWith);
  }

  export const encode = function(string){
    let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
      for (let key in replacementObject) {
        string = replaceAllOccurrences(string, key, replacementObject[key]); 
      }	
      return string;
  }

  export const palindrome = function(string){
    return `${string} ${MessageMixer.reverseWord(string)}`
  }

  export const pigLatin = function(sentence, character){
    return sentence.split(' ').join(character + ' ');
  }



