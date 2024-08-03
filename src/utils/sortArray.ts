export const sortAscending = (arr: number[]) => {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr.length - 1; y++) {
      if (arr[y] > arr[y + 1]) {
        const temp = arr[y];
        arr[y] = arr[y + 1];
        arr[y + 1] = temp;
      }
    }
  }

  return arr;
};

export const sortDescending = (arr: number[]) => {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr.length - 1; y++) {
      if (arr[y] < arr[y + 1]) {
        const temp = arr[y];
        arr[y] = arr[y + 1];
        arr[y + 1] = temp;
      }
    }
  }

  return arr;
};
