// Определяем элементы страницы
const year = document.getElementById('year')
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const countdown = document.getElementById('countdown')
const preloader = document.getElementById('preloader')

// делаем расчёты
const currentYear = new Date().getFullYear();
// const nextYear = new Date(`Junuary 01 ${currentYear + 1} 00:00:00`);
const nextYear = new Date(`${currentYear + 1}`);


year.innerText = currentYear + 1; // устанавлмваем новый год на страницу

function updateTimer() {

    const currentTime = new Date();
    const diffTime = nextYear - currentTime; // time in mc

    const daysLeft = Math.round(diffTime / 1000 / 60 / 60 / 24); //  находим оставшееся время в днях и округляем до целого значения (можно и через Math.floor())

    const hoursLeft = Math.floor(diffTime / 1000 / 60 / 60) % 24; // оставшееся время в часах

    const minutesLeft = Math.floor(diffTime / 1000 / 60) % 60; // оставшиеся минуты

    const secondsLeft = Math.floor(diffTime / 1000) % 60; // и оставшиеся секунда

    days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

setInterval(updateTimer, 1000);

setTimeout(function() {
    preloader.remove();
    countdown.style.display = 'flex';
}, 1000);