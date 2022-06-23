// To find longest word from a string using custom code

/**
 * Step 01 - Make a function- longestWord which returns desired output.
 * Step 02 - Create a empty string variable.
 * Step 03 - Split the input in different words.
 * Step 04 - Iterate the loop on the input by using for-of loop.
 * Step 05 - Check wheather the current item of loop is greater than the stack.
 * Step 5.1- If yes than replace the value of stack.
 * Step 06 - Return the final value of stack.
 */

let str = "My name is I am a software engineer luckyRiteshMalviya";
function longestWord(input) {
  let stack = "";
  str = str.split(" ");
  //   console.log(str);
  for (let item of str) {
    // console.log(item);
    if (stack.length < item.length) {
      stack = item;
      continue;
    }
  }
  return stack;
}
console.log(longestWord(str));
