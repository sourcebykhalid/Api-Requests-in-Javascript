// Promises in Javascript
// are used to handle asynchronous operations. They provide a way of handling the result or error after an operation
// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Task 1 completed");
//     resolve("Success");
//   }, 1000);
// });
// promiseOne.then((result) => {
//   console.log(result);
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Task 2 completed");
//     resolve("Success");
//   }, 1500);
// }).then((results) => {
//   console.log(`Result of task two is ${results}`);
// });

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "Lexili", email: "khalid34@gmail.com" });
//   }, 2000);
// });
// promiseThree.then((result) => {
//   console.log(result.username); //destructuring object to get only the value for key 'username
// });

// promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ Client: "meta", ClId: 6789 });
//     } else {
//       reject("Error: Something went wrong");
//     }
//   }, 2300);
// });
// promiseFour
//   .then((result) => {
//     console.log(result);
//     return result.ClId;
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log(`The Promise is finally resolved or rejected`);
//   });

// Fetch method in Javascript
// async function getGithubApi() {
//   try {
//     const api = await fetch("https://api.github.com/users/sourcebykhalid");
//     const data = await api.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// getGithubApi();

// const apiGithub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const fetchResult = fetch("https://api.github.com/users/sourcebykhalid");
//     console.log(fetchResult);
//     resolve(fetchResult);
//   }, 1300);
// })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// apiGithub();

// fetch("https://api.github.com/users/sourcebykhalid")
//   .then((value1) => {
//     return value1.json();
//   })
//   .then((value2) => {
//     console.log(value2);
//   })
//   .catch(() => {
//     console.log("Error found");
//   });
