export const isPositiveInteger = (value: any): boolean => {
    const numberValue = Number(value);
    return Number.isInteger(numberValue) && numberValue > 0;
};

export const getBiggerValueOfTwo = (
    firstVal: number,
    secondVal: number
): number => {
    return firstVal > secondVal ? firstVal : secondVal;
};

export const getSmallerValueOfTwo = (
    firstVal: number,
    secondVal: number
): number => {
    return firstVal < secondVal ? firstVal : secondVal;
};

export const isSufficientBalance = (totalCost: number, balance: number) => {
    return totalCost <= balance;
};
