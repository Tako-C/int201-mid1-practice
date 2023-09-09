function arrayManipulator(inputArray, config) {
  let resultArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    for (let c = 0; c < config.add.length-1; c++) {
      let result =(((inputArray[i] + config.add[c] + config.add[c + 1]) - config.subtract) *config.multiply) / config.divide;
      resultArray.push(result);
    }
  }
  return resultArray;
}

const inputArray = [1, 2, 3, 4];
const config = { add: [10, 20], subtract: [5], multiply: 2, divide: 3 };

const result= arrayManipulator(inputArray, config);
console.log(result);

// module.exports = arrayManipulator;
