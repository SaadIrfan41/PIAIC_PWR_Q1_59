//Promises are objects representing the eventual completion or failure of an asynchronous operation. They allow you to handle asynchronous code in a more elegant and readable way by providing a cleaner syntax for chaining asynchronous operations and handling their results or errors.

//Resolve and reject are callback functions provided by the Promise constructor to indicate the outcome of the asynchronous operation. When the operation is successful, you call resolve() with the result value, and when it encounters an error, you call reject() with the error value. These functions allow you to control the state of the Promise and determine whether it resolves or rejects.

// A Promise has 3 States Pending, Resolve, Reject

//Sync Promise
// let promise = new Promise((resolve, reject) => {
//   console.log('This is a promise')
//   resolve('Promise Resolved')

//   //   reject('Promise Rejected')
//   //   reject('Promise Rejected')
// })
// promise
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// Function that returns a promise
// function doSomethingAsync() {
//   return new Promise((resolve, reject) => {
//     // Simulate an asynchronous operation (e.g., fetching data from a server)
//     setTimeout(() => {
//       const isSuccess = Math.random() < 0.5 // Randomly determine success or failure
//       if (isSuccess) {
//         // Resolve the promise with a result
//         resolve('Success! Data fetched successfully.')
//       } else {
//         // Reject the promise with an error
//         reject(new Error('Failed to fetch data.'))
//       }
//     }, 1000) // Simulate a delay of 1 second
//   })
// }

// // Using the promise
// doSomethingAsync()
//   .then((result) => {
//     console.log('Promise resolved:', result)
//   })
//   .catch((error) => {
//     console.error('Promise rejected:', error.message)
// //   })

// // Function that returns a promise to get user data
// function get_User_Data(data: number): Promise<void> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('User Data:', data)
//       resolve() // Resolve the promise once the data is processed
//     }, 2000)
//   })
// }

// // Using promises to avoid callback hell But it imtroduces an new problem of Promise Chaning
// get_User_Data(111)
//   .then(() => get_User_Data(222))
//   .then(() => get_User_Data(333))
//   .catch((error) => console.error('Error:', error))

//  ASYNC/AWAIT (A much cleaner way to work with promises)

// Function that returns a promise to get user data
function get_User_Data(data: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('User Data:', data)
      resolve() // Resolve the promise once the data is processed
    }, 2000)
  })
}

// Using async await to avoid promise Chaining
// async function getData() {
//   await get_User_Data(111)
//   await get_User_Data(222)
//   await get_User_Data(333)
//   await get_User_Data(444)
// }
// getData()

// //  IIFE (Immediately Invoked Function Expression)
// (async function () {
//   await get_User_Data(111)
//   await get_User_Data(222)
//   await get_User_Data(333)
//   await get_User_Data(444)
// })()
