const selectionSort = (input) => {
  // deep clone input array
  const output = JSON.parse(JSON.stringify(input))

  let temp = {
    index: -1,
    value: null
  }

  for (let i = 0; i < output.length; i++) {
    temp.index = i
    temp.value = output[i]

    for (let j = i + 1; j < output.length; j++) {
      if (temp.value > output[j]) {
        temp.index = j
        temp.value = output[j]
      }

      if (j === output.length - 1) {
        output.splice(temp.index, 1)
        output.splice(i, 0, temp.value)
      }
    }
  }

  return output
}

console.log(selectionSort([5, 2, 2, 23, 4]))