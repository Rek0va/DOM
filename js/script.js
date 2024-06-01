const sec = document.querySelector('.s'),
    min = document.querySelector  ('.m'),
    hour = document.querySelector ('.h'),
    hourN = document.querySelector('.hours'),
    minN = document.querySelector ('.minutes')

function clock() {
    let date = new Date()
    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    let hours = date.getHours()

    sec.style.transform = `rotate(${seconds * 6}deg)`
    min.style.transform = `rotate(${minutes * 6}deg)`
    hour.style.transform = `rotate(${hours * 30}deg)`
    
    hourN.innerHTML = hours  < 10 ? '0' + hours   : hours
    minN.innerHTML = minutes < 10 ? '0' + minutes : minutes
    
    setTimeout(() => clock(), 1000  );
}
clock()

const links = document.querySelectorAll('.tabsItem');
const tabs = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e) => {
       e.preventDefault();  
       for (let x = 0; x < links.length; x++) {
        links[x].classList.remove('active')
        tabs[x].classList.remove('active')
       }
       changeTab(links[i], tabs[i])
    })
}
function changeTab(link,tab) {
    link.classList.add('active')
    tab.classList.add('active')
}

const watchBtn = document.querySelector('.stopwatch__btn'),
     watchSec  = document.querySelector('.stopwatch__seconds'),
     watchMin  = document.querySelector('.stopwatch__minutes'),
     watchHour = document.querySelector('.stopwatch__hours'),
    secInfo    = document.querySelector('.tabsLink__span')
    
watchBtn.addEventListener('click', function() {
    if(this.innerHTML === 'start'){
        this.innerHTML = 'stop'
        secInfo.classList.add('active')
        let sec = 0
        setTimeout(() => stopwatch(this, sec), 1000);
    }else if(this.innerHTML === 'stop'){
        this.innerHTML = 'clear'
        secInfo.classList.remove('active')
        secInfo.classList.add('active_clear')
    }else{
        this.innerHTML = 'start'            
        secInfo.classList.remove('active_clear')
        watchSec.innerHTML = watchMin.innerHTML = watchHour.innerHTML = 0
    }
})
function stopwatch(btn, sec) {
    if (btn.innerHTML === 'stop') {
        if (sec == 60) {
            sec = 0
            watchSec.innerHTML = 0
            if (watchMin.innerHTML == 59) {
                watchMin.innerHTML = 0
                watchHour.innerHTML++
            } else {
                watchMin.innerHTML++
            }
        } else {
            sec++
            watchSec.innerHTML = sec
        }
        setTimeout(() => stopwatch(btn, sec), 1000);
    }
}