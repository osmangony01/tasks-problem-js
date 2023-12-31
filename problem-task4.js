/*
Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

 Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

*/

const arr = [1, 3, 6, 9, 11, 15];
const target = 9;

function twoSumIndex(arr, target){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]==target)
                return [i, j];
        }
    }
    return [];
}

const result = twoSumIndex(arr, target);
console.log(result);