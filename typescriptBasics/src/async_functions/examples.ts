// callback queue / Macrotask Queue vs micro task queue :

// both setTimeout and promises are essential for handling asynchronous tasks in JavaScript, but they operate in different queues

// callback queue / Macrotask Queue  for setTimeout, and microtask queue for promises, with promises offering a more sophisticated and composable approach to handling asynchronous code.

//Note: Promise body is executed sync and resolve reject will execute async.

//Note: Body of a async function execute sync and only the await part is async executed

// MacroTask Queue

// setTimeout(() => {
//   console.log('This is a Maccro Task')
// }, 2000)

// Micro Task Queue

// queueMicrotask(() => {
//   console.log('This is a Micro Que Task')
// })

//Note: In Case of async/await the code after the await will be executed as microtask

// async function asyncfunction() {
//   console.log('Hello')
//   await console.log('World')
//   console.log('Hi !')
// }
// asyncfunction()

//This is a shorthand way to create a promise that is immediately resolved.
//You are indirectly creating a promise without explicitly using the new Promise() syntax.

// Example # 1

// Promise.resolve().then(() => {
//   console.log(1)
// })
// queueMicrotask(() => {
//   console.log(2)
// })
// setTimeout(() => {
//   console.log(3)
// }, 0)
// console.log(4)
// new Promise((resolve, reject) => {
//   console.log(5)
// })
// ;(async () => {
//   console.log(6)
// })()

// Example # 2

// async function asyncfunction() {
//   console.log(1)
//   new Promise(() => {
//     console.log(2)
//   })
//   await new Promise<void>((resolve, reject) => {
//     setTimeout(() => {
//       console.log(3)
//       resolve()
//     }, 0)
//   })
// }
// new Promise<void>((resolve, reject) => {
//   console.log(4)
//   ;(async () => {
//     console.log(5)
//     await asyncfunction()
//     console.log(6)
//   })()
//   resolve()
// }).then(() => {
//   console.log(7)
// })
// console.log(8)

// Example 3
// ;(async () => {
//   const asyncFunc = async () => 'asyncFunc'
//   const promise = new Promise((res) => {
//     console.log('Promise')
//   }).then(() => {
//     console.log('Then')
//   })
//   console.log('async Body')
//   queueMicrotask(() => {
//     console.log('Micro Task')
//   })
//   const result = await Promise.all([asyncFunc, promise])
//   return result
// })()

// console.log('End')

// Example 4

function job(state: Boolean) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve('success')
    } else {
      reject('error')
    }
  })
}

let promise = job(true)

promise

  .then(function (data) {
    console.log(data)

    return job(true)
  })

  .then(function (data) {
    if (data !== 'victory') {
      throw 'Defeat'
    }

    return job(true)
  })

  .then(function (data) {
    console.log(data)
  })

  .catch(function (error) {
    console.log(error)

    return job(false)
  })

  .then(function (data) {
    console.log(data)

    return job(true)
  })

  .catch(function (error) {
    console.log(error)

    return 'Error caught'
  })

  .then(function (data) {
    console.log(data)

    return new Error('test')
  })

  .then(function (data) {
    console.log('Success:', data.message)
  })

  .catch(function (data) {
    console.log('Error:', data.message)
  })
