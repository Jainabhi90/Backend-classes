//Section 1
let fs = require("fs");

fs.writeFileSync(
  "/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/Welcome.txt",
  "Welcome to Backend Development!",
);
console.log("File created successfully");

let a = fs
  .readFileSync(
    "/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/Welcome.txt",
  )
  .toString();

console.log(a);

//Section 2
// ques 3
fs.writeFileSync(
  "/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/tasks.txt",
  "Task 1: Learn Node",
);
fs.appendFileSync(
  "/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/tasks.txt",
  "\nTask 2: Learn fs module",
);

//ques4
fs.writeFileSync(
  "/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/demo.txt",
  "AAA",
);
console.log(
  fs
    .readFileSync(
      "/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/demo.txt",
    )
    .toString(),
);

fs.writeFileSync(
  "/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/demo.txt",
  "BBB",
);
console.log(
  fs
    .readFileSync(
      "/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/demo.txt",
    )
    .toString(),
);

fs.appendFileSync(
  "/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/demo.txt",
  "CCC",
);
console.log(
  fs
    .readFileSync(
      "/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/demo.txt",
    )
    .toString(),
);

// section c
// fs.mkdirSync(
//   "/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/myProject",
// );
// fs.writeFileSync(
//   "/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/myProject/info.txt",
//   "This is inside a folder",
// );
// console.log(
//   fs.readdirSync(
//     "/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/myProject",
//   ),
// );

//section d
console.log("Start")
fs.readFile("/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/Welcome.txt","utf-8",(err,data)=>{
        console.log(data);
})
console.log("End");

//section e
fs.mkdirSync("/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/data")
fs.writeFileSync("/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/data/notes.txt","Note 1: Backend is fun")
fs.appendFileSync("/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/data/notes.txt","\nNote 2: fs module learned")
fs.appendFileSync("/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/data/notes.txt","\nNote 3: CRUD done")
let v= fs.readFileSync("/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/data/notes.txt","utf-8")
console.log(a)
let arr=v.split("\n")
console.log(arr.length)
fs.rmSync(
  "/Users/krishu/Documents/Learning/Backend/Assignments/Assignments/Assignmnet_1/data",
  { recursive: true }
);