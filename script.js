let leng = document.querySelector(".leng");
let T = document.querySelector("title");
let s5 = document.querySelector(".sp5");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let but = document.querySelector('button');
let lang = localStorage.getItem(key='lang');
//Перевод при загрузки
if(lang=='RU'){
leng.value=1;
}else{
leng.value=2
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
}}
tr()
sessionStorage.setItem('AntiE','error')
console.warn('Made by ZerProg studio in 2023.')