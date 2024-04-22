// What is a Callback Function

//A callback function in JavaScript is a function that's passed as an argument to another function and is intended to be executed later, usually after some asynchronous operation completes or in response to some event.
//Callback functions allow you to define behavior that should happen once a certain task is finished or an event occurs.
//They're commonly used in asynchronous programming to handle the results of asynchronous tasks, such as fetching data from a server, reading a file, or responding to user interactions.

// function greet(item: string): string {
//   return item
// }

// // Synchronous function that takes a callback
// function processArraySync(array: number[], abc: (item: number) => void) {
//   for (let i = 0; i < array.length; i++) {
//     // Call the callback function for each element of the array
//     abc(array[i])
//   }
// }

// // Synchronous callback function
// function logItemSync(item: number) {
//   console.log('Processing item synchronously:', item)
// }

// const arraySync = [1, 2, 3, 4, 5]
// // Example usage of synchronous callback
// processArraySync(arraySync, logItemSync)
// console.log('This is the end')

//Async Callback Function Examples

// function hello() {
//   setTimeout(() => {
//     console.log('Hello World ')
//   }, 2000)
//   console.log('Hello World 2')
// }
// console.log('Before setTimeout')
// hello()
// // setTimeout(hello, 2000)
// console.log('After setTimeout')

// Asynchronous function that takes a callback
// function processArrayAsync(array: number[], callback: (item: number) => void) {
//   for (let i = 0; i < array.length; i++) {
//     // Call the callback function for each element of the array
//     setTimeout(() => callback(array[i]), 4000)
//   }
// }
// // Asynchronous callback function
// function logItemAsync(item: number) {
//   console.log('Processing item asynchronously:', item)
// }
// const arrayAsync = [1, 2, 3, 4, 5]
// // Example usage of asynchronous callback
// processArrayAsync(arrayAsync, logItemAsync)
// console.log('This is the end')

// Problem with Callbacks (CallBack Hell)
//  A Nested callbacks stacked below one  another forming a pyramind structure also known as a pyramind of Doom
// function get_User_ID(id: number) {
//   setTimeout(() => {
//     console.log('User ID:', id)
//   }, 2000)
// }

// get_User_ID(111)
// get_User_ID(222)
// get_User_ID(333)

function get_User_Data(data: number, get_next_user_Data?: () => void) {
  setTimeout(() => {
    console.log('User Data:', data)
    if (get_next_user_Data) {
      get_next_user_Data()
    }
  }, 2000)
}

// Callback Hell
get_User_Data(111, function () {
  get_User_Data(222, () => {
    get_User_Data(333)
  })
})
