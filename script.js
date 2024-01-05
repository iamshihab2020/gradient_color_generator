const colorInputs = document.querySelectorAll('.colors input');
const gradientBox = document.querySelector(".gradient-box");
const wholeBody = document.querySelector('body');
const textarea = document.querySelector('textarea');
const selectBox = document.querySelector(".select-box select");
const buttonCopy = document.querySelector('.copy')



const generateGradient = () => {
    const gradient = `linear-gradient(${selectBox.value}, ${colorInputs[0].value}, ${colorInputs[1].value} )`;
    gradientBox.style.background = gradient;
    wholeBody.style.background = gradient;
    textarea.textContent = `background-image: ${gradient} ;`;
};

colorInputs.forEach(input => {
    input.addEventListener("input", generateGradient);
});


function copyText() {
    var textarea = document.querySelector("textarea");
    textarea.removeAttribute("disabled");
    textarea.select();

    try {
        document.execCommand("copy");
        alert("Text has been copied to the clipboard!");
    } catch (err) {
        console.error("Unable to copy to clipboard", err);
    } finally {
        textarea.setAttribute("disabled", "true");
    }
};


function refreshText() { 
    location.reload();
};