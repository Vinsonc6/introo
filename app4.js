/* function telemarket(d1, d2, d3, d4) {
 if ((d1=== 8|| d1===9) && (d4===8 || d4===9) && (d2===d3)) {
  console.log("IGNORE");
    }
   console.log("ANSWER");
}
   */

const students = ["jean", "londom", "damian", "thomas"];

function printALL(list){ 
    //iteration
    for (let i=0; i<list.length; i++) {
        //sequencing
        console.log(i);
        console.log(list[i]);
    }       
} 
printALL(students);
students.forEach((el, index) => console.log(index + 1));
function add1(a + b) {
    return a + b;
}
//arrow function doesnt need return
const add2 = (a, b) => a + b;
console.log(add1(5, 6));


/* const found = students.find((el) => el === "jean")
