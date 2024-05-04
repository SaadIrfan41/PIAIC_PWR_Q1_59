async function foo() {
  return 'foo'
}

;(async () => {
  console.log(await foo())
})()
