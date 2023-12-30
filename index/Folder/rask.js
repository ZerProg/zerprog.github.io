let lang = localStorage.getItem(key='lang')
//Раскладка
let rask = sessionStorage.getItem(key='rask');
let ron = '';
let ErroR='';
function RasK() {
    let Ru = "АБВГДЕЁЖЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
    let En = "ABCDEFGHJKLMNOPQRSTUVWXYZ"
    let Num = "1234567890"
    if (rask=='ru') {
    ron = Ru;
    ErroR='NO'
}
if (rask=='en') {
    ron = En;
    ErroR='NO'
    }
if (rask=='ru123') {
    ron = Ru+Num;
        ErroR='NO'
    }
if (rask=='en123') {
ron = En+Num;
            ErroR='NO'
        }else{
        if (lang=='EN') {
            f='Select your keyboard language'
        }else{
            f='Выберите язык клавиатуры'
        }
    }
}
RasK()