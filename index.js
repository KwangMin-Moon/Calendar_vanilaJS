const $dayOfToday = document.querySelector('.day_of_today');
const $dateOfToday = document.querySelector('.date_of_today');
const $calenderTitle = document.querySelector('#calender_title');
const $td = document.querySelectorAll('td');
const $rightBtn = document.querySelector('#right_btn');
const $leftBtn = document.querySelector('#left_btn');
const $table = document.querySelector('table');

const days = ['SUN', 'MON', 'THE', 'WED', 'THU', 'FRI', 'SAT'];
const months = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

const now = new Date();
const day = now.getDay();
const date = now.getDate();
let year = now.getFullYear();
let month = now.getMonth();
let startOfMonth = new Date(year, month, 1);
let lastOfMonth = new Date(year, month + 1, 0);
let startDay = startOfMonth.getDay();
let lastDate = lastOfMonth.getDate();

let todayOfMonth = month;

$dayOfToday.textContent = days[day];
$dateOfToday.textContent = date;
$calenderTitle.textContent = `${months[month]} ${year}`;

function makeCalendar(startDay, lastDate) {
  for (let i = 0; i < $td.length; i++) {
    $td[i].textContent = '';
  }
  for (let i = 1; i < lastDate + 1; i++) {
    $td[startDay + i - 1].textContent = i;
  }
  $td[date].style.color = 'red';
}

function changeCalendar() {
  startOfMonth = new Date(year, month, 1);
  lastOfMonth = new Date(year, month + 1, 0);
  startDay = startOfMonth.getDay();
  lastDate = lastOfMonth.getDate();
  $dayOfToday.textContent = days[startDay];
  $dateOfToday.textContent = 1;
  makeCalendar(startDay, lastDate);
  $td[date].style.color = 'black';
  $calenderTitle.textContent = `${months[month]} ${year}`;
  if (month === todayOfMonth) {
    $td[date].style.color = 'red';
    $dayOfToday.textContent = days[day];
    $dateOfToday.textContent = date;
    $calenderTitle.textContent = `${months[month]} ${year}`;
  }
}

makeCalendar(startDay, lastDate);

$rightBtn.addEventListener('click', () => {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  changeCalendar();
});

$leftBtn.addEventListener('click', () => {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  changeCalendar();
});

$table.addEventListener('click', (e) => {
  $dateOfToday.textContent = e.target.textContent;
  let newDate = new Date(year, month, $dateOfToday.textContent);
  let newDay = newDate.getDay();
  $dayOfToday.textContent = days[newDay];
});
