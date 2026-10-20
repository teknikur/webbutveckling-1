const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

function getDayOfWeek(dateArray) {
  const day = dateArray[2];
  const month = dateArray[1];
  const year = dateArray[0];

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let totalDays = 0;

  // Count complzete years before current year
  for (let y = 1; y < year; y++) {
    totalDays += isLeapYear(y) ? 366 : 365;
  }

  // Count complete months before current month
  for (let m = 1; m < month; m++) {
    if (m === 2 && isLeapYear(year)) totalDays += 29;
    else totalDays += daysInMonth[m - 1];
  }

  // Add days in current month
  totalDays += day - 1;

  // 01-01-0001 was Monday

  return weekDays[totalDays % 7];
}

function test() {
  let outputBox = document.getElementById("resultOutput");
  const weekdaySelector = document.getElementById("weekdaySelector");
  const weekdaySelectorT = weekdaySelector.selectedOptions;
  let resultOutput = "";
  const dateMMDDYYYY = document.getElementById("dateMMDDYYYY").value;
  let dateArray = dateMMDDYYYY.split("-");
  let currentDate = new Date();
  let currentDateT = currentDate.toISOString().split("T")[0];
  let currentDateTOnly = currentDateT.split("-");

  let currentYear = currentDate.getYear() + 1900;
  let currentMonth = currentDateTOnly[1];
  let currentDayOfMonth = currentDateTOnly[2];
  
  console.log(currentYear);
  console.log(currentMonth);
  console.log(currentDayOfMonth);

  console.log(currentDateT);
  console.log(currentDateTOnly);

  console.log(dateMMDDYYYY);



  console.log(getDayOfWeek(dateArray));



  console.log(weekdaySelector.value);

  while (weekDays.indexOf(getDayOfWeek(dateArray)) != weekdaySelector.value && dateArray[0] <= currentYear) {
    dateArray[0]++;

  }
  for (let i = 0; i < weekdaySelectorT.length; i++) {
    if (resultOutput === "") {
      resultOutput = "Next time your birthday is on a " + weekdaySelectorT[i].label + " is: " + dateArray[0] + "/" + dateArray[1] + "/" + dateArray[2];
    }

  }

  outputBox.textContent = resultOutput;
}
