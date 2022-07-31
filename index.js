console.log('hello, vanilla.');

const $dayOfToday = document.querySelector('.day_of_today');
const $dateOfToday = document.querySelector('.date_of_today');
const days = ['SUN', 'MON', 'THE', 'WED', 'THU', 'FRI', '토'];
const now = new Date();
const day = now.getDay();
const date = now.getDate();

weekOfToday.textContent = days[day];
dayOfToday.textContent = date;
