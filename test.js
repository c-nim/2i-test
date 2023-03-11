/*
Task -----
provide code that reads a list of 10 numbers ranging between 1 to 100.
Assuming there are 4 duplicates in the list of numbers, the output should remove the duplicates and sort 
the remaining numbers in descending order. Please state any assumptions you’ve made.

Please upload to a public Github repository and share the link.”

Your solution to the above coding challenge will be scored using the following criteria as well as some others:
- Reusable function
- Boundaries assumptions match code
- GitHub
- Consistent naming convention
- Comments

My Assumptions -----
- Array will only include numbers
- numbers will be between 1 - 100
- Array will be 10 in length
- Original array is not to be changed
*/

//two example test cases
const array1 = [3, 3, 4, 4, 5, 5, 20, 20, 99, 34];
const array2 = [76, 76, 8, 90, 76, 90, 6, 8, 55, 7];

const removeSort = (inputArray) => {
    let noDuplicates = [];
    //loop through an array and add unique numbers to a new array
    for(let i = 0; i < inputArray.length; i++){
        // check if this is the first occurence of this number then add to new array
        if(inputArray.indexOf(inputArray[i])=== i) {
            noDuplicates.push(inputArray[i]);
        }
    }
    // sorts the array in descending order
    noDuplicates.sort((a,b)=>b-a);
    return noDuplicates;
}

console.log(removeSort(array1));
console.log(removeSort(array2));

