const calculate = document.getElementById('calculate');
const testYear = document.getElementById('text-year');
const testMonth = document.getElementById('text-month');
const testDate = document.getElementById('text-date');
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const currentDayDateYear = new Date();
let current = {
  year: currentDayDateYear.getFullYear(),
  month: currentDayDateYear.getMonth() + 1,
  date: currentDayDateYear.getDate(),
};
let result = {
  year: 0,
  month: 0,
  date: 0,
};
function calculation() {
  let birthDayDate = document.getElementById('input').value;
  console.log(birthDayDate);
  birthDayDate = birthDayDate.split('-');
  birth = {
    year: birthDayDate[0],
    month: birthDayDate[1],
    date: birthDayDate[2],
  };
  if (
    birth.year > current.year ||
    (birth.year === current.year && current.month < birth.month) ||
    (birth.year === current.year &&
      current.month === birth.month &&
      current.date < birth.month)
  ) {
    alert(':) Hey you not yet land into the world!!');
    return;
  }
  if (current.date == birth.date && current.month == current.month) {
    alert('Im wishing you a very Happiest Bornday');
  }
  if (current.year >= birth.year) {
    result.year = current.year - birth.year;
  }
  if (current.month >= birth.month) {
    result.month = current.month - birth.month;
  } else if (current.month < birth.month) {
    result.year--;
    result.month = 12 + current.month - birth.month;
  }
  if (current.date >= birth.date) {
    result.date = current.date - birth.date;
  } else if (current.date < birth.date) {
    if (current.year % 4 === 0) {
      months[1] = 29;
    }
    result.month--;
    result.date = months[current.month - 2] + current.date - birth.date;
    if (result.month < 0) {
      result.year--;
      result.month = 11;
    }
  }
  testYear.textContent = result.year;
  testMonth.textContent = result.month;
  testDate.textContent = result.date;
}

calculate.addEventListener('click', calculation);
