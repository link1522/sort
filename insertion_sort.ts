const insertionSort = (input: number[]) => {
  const output: number[] = []

  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      output.push(input[0])
      continue
    }

    for (let j = 0; j < output.length; j++) {
      if (input[i] <= output[j]) {
        output.splice(j, 0, input[i])
        break
      }

      if (j === output.length - 1) {
        output.push(input[i])
        break
      }
    }
  }

  return output
}

console.log(insertionSort([3, 2, 6, 2, 1]))
