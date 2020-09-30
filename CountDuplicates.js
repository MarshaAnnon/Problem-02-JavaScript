class CountDuplicates {
    countDups(input) {
      let obj = {};
      let count = 0;
      for (let element of input) {
        obj[element] = obj[element] + 1 || 1;
      }
      for (let value in obj) {
        if (obj[value] > 1) {
          count += 1;
        }
      }
      return count;
    }
}    

module.exports = CountDuplicates;