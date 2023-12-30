let leng = document.querySelector(".leng");
let T = document.querySelector("title");
let s5 = document.querySelector(".sp5");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let but = document.querySelector('button');
let lang = localStorage.getItem(key='lang');
let UserLang = 0;
let BrL= window.browserLang
let NavL = window.navigator.language
if (lang==null) {
    if (BrL=='ru'||NavL=='ru'||NavL=='ru-RU') {
                leng.value='1'
                UserLang=1}
    if (BrL=='uk'||NavL=='uk'||NavL=='uk-UK') {
                leng.value='3'
                UserLang=1}
    if (BrL=='de'||NavL=='de'||NavL=='de-DE') {
                leng.value='4'
                UserLang=1}
    if(UserLang==0){
               leng.value='2'}
        }
//Перевод при загрузки
if(lang==='RU'){
leng.value=1;
}
if(lang==='UK'){
leng.value=3;
}
if(lang==='EN'){
// leng.value=2
}
if(lang==='DE'){
leng.value=4
}
//Моментальный перевод
leng.onclick=()=>{
tr()
}
function tr() {
if (leng.value=='1') {
T.innerHTML='Тренажёр Royal Seal'
h1.innerHTML=`Добро пожаловать в Royal Seal тренажёр скоропечатания`;
h2.innerHTML='Royal Seal это современный и уникальный тренажёр, тренирующий скорость и точность печати. Уникальность этого тренажёра в том, что буквы и цифры генерируются случайно и постоянно перемещаются по экрану. Это помогает тренировать не только скорость и точность печати, но и скорость реакции. Нажмите далее, чтобы продолжить.'
s5.innerHTML='Язык:';
localStorage.setItem("lang","RU");
but.innerHTML="Далее";
}
if (leng.value=='2') {
T.innerHTML='Training apparatus Royal Seal'
h1.innerHTML=`Welcome to Royal Seal Cursive Writing Simulator`;
h2.innerHTML='Royal Seal is a modern and unique trainer that trains the speed and accuracy of typing. The uniqueness of this trainer is that the letters and numbers are generated randomly and constantly move across the screen. This helps to train not only the speed and accuracy of typing, but also the speed of reaction. Click next to continue'
s5.innerHTML='Language:';
localStorage.setItem("lang","EN");
but.innerHTML="Begin";
}
if (leng.value=='3') {
T.innerHTML='Тренажёр Royal Seal'
h1.innerHTML=`Ласкаво просимо до Royal Seal тренажер швидко друкування`;
h2.innerHTML='Royal Seal це сучасний та унікальний тренажер, що тренує швидкість та точність друку. Унікальність цього тренажера в тому, що літери та цифри генеруються випадково та постійно переміщаються по екрану. Це допомагає тренувати як швидкість і точність друку, а й швидкість реакції. Натисніть далі, щоб продовжити.'
s5.innerHTML='Мова:';
localStorage.setItem("lang","UK");
but.innerHTML="Далі";
}
if (leng.value=='4') {
T.innerHTML='Royal Seal-Trainer'
h1.innerHTML=`Willkommen beim Royal Seal-Schreibtrainer`;
h2.innerHTML='Royal Seal ist ein moderner und einzigartiger Simulator, der Schreibgeschwindigkeit und -genauigkeit trainiert. Die Einzigartigkeit dieses Simulators besteht darin, dass Buchstaben und Zahlen zufällig generiert werden und sich ständig über den Bildschirm bewegen. Dadurch werden nicht nur die Schreibgeschwindigkeit und -genauigkeit, sondern auch die Reaktionsgeschwindigkeit trainiert. Klicke weiter um fortzufahren.'
s5.innerHTML='Sprache:';
localStorage.setItem("lang","DE");
but.innerHTML="Weiter";
}}
tr()
sessionStorage.setItem('AntiE','error')
console.warn('Made by ZerProg studio in 2023.')
let error1 = document.querySelector('.error1')
error1.remove()