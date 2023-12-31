let otv=0;
let times= document.querySelector('.times');
let timem= document.querySelector('.timem');
let life= document.querySelector('.life');
let f ='';
let error = 0;
let click = 0;
let time=0;
let sred='';
//Буквы руссие
if (rask=='ru'&&lang=='RU') {
    b.innerHTML='руссские буквы '
}if (rask=='en123'&&lang=='RU') {
    b.innerHTML='английские буквы и цифры '
}if (rask=='ru123'&&lang=='RU') {
    b.innerHTML='русские буквы и цифры '}
//Буквы англ
if (rask=='ru'&&lang=='EN') {
    b.innerHTML='russians letters'
}if (rask=='ru123'&&lang=='EN') {
    b.innerHTML='russians letters and numbers'

}if (rask=='en123'&&lang=='EN') {
    b.innerHTML='english letters and numbers'
}
//Буквы укра
if (rask=='ru'&&lang=='UK') {
    b.innerHTML='російські літери'
}if (rask=='ru123'&&lang=='UK') {
    b.innerHTML='російські літери та цифри'

}if (rask=='en123'&&lang=='UK') {
    b.innerHTML='англійські літери та цифри'
}
//кнопка старт
start.onclick=()=>{
    document.querySelector('.d0').remove('div')
        let sound =localStorage.getItem(key='sound');
            let aud = new Audio();
            aud.src='audio/aud1.mp3'
            if (sound=='on') {
            aud.play()
            aud.volume=0.1
        aud.setAttribute('loop','')
            }
//Выбор символа
        setInterval(()=>{if (otv==0) {
            if (ErroR=='NO') {
    otv=1
    f= ron[Math.floor(Math.random() * ron.length)];
            }
}},0)
//Game over+отнятие времени и жизни
let kill = setInterval(()=>{
life.innerHTML=click
times.innerHTML-=-1
if (times.innerHTML>59) {
times.innerHTML=0
timem.innerHTML-=-1
}
time=`${timem.innerHTML}:${times.innerHTML}`
//Кнопка Занаво
let BuT = `<button class="zan" onclick="location.reload()">`
let ZanE = `${BuT}Anew</button>`
let ZanR=`${BuT}Заново</button>`
//Символы в минуту
    sred=click/timem.innerHTML
if(click>270){
    clearInterval(kill,l)
    clearInterval(tyda)
alert('Error')
return
}
//Победа
if(click>249){
    clearInterval(kill,l)
    clearInterval(tyda)
    if (lang=='EN') {
        alert(`Completed in ${time} minutes
Error: ${error}
Buttons pressed: ${click+error}
Characters per minute: ${Math.round(sred+0.1)}`)
        d2.innerHTML=ZanE
    }
    if (lang=='RU'){
        alert(`Вы прошли за ${time} минут
Ошибок: ${error}
Нажата кнопок: ${click+error}
Символов в минуту: ${Math.round(sred+0.1)}`);
        d2.innerHTML=ZanR
    }
    if (lang=='UK'){
        alert(`Ви пройшли за ${time} хвилин
Помилок: ${error}
Натиснуто кнопки: ${click+error}
Символів за хвилину: ${Math.round(sred+0.1)}`);
        d2.innerHTML=ZanR
    }
}
},1000)
//Буква
let lett = document.querySelector('.letter');
let tyda = setInterval(()=>{
let a = Math.random()*(90+1)
let b = Math.random()*(95+1)
if (ErroR=='NO') {
    lett.style=`top:${a}vh;left:${b}%;`
}
},1500)
let l = setInterval(()=>{
lett.innerHTML=f})
}
console.warn('Made by ZerProg studio in 2023.')
