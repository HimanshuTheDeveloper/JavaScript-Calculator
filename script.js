let screen = document.getElementById('screen');
let keys = document.querySelectorAll('button');

let screenValue = '';
for(item of keys){
  item.addEventListener('click', (e) =>{

    buttonText = e.target.innerText;
    console.log('Button iS ', buttonText)
    if(buttonText=='X')
    {
        buttonText = '*';
        screenValue += buttonText;
        screen.value = screenValue;
    }
    else if(buttonText=='Clear')
    {
        screenValue = '';
        screen.value = screenValue;
    }
    else if(buttonText=='=')
    {
        screen.value = eval(screenValue); 
    }
    else
    {
        screenValue += buttonText;
        screen.value = screenValue;
    }

  })
}

