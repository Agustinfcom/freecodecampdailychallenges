/*
SpOoKy~CaSe

Given a string representing a variable name, convert it to "spooky case" using the following constraints:

    Replace all underscores (_), and hyphens (-) with a tilde (~).
    Capitalize the first letter of the string, and every other letter after that. Ignore the tilde character when counting. Make all other letters lowercase.

For example, given hello_world, return HeLlO~wOrLd.

*/ 


function spookify(boo) {
  const replaceableChar = ["_","-"]
  const replaceChar = "~"
  let SpOoKyStRiNg =""
  let upper = true
  for (let char of boo){
    console.log(char)
    if(replaceableChar.includes(char)){
      SpOoKyStRiNg+=replaceChar
    } else {
      upper? SpOoKyStRiNg+=char.toUpperCase(): SpOoKyStRiNg+=char.toLowerCase()
      upper=!upper
    }
  }
  return SpOoKyStRiNg;
}