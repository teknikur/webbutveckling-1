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
  const dateMMDDYYYY = document.getElementById("dateMMDDYYYY").value;
  let dateArray = dateMMDDYYYY.split("-");
  console.log(dateMMDDYYYY);
  
  var resultOutput = document.getElementById("resultOutput");

  console.log(getDayOfWeek(dateArray));

  const weekdaySelector = document.getElementById("weekdaySelector");
  console.log(weekdaySelector.value);
 

  while (weekDays.indexOf(getDayOfWeek(dateArray)) != weekdaySelector.value&&dateArray[0]>=new Date().getFullYear) {
    dateArray[0]++;
    
  }
  resultOutput.innerHTML = "Next time your birthday is on #"+ (weekdaySelector.value)+" of the week: "+dateArray[0]+"/"+dateArray[1]+"/"+dateArray[2];
}
