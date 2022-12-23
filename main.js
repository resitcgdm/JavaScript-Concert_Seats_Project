// Displaying
console.log(canSeeStage([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));  
console.log(canSeeStage([[0, 0, 0], [1, 1, 1], [2, 2, 2]]));  
console.log(canSeeStage([[2, 0, 0], [1, 1, 1], [2, 2, 2]]));  
console.log(canSeeStage([[1, 0, 0], [1, 1, 1], [2, 2, 2]]));  
 
// Creating Function
function canSeeStage(seats) {

    for (let i = 0; i < seats.length; i++) {
        for (let j = 0; j < seats.length - 1; j++) {
            if (seats[j + 1][i] <= seats[j][i]) return false;
        }
    }
    return true;
}