/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((value) =>{
  if(value.profession === "developer"){
    console.log(value);
  }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((value) => {
    if(value.profession === "developer"){
      console.log(value);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4, name:"susan", age:"20", profession:"intern"});
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let filteredEmployees = arr.filter(employee => employee.profession !== "admin");
  console.log(filteredEmployees);
}

function concatenateArray() {
  //Write your code here, just console.log
   let newArray = [
    {id:5, name:"john", age:"22", profession:"designer"},
    {id:6, name:"alex", age:"25", profession:"manager"},
    {id:7, name:"lisa", age:"21", profession:"engineer"}
  ];

  let concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}
