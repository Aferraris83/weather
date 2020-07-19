export const getFiveDays = list => {
  let arrDays = [];
  for (let i = 0; i < list.length; i += 8) {
    arrDays.push(list[i]);
  }
  return arrDays;
};

