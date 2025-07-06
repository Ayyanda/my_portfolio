const typewriterText = "Hey There, I'm Ayanda.";
const typewriterSpeed = 120;
let i = 0;

const toggleButton = document.getElementById('theme-toggle');
const lastSavedTheme = localStorage.getItem('theme');

function typeWriter() {
    if (i < typewriterText.length){
        document.getElementById("typewriter"). textContent += typewriterText.charAt(i) 
        i++;
        setTimeout(typeWriter, typewriterSpeed);
    }
}

if(lastSavedTheme == 'light'){
    document.body.classList.add('light-mode');
    toggleButton.textContent = '🌞';
}

toggleButton.addEventListener('click', ()=>{
    document.body.classList.toggle('light-mode');

    if(document.body.classList.contains('light-mode')){
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = '🌞';
    } else {
        localStorage.setItem('theme','dark');
        toggleButton.textContent = '🌙'
    }
});

typeWriter();

//document.addEventListener("DOMContentLoaded", typeWriter);