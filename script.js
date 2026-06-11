const text =
"AI • Machine Learning • Computer Vision";

let i = 0;

function typeWriter() {

    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

window.onload = typeWriter;