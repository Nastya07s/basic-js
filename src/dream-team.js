module.exports = function createDreamTeam(array) {
  if (!Array.isArray(array)){
    return false;
  }
  let str = [];
  array.forEach((elem) => {
    if(typeof(elem) === 'string')
    str.push(elem.trim()[0].toUpperCase());
  });
  return str.sort().join('');
};