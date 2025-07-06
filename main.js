const typewriterText = "Hey There, I'm Ayanda.";
const typewriterSpeed = 120;
let i = 0;

function typeWriter() {
    if (i < typewriterText.length){
        document.getElementById("typewriter"). textContent += typewriterText.charAt(i) 
        i++;
        setTimeout(typeWriter, typewriterSpeed);
    }
}

document.addEventListener("DOMContentLoaded", typeWriter);