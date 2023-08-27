let textarea = document.querySelector('.textarea');
let p = document.querySelector('.p');
let btn = document.querySelector('.btn');
let btn2 = document.querySelector('.btn2');
let speech = new SpeechSynthesisUtterance();

btn.addEventListener('click', (e)=>{
    

    speech.text = textarea.value;
    speech.pitch = 0.9; 
    speech.volume = 2;
    speech.lang = "es-ES";
    speech.rate = 0.8;
    speechSynthesis.speak(speech);
    
    e.preventDefault();

});

btn2.addEventListener('click', ()=>{
   textarea.value = '-ingresar el texto aqui-';
})
