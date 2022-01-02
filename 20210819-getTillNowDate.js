function getTillNowDate(num = 0, unit = 'day') {
  const nowDate = new Date('2021-03-31');
  let y = nowDate.getFullYear();
  let m = nowDate.getMonth() + 1;
  let d = nowDate.getDate();
  switch (unit) {
    case 'year':
      y -= num;
      break;
    case 'month':
      m -= num;
      break;
    case 'week':
      d -= 7 * num;
      break;
    case 'day':
      d -= num;
      break;
  }
  const dateStr = `${y}-${m}-${d}`;
  console.log(dateStr);
  const thatDate = new Date(dateStr);
  return thatDate;
}
console.log(getTillNowDate(1, 'month'));
