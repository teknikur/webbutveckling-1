const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

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
  while (dateArray[0] < currentYear) {
    dateArray[0]++;
    if (dateArray[0] === currentYear) {
      if (dateArray[1] > currentMonth) {
      } else if (dateArray[1] === currentMonth) {
        if (dateArray[2] <= currentDayOfMonth) {
          dateArray[0]++;
        }
      } else {
        dateArray[0]++;
      }
    }
  }
  while (weekDays.indexOf(getDayOfWeek(dateArray)) != weekdaySelector.value) {
    dateArray[0]++;
  }
  for (let i = 0; i < weekdaySelectorT.length; i++) {
    if (resultOutput === "") {
      resultOutput =
        "Next time your birthday is on a " +
        weekdaySelectorT[i].label +
        " is: " +
        dateArray[0] +
        "/" +
        dateArray[1] +
        "/" +
        dateArray[2];
    }
  }

  outputBox.textContent = resultOutput;
}


const carouselText = [
  {text: "Monday?", color: "red"},
  {text: "Tuesday?", color: "orange"},
  {text: "Wednesday?", color: "yellow"},
  {text: "Thursday?", color: "lightgreen"},
  {text: "Friday?", color: "green"},
  {text: "Saturday?", color: "blue"},
  {text: "Sunday?", color: "purple"}
]

async function typeSentence(sentence, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    document.getElementById("feature-text").innerHTML += letters[i];
    i++
  }
  return;
}

async function deleteSentence() {
  const sentence = document.getElementById("feature-text").innerHTML;
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    document.getElementById("feature-text").innerHTML = letters.join("");
  }
}

async function carousel(carouselList) {
    var i = 0;
    while(true) {
      updateFontColor(carouselList[i].color)
      await typeSentence(carouselList[i].text);
      await waitForMs(1500);
      await deleteSentence();
      await waitForMs(500);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}

function updateFontColor(color) {
  document.getElementById("feature-text").style.color = color;
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

carousel(carouselText)