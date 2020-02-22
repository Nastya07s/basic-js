module.exports = function countCats(backyard) {
  let count = 0;
  backyard.forEach((array) => array.forEach((elem) => {
    if(elem === "^^")
      count++;
  }));
  return count;
};
