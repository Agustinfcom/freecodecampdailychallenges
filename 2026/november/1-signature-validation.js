/*
Signature Validation

Given a message string, a secret key string, and a signature number, determine if the signature is valid using this encoding method:

    Letters in the message and secret key have these values:
        a to z have values 1 to 26 respectively.
        A to Z have values 27 to 52 respectively.
    All other characters have no value.
    Compute the signature by taking the sum of the message plus the sum of the secret key.

For example, given the message "foo" and the secret key "bar", the signature would be 57:

f (6) + o (15) + o (15) = 36
b (2) + a (1) + r (18) = 21
36 + 21 = 57

Check if the computed signature matches the provided signature.

*/



function verify(message, key, signature) {
    let finalCount = checkCharCount(message) + checkCharCount(key)
    return finalCount === signature
}

function checkCharCount(string){
    //where 'a' starts
    const LOWERCHARSTART = 97
    //Where 'A' starts
    const UPPERCHARSTART = 65

    let count = 0

    for(let char of string){
      let charCode = char.charCodeAt(0)
      if(char >= 'A' && char <= 'Z' ){
        //Is Uppercase
        count += charCode - UPPERCHARSTART + 27
      }else if (char >= 'a' && char <= 'z' ){
        //Is Lowercase
        count += charCode - LOWERCHARSTART + 1
      }
  }
  return count
}