const task2 = (n: number, m: string[]): void => {
  const findInArrays = (input: number, arr: any[]): number => {
    let returnMsg = -1;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === input) {
          returnMsg = i;
          break;
        }
      }
    }
    return returnMsg;
  };

  const findNeverShow = (n: number, arrays: any[]): any[] => {
    let returnMsg: number[] = [];
    for (let i = 1; i <= n; i++) {
      returnMsg[i - 1] = i;
    }
    arrays.forEach((currentArr: number[]) => {
      currentArr.forEach((value: number) => {
        returnMsg.splice(returnMsg.indexOf(value), 1);
      });
    });

    return returnMsg;
  };

  let returnArrs: any[] = [];
  const convertInts = m.map(value => {
    return value.split(" ").map(value => parseInt(value));
  });

  for (let k = 0; k < m.length; k++) {
    // let firstFindResult = -1;
    // let secondFindResult = -1;

    let firstFindResult = findInArrays(convertInts[k][0], returnArrs);
    let secondFindResult = findInArrays(convertInts[k][1], returnArrs);

    if (firstFindResult === -1 && secondFindResult === -1) {
      returnArrs.push([convertInts[k][0], convertInts[k][1]]);
    } else if (firstFindResult !== -1 && secondFindResult !== -1) {
      // Concat 2 different array
      let find1 = returnArrs[firstFindResult];
      let find2 = returnArrs[secondFindResult];

      let newElem = find1.concat(find2);
      returnArrs.push(newElem);
      // newElem.splice(newElem.indexOf(convertInts[k][0]), 1);
      // newElem.splice(newElem.indexOf(convertInts[k][1]), 1);

      returnArrs.splice(returnArrs.indexOf(find1), 1);

      returnArrs.splice(returnArrs.indexOf(find2), 1);
    } else {
      // Only One find
      if (firstFindResult !== -1) {
        returnArrs[firstFindResult].push(convertInts[k][1]);
      } else {
        returnArrs[secondFindResult].push(convertInts[k][0]);
      }
    }
  }

  const cost1 = returnArrs.reduce((acc: number, currentArr) => {
    return acc + Math.ceil(Math.sqrt(currentArr.length));
  }, 0);

  const cost2 = returnArrs.reduce((acc: number) => {
    return acc + Math.ceil(Math.sqrt(1));
  }, 0);
  console.log("Task 2 Output: ", cost1 + cost2);
  return cost1 + cost2;
};

export default task2;
