let but = document.querySelector('button');
let d1 = document.querySelector('.d01');
let d2 = document.querySelector('.d02');
let i1 = document.querySelector('.inp1');
let i2 = document.querySelector('.inp2');
let h2 = document.querySelector('h2');
let sel1 = document.querySelector('.sel1');
let sel2 = document.querySelector('.sel2');
let T = document.querySelector('title');
//АнтиError
let errer = sessionStorage.getItem(key='AntiE')
if(errer=='error'){
  sessionStorage.setItem('AntiE','');
  location.reload();
}
//Выбор input'а
d1.onclick=()=>{
i2.removeAttribute('checked');
i1.setAttribute('checked','');
dis()
}
d2.onclick=()=>{
i1.removeAttribute('checked');
i2.setAttribute('checked','');
dis()
}
//Кнопка перехода
but.onclick=()=>{
    sessionStorage.setItem('RESH','2')
if (i1.checked) {
    let sel1v = sel1.value
    if (sel1v==1) {
    sessionStorage.setItem("rask","en");
    }
    if (sel1v==2) {
    sessionStorage.setItem("rask","ru");
    }
    if (sel1v==3) {
    sessionStorage.setItem("rask","ru123");
    }
    if (sel1v==4) {
    sessionStorage.setItem("rask","en123");
    }
    location.href='Folder/index1.html';
}
if (i2.checked) {
    sessionStorage.setItem('RESH','2')
    let sel2v = sel2.value;
    if (sel2v==1) {
    sessionStorage.setItem("rask","en");
    }
    if (sel2v==2) {
    sessionStorage.setItem("rask","ru");
    }
    if (sel2v==3) {
    sessionStorage.setItem("rask","ru123");
    }
    if (sel2v==4) {
    sessionStorage.setItem("rask","en123");
        }
        location.href='Folder/index2.html';
}
}
//Перевод
let s1 = document.querySelector(".sp1");
let s2 = document.querySelector(".sp2");
let lang = localStorage.getItem(key='lang');
function Tr() {
    function tran(En,Ru,Nu,Tr,Pi) {
        let Opt='<option value="'
        let opT='</option>'
        s1.innerHTML=`${Tr}
        <select class="sel1">
            ${Opt}1">${En}${opT}
            ${Opt}2">${Ru}${opT}
            ${Opt}3">${Ru}+${Nu}${opT}
            ${Opt}4">${En}+${Nu}${opT}
        </select>`;
      s2.innerHTML=`${Pi}
      <select class="sel2">
          ${Opt}1">${En}${opT}
          ${Opt}2">${Ru}${opT}
          ${Opt}3">${Ru}+${Nu}${opT}
          ${Opt}4">${En}+${Nu}${opT}
      </select>`;
    }
    if (lang=='RU') {
        T.innerHTML='Выбор режима и раскладки'
      h2.innerHTML='Чтобы начать заниматся выбирете режим';
      tran('Английская', 'Русская', 'цифры','Три минуты&#160;&#160;раскладка:','250 Символов&#160;&#160;&#160;раскладка:')
      but.innerHTML="Далее";
    }
    if (lang=='EN') {
        T.innerHTML='Selecting a mode and layout'
        h2.innerHTML='To start studying, select a language';
      tran('English', 'Russian', 'numbers','Three minutes&#160;&#160;layout:','250 Characters&#160;&#160;&#160;layout')
      but.innerHTML="Further";
    }
    dis()
}
Tr()
//Откл select
function Dis(sel, sel1) {
    sel.style.background='#310071'
    sel1.style.background='blue'}
function dis(){
    sel1 = document.querySelector('.sel1');
    sel2 = document.querySelector('.sel2');
    let DiS = 'disabled';
        if (i1.checked) {
            sel2.setAttribute(DiS,'')
            Dis(sel2,sel1)
            sel1.removeAttribute(DiS)
        }
        if (i2.checked) {
            sel1.setAttribute(DiS,'')
            Dis(sel1,sel2)
            sel2.removeAttribute(DiS,'')
        }
    }
dis()
let nast = document.querySelector('.nast');
let sound = localStorage.getItem('sound')
let On = 0;
let OfF=`<svg viewBox="0 0 964 880" fill="none">
<path d="M643 223C831.354 351 721.481 532.333 643 607" stroke="#5A5A5A" stroke-width="50"/>
<path d="M719 66C1117.44 328.4 885.017 639.333 719 762" stroke="#5A5A5A" stroke-width="50"/>
<path d="M213.987 259.601L425.488 18.927C431.577 11.999 443 16.3051 443 25.5282V812.169C443 821.429 431.5 825.716 425.439 818.714L213.991 574.455C212.091 572.261 209.332 571 206.43 571H25C19.4772 571 15 566.523 15 561V273C15 267.477 19.4771 263 25 263H206.475C209.351 263 212.088 261.762 213.987 259.601Z" fill="#5A5A5A" stroke="#5A5A5A" stroke-width="30"/>
<path d="M43 31L883 851" stroke="#FF0000" stroke-width="80"/>
</svg>`
let oN = `<svg viewBox="0 0 964 838" fill="none">
<path d="M643 223C831.354 351 721.481 532.333 643 607" stroke="#5A5A5A" stroke-width="50"/>
<path d="M719 66C1117.44 328.4 885.017 639.333 719 762" stroke="#5A5A5A" stroke-width="50"/>
<path d="M213.987 259.601L425.488 18.927C431.577 11.999 443 16.3051 443 25.5282V812.169C443 821.429 431.5 825.716 425.439 818.714L213.991 574.455C212.091 572.261 209.332 571 206.43 571H25C19.4772 571 15 566.523 15 561V273C15 267.477 19.4771 263 25 263H206.475C209.351 263 212.088 261.762 213.987 259.601Z" fill="#5A5A5A" stroke="#5A5A5A" stroke-width="30"/>
</svg>`
//ВКЛ ВЫКЛ МУЗ
nast.innerHTML=oN
nast.onclick=soun
function soun(){
    if (On==0) {
        nast.innerHTML=OfF
        On=1
    localStorage.setItem('sound','off')
    return
    }
   else{
        nast.innerHTML=oN
    On=0
    localStorage.setItem('sound','on')
    }
}
if (sound=='off') {
    nast.innerHTML=OfF
    On=1
}
//Сделано
console.error('Made by ZerProg studio in 2023.')