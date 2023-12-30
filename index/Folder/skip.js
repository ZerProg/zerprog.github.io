//Скип буквы
 let s30 = setInterval(()=>{
    let s40 = document.querySelector('.s40')
    if(otv>0&otv<40){
        otv+=1
    }
    if (otv==40) {
        if (lang=='EN') {
            s40.innerHTML='To skip a letter press Ctrl or F2'}
        if (lang=='RU'){
            s40.innerHTML='Чтобы пропустить букву нажмите Ctrl или F2'}
        if (lang=='UK'){
            s40.innerHTML='Щоб пропустити літеру, натисніть Ctrl або F2'}
        if (lang=='DE'){
            s40.innerHTML='Um einen Buchstaben zu überspringen, drücken Sie Strg oder F2'}
    }
    if(otv<39){
        s40.innerHTML=' '
    }
    },1000)