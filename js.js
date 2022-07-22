//Now finiding the sum of each row 
//sum of first row : 8+1+6= 15
//sum of second row 3+5+7 = 15
// sum of the third row 4+9+2= 15

//finding the sum of each column 
//sum of the first column: 8+3+4= 15
//sum of the first column: 1+5+9 = 15

//now ,finding the sum of each diagonal:
//sum of the first diagonal: 8+5+2=15
//sum of the first diagonal :6+5+4 = 15



function squares(array) {
    for (let i = 0; i < array.length; i++) {
        // diagonal from left to right
        if (i == 0) {
            if ((array[i]) + (array[i + 4]) + (array[i + 8]) != 15)
                return false;
        }
        //diagonal from right to left 
        if (i == 2) {
            if ((array[i]) + (array[i + 2]) + (array[i + 4]) != 15)
                return false;
        }
        //Row 
        if (i == 0 || i == 3 || i == 6) {
            if ((array[i]) + (array[i + 1]) + (array[i + 2]) != 15)
                return false;
        }
        //cloum
        if (i < 3) {
            if ((array[i]) + (array[i + 3]) + (array[i + 6]) != 15)
                return false;
        } else {
            return true;
        }
    }
}
console.log(squares([
    8, 1, 6,
    3, 5, 7,
    4, 9, 2]))

console.log(squares([
        2, 7, 6,
        9, 5, 1,
        4, 3, 8]))

console.log(squares([
        3, 5, 7,
        8, 1, 6,
        4, 9, 2]))

console.log(squares([
        8, 1, 6,
        7, 5, 3,
        4, 9, 2]))
//....i
//0,1,2,3,4,5,6,7,8
//8, 1, 6, 3, 5, 7, 4, 9, 2