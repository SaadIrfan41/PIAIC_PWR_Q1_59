function hello() {
  console.log('Hello World')
}
console.log('Before setTimeout')
setTimeout(hello, 2000)
console.log('After setTimeout')
