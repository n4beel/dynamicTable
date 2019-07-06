let table = document.querySelectorAll("td");
let col = document.getElementById("col");
console.log(table)

getId = (row,column) =>{
     col.innerHTML = `Cell you selected is : ${row} x ${column}`;
}