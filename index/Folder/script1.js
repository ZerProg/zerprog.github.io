let otv=0;
let life = document.querySelector('.life');
let time = document.querySelector('.time');
let f ='';
let error = 0;
let click = 0;
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
//кнопка старт
start.onclick=()=>{
    RoR=1;
    document.querySelector('.d0').remove('div')
    let sound =localStorage.getItem(key='sound');
        let aud = new Audio();
        aud.src='audio/aud1.mp3'
        if (sound=='on') {
        aud.play()
        aud.volume=0.1
        }
//Выбор символа
        setInterval(()=>{if (otv==0) {
            if (ErroR=='NO') {
    otv=1
    f= ron[Math.floor(Math.random() * ron.length)];
            }
}},0)
//Скип буквы
let s30 = setInterval(()=>{
let s40 = document.querySelector('.s40')
if(otv>0&otv<40){
    otv+=1
}
if (otv==40) {
    if (lang=='EN') {
        s40.innerHTML='To skip a letter press Ctrl or F2'
    }else{
        s40.innerHTML='Чтобы пропустить букву нажмите Ctrl или F2'}
}
if(otv<39){
    s40.innerHTML=' '
}
},1000)
//Game over+отнятие времени и жизни
let kill = setInterval(()=>{
life.innerHTML-=1
time.innerHTML-=1
let TL = time.innerHTML
//Кнопка занаво
let BuT = `<button class="zan" onclick="location.reload()">`
let ZanE = `${BuT}Anew</button>`
let ZanR=`${BuT}Занаво</button>`
//Символы в минуту
if (TL>120) {
    sred=click}
if (TL>60&TL<121) {
    sred=click/2}
if (TL<61) {
    sred=click/3}
//Статистика
    let StR = `Ошибок: ${error}
Нажата кнопок: ${click}
Символов в минуту: ${Math.round(sred)}`
let StE = `Error: ${error}
Buttons pressed: ${click}
Characters per minute: ${Math.round(sred)}`
//Проигрыш
if (life.innerHTML<0||click>222) {
life.innerHTML=0
clearInterval(kill)
clearInterval(s30)
clearInterval(tyda)
if (lang=='EN') {
    alert(`You didn't have time :(
${StE}`)
        d2.innerHTML=ZanE
}else{
    alert(`Вы не успели :(
${StR}`);
    d2.innerHTML=ZanR
}
}
//Победа
if(life.innerHTML>0&&time.innerHTML==0){
    clearInterval(kill,l)
    clearInterval(s30)
    clearInterval(tyda)
    if (lang=='EN') {
        alert(`You completed the level
${StE}`)
            d2.innerHTML=ZanE
    }else{
        alert(`Вы прошли уровень
${StR}`);
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
lett.innerHTML=f })
}
console.warn('Made by ZerProg studio in 2023.')