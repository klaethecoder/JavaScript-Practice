/*Write a simple function(less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.*/

// Function Declaration
function palindrome(word) {
    return [...word.toLowerCase()].reverse().join('') == word.toLowerCase();
}
// Function Expression

const palindrome2 = (word) => [...word.toLowerCase()].reverse().join("") == word.toLowerCase();

console.log(palindrome("RaceCar"))
console.log('function palindrome(word){return [...word.toLowerCase()].reverse().join("") == word.toLowerCase();}'.length)

console.log(palindrome2("LeVel"))
console.log('const palindrome2 = (word) => [...word.toLowerCase()].reverse().join("") == word.toLowerCase();'.length)


// Free Code Camp Version of Palindrome Solution
function palindrome(str) {
    return str.replace(/[\W_]/g, '').toLowerCase() ===
        str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}