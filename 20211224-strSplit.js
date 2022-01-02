function strSplit(str) {
  const strArr = str.split('或')
  const numArr = []
  strArr.forEach(n => {
    const r = n.trim()
    numArr.push(Number(r.substring(0, r.length - 1)))
  })
  return numArr
}


console.log(strSplit('2.0%'))
console.log(strSplit('2.0% 或 3.0%'))
console.log(strSplit('2.0% 或 3.0% 或 10.5%'))