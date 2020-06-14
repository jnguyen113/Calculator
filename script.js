const screen = document.getElementById('screen');
const back = document.querySelector('.back');

back.addEventListener('click', function(){
    screen.innerHTML = screen.innerHTML.substring(0,screen.innerHTML.length-1);
});

function pushBtn(obj){
    //assigning pushed values to the screen, this doesn't print it on the screen yet
    var pushed = obj.innerHTML;
    if(pushed === '='){
        screen.innerHTML = eval(screen.innerHTML);
    }else if(pushed === 'A/C'){
        screen.innerHTML = '0';
    }else{
        if(screen.innerHTML === '0'){
            //replace 0 with the value being pushed
            screen.innerHTML = pushed;
        }else{
            //adds on elements to the screen whenever pushed
            screen.innerHTML += pushed;
        }
    }
}




