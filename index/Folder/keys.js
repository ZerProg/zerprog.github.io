//Отслеживание клавиш
let RoR = 0;
function KEY(KEY) {
    if (KEY.keyCode==65&&f=='A'||KEY.keyCode==65&&f=='Ф') {KeY()}
    if (KEY.keyCode==66&&f=='B'||KEY.keyCode==66&&f=='И') {KeY()}
    if (KEY.keyCode==67&&f=='C'||KEY.keyCode==67&&f=='С') {KeY()}
    if (KEY.keyCode==68&&f=='D'||KEY.keyCode==68&&f=='В') {KeY()}
    if (KEY.keyCode==69&&f=='E'||KEY.keyCode==69&&f=='У') {KeY()}
    if (KEY.keyCode==70&&f=='F'||KEY.keyCode==70&&f=='А') {KeY()}
    if (KEY.keyCode==71&&f=='G'||KEY.keyCode==71&&f=='П') {KeY()}
    if (KEY.keyCode==72&&f=='H'||KEY.keyCode==72&&f=='Р') {KeY()}
    if (KEY.keyCode==73&&f=='I'||KEY.keyCode==73&&f=='Ш') {KeY()}
    if (KEY.keyCode==74&&f=='J'||KEY.keyCode==74&&f=='О') {KeY()}
    if (KEY.keyCode==75&&f=='K'||KEY.keyCode==75&&f=='Л') {KeY()}
    if (KEY.keyCode==76&&f=='L'||KEY.keyCode==76&&f=='Д') {KeY()}
    if (KEY.keyCode==77&&f=='M'||KEY.keyCode==77&&f=='Ь') {KeY()}
    if (KEY.keyCode==78&&f=='N'||KEY.keyCode==78&&f=='Т') {KeY()}
    if (KEY.keyCode==79&&f=='O'||KEY.keyCode==79&&f=='Щ') {KeY()}
    if (KEY.keyCode==80&&f=='P'||KEY.keyCode==80&&f=='З') {KeY()}
    if (KEY.keyCode==81&&f=='Q'||KEY.keyCode==81&&f=='Й') {KeY()}
    if (KEY.keyCode==82&&f=='R'||KEY.keyCode==82&&f=='К') {KeY()}
    if (KEY.keyCode==83&&f=='S'||KEY.keyCode==83&&f=='Ы') {KeY()}
    if (KEY.keyCode==84&&f=='T'||KEY.keyCode==84&&f=='Е') {KeY()}
    if (KEY.keyCode==85&&f=='U'||KEY.keyCode==85&&f=='Г') {KeY()}
    if (KEY.keyCode==86&&f=='V'||KEY.keyCode==86&&f=='М') {KeY()}
    if (KEY.keyCode==87&&f=='W'||KEY.keyCode==87&&f=='Ц') {KeY()}
    if (KEY.keyCode==88&&f=='X'||KEY.keyCode==88&&f=='Ч') {KeY()}
    if (KEY.keyCode==89&&f=='Y'||KEY.keyCode==89&&f=='Н') {KeY()}
    if (KEY.keyCode==90&&f=='Z'||KEY.keyCode==90&&f=='Я') {KeY()}
    if (KEY.keyCode==186&&f=='Ж') {KeY()}
    if (KEY.keyCode==188&&f=='Б') {KeY()}
    if (KEY.keyCode==190&&f=='Ю') {KeY()}
    if (KEY.keyCode==192&&f=='Ё') {KeY()}
    if (KEY.keyCode==219&&f=='Х') {KeY()}
    if (KEY.keyCode==221&&f=='Ъ') {KeY()}
    if (KEY.keyCode==222&&f=='Э') {KeY()}
    if (KEY.keyCode==48&&f=='0'||KEY.keyCode==96&&f=='0') {KeY()}
    if (KEY.keyCode==49&&f=='1'||KEY.keyCode==97&&f=='1') {KeY()}
    if (KEY.keyCode==50&&f=='2'||KEY.keyCode==98&&f=='2') {KeY()}
    if (KEY.keyCode==51&&f=='3'||KEY.keyCode==99&&f=='3') {KeY()}
    if (KEY.keyCode==52&&f=='4'||KEY.keyCode==100&&f=='4') {KeY()}
    if (KEY.keyCode==53&&f=='5'||KEY.keyCode==101&&f=='5') {KeY()}
    if (KEY.keyCode==54&&f=='6'||KEY.keyCode==102&&f=='6') {KeY()}
    if (KEY.keyCode==55&&f=='7'||KEY.keyCode==103&&f=='7') {KeY()}
    if (KEY.keyCode==56&&f=='8'||KEY.keyCode==104&&f=='8') {KeY()}
    if (KEY.keyCode==57&&f=='9'||KEY.keyCode==105&&f=='9') {KeY()}
    if (KEY.keyCode==17||KEY.keyCode=='113') {otv=0;if(RoR==1){life.innerHTML-=-0.5}}
    else{error+=1;}
    }
//function для клавиш
    function KeY() {
        click+=1
        otv=0
        life.innerHTML-=-1
        error-=1
}
//Клавиши
document.addEventListener('keydown',KEY)
//
sessionStorage.setItem('AntiE','error')