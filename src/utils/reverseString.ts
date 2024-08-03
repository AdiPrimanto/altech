export const reverseString = (val: string) => {
  return val === val.split("").reverse().join("");
};
