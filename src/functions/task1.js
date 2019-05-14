const regex = /[\W_\s]/gm;

const task1 = (inputStr: string) => {
  if (typeof inputStr !== "string" || inputStr === undefined) {
    return new Error("Input Need to be a string and cannot be empty");
  }

  const result = inputStr
    .toLowerCase()
    .split(regex)
    .reduce((accumulator, currentValue) => {
      if (currentValue in accumulator) {
        accumulator[currentValue]++;
      } else {
        if (currentValue !== "") accumulator[currentValue] = 1;
      }
      return accumulator;
    }, {});

  if (result === {}) return [];

  const output = Object.keys(result)
    .map(key => ({ [`${key}`]: result[key] }))
    .sort(
      (valueA, valueB) => Object.values(valueB)[0] - Object.values(valueA)[0]
    );
  console.log("Task 1 Output: ", output);
  return output;
};

export default task1;
