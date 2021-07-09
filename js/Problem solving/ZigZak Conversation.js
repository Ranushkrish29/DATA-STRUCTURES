/*The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
 (you may want to display this pattern in a fixed font for better legibility)

    P   A   H   N
    A P L S I I G
    Y   I   R
    And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:
    string convert(string s, int numRows);

Example 1:
    Input: s = "PAYPALISHIRING", numRows = 3
    Output: "PAHNAPLSIIGYIR"

Example 2:
    Input: s = "PAYPALISHIRING", numRows = 4
    Output: "PINALSIGYAHRPI"
    Explanation:
        P     I    N
        A   L S  I G
        Y A   H R
        P     I

Example 3:
    Input: s = "A", numRows = 1
    Output: "A"
*/


//Navie  Implemetation  =   runtime -->  O(String + numrows) ||  space -->  O(n)
function convert(string, numrows) {
    let rows = [];

    if (numrows < 2)
        return string;

    for (let i = 0; i < numrows; i++)
        rows.push(string[i]);

    let currentrow = numrows - 2,
        prevrow = numrows - 1;

    for (let i = numrows; i < string.length; i++) {
        rows[currentrow] += (string[i]);
        if (prevrow - Math.abs(currentrow) > 0 && currentrow > 0) {
            prevrow = currentrow;
            currentrow--;
        } else {
            prevrow = currentrow;
            currentrow++;
            if (currentrow > numrows - 1) {
                prevrow = currentrow--;
                currentrow--;
            }
        }
    }
    console.log(rows)
    return rows.join("");
}

console.log(convert("PAYPALISHIRING", 3));//PAHNAPLSIIGYIR


//Optimized Implemetation 1  =   runtime -->  O(String) ||  space -->  O(n)
function convert1(string, numrows) {
    let rows = [];

    if (numrows < 2)
        return string;

    for (let i = 0; i < numrows; i++)
        rows.push('');

    let currentrow = 0, down = true;
    for (let i = 0; i < string.length; i++) {
        rows[currentrow] += (string[i]);
        if (currentrow === 0 || currentrow === numrows - 1) down = !down;
        currentrow = down ? currentrow - 1 : currentrow + 1;
    }

    return rows.join("");
}
console.log(convert1("PAYPALISHIRING", 3));//PAHNAPLSIIGYIR


//Optimized Implemetation 2  =   runtime -->  O(n) ||  space -->  O(n)
function convert(s, numRows) {
    var length = s.length;
    if (numRows == 1) return s;
    var cycleLen = numRows * 2 - 2;
    var aZig = [];
    for (var i = 0; i < numRows; i++) {
        for (var j = 0; j + i < length; j = j + cycleLen) {
            aZig.push(s.charAt(j + i));
            if (i != 0 && i != numRows - 1 && j + cycleLen - i < length) {
                aZig.push(s.charAt(j + cycleLen - i));
            }
        }
    }

    return aZig.join("");
}