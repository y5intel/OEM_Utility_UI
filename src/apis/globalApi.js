export const isPositiveInteger = (value) => {
    const numberValue = Number(value);
    return Number.isInteger(numberValue) && numberValue > 0;
};

export const getBiggerValueOfTwo = (firstVal, secondVal) => {
    return firstVal > secondVal ? firstVal : secondVal;
};

export const getSmallerValueOfTwo = (firstVal, secondVal) => {
    return firstVal < secondVal ? firstVal : secondVal;
};
