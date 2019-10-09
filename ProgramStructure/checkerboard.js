/** 
 * Create a checkerboard pattern that looks something like...
 * this: '# # # # '
 *       ' # # # #'
 *       '# # # # '
 *       ' # # # #'
 * Use the new-line character between rows.
 */


 /* jshint esversion: 6 */

size = 20;

for (let rowNum = 1; rowNum < size; rowNum++) {
    let row = '';
    for(let i = rowNum; i < size + rowNum; i++){
        let square = '';
        if (i % 2 === 0){
            square = '#';
        }
        else{
            square = ' ';
        }
        row += square;
    }
    console.log(row + '\n');
}