const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string')
    return false;
  let activity = parseFloat(sampleActivity);
  if (isNaN(activity))
    return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let result =  Math.ceil(Math.log(MODERN_ACTIVITY / activity)/k)
  return !isFinite(result) || result < 0 ? false : result;
};
