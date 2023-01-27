$(function () {
    // метод cycle
    $('.btn').click(function () {
        let action = $(this).attr('data-action');
        if (action.indexOf('to') >= 0) {
            let action = parseInt(action.substring(3)) - 1;
        }
        $('#carousel').carousel(action);
    });
});


let fio = document.querySelector(".fio");
let phone = document.querySelector(".phone");
let fioSpan = document.querySelector(".order__name-item");
let phoneSpan = document.querySelector(".order__phone-item");
window.addEventListener('DOMContentLoaded', (event) => {
    fio.addEventListener("focus", function (e) {
        fioSpan.classList.toggle("hidden");
    })
    fio.addEventListener("blur", function (e) {
        fioSpan.classList.toggle("hidden");
    })
    phone.addEventListener("focus", function (e) {
        phoneSpan.classList.toggle("hidden");
    })
    phone.addEventListener("blur", function (e) {
        phoneSpan.classList.toggle("hidden");
    })

    const timerShow = document.getElementById("timer"),
        timeEnd = Date.now() + 1e4 * 1800;

    let time = 1800;

    let timer = setInterval(function () {
        let seconds = time % 60;
        let minutes = time / 60 % 60;
        let secondsShow, minutesShow
        if ((timeEnd - Date.now()) <= 0) {
            clearInterval(timer);
            timerShow.innerHTML = `<p>Время закончилось</p>`;
        } else {
            seconds < 10 ? (secondsShow = "0" + seconds) : (secondsShow = seconds)
            minutes < 10 ? (minutesShow = "0" + minutes) : (minutesShow = minutes)

            timerShow.innerHTML = `<p>${Math.trunc(minutesShow)}:${secondsShow}</p>`;
        }
        --time;
    }, 1000)
});