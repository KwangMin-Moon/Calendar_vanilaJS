const $dayOfToday = document.querySelector('.day_of_today');
const $dateOfToday = document.querySelector('.date_of_today');
const $calenderTitle = document.querySelector('#calender_title');
const days = ['SUN', 'MON', 'THE', 'WED', 'THU', 'FRI', '토'];
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
const year = now.getFullYear();
const month = now.getMonth();

$dayOfToday.textContent = days[day];
$dateOfToday.textContent = date;
$calenderTitle.textContent = `${months[month]} ${year}`;
