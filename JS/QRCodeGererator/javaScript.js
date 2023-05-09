const wrapper = document.querySelector(".wrapper"),
generationButton = wrapper.querySelector(".form button"),
qrInput = wrapper.querySelector(".form input"),
qrImag = wrapper.querySelector(".qrCode img");

generationButton.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generationButton.innerText = "Generating QR Code...";
    qrImag.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example`
    qrImag.addEventListener("load", () => {
        wrapper.classList.add("active");
        generationButton.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})