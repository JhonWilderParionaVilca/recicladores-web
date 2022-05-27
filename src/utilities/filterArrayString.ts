export const insertDeleteStringArray = (arr: string[], itemFind: string) => {
  const alreadyItem = arr.findIndex((item) => item === itemFind);
  if (alreadyItem >= 0) {
    const filteredItems = arr.filter((item) => item !== itemFind);
    return filteredItems;
  }
  return [...arr, itemFind];
};
