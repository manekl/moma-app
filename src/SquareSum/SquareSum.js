//TODO 

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function suqareSum(arrSum){

    // commenting out in console
    console.log("I am in squaresum",arrSum);

    let totalSum = 0;

    arrSum.forEach(element => {
        totalSum = totalSum + (element*element);
    });

    console.log("total sum comes out to be >>", totalSum);
    return totalSum;
}

export default suqareSum