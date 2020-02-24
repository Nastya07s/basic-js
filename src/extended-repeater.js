module.exports = function repeater(str, options) {

    let result = '';
    if (options === undefined) {
        return result;
    };
    if (options.repeatTimes !== undefined) {
        for (let i = 0; i < options.repeatTimes; i++) {
            result += str;
            if (options.addition !== undefined) {
                result = addAdition(result, options);
            }
            if (i !== options.repeatTimes - 1)
                result += options.separator || '+';;
        }
    } else {
        result += str;
        result = addAdition(result, options)
    }
    return result;
};

function addAdition(result, options) {
    if (options.additionRepeatTimes !== undefined && options.additionRepeatTimes !== 1) {
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            if (j !== options.additionRepeatTimes - 1)
                result += options.addition + options.additionSeparator || '|';
            else
                result += options.addition
        };
    } else {
        result += options.addition;
    }

    return result;
}