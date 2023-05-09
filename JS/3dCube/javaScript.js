let cube = document.querySelector(".imageCube");
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let pos = 0;
btnNext.addEventListener("click", () => {
    console.log("funciona")
    pos -= 90;
    cube.style.transform = `rotateY(${pos}deg)`;
});
btnPrev.addEventListener("click", () => {
    pos += 90;
    cube.style.transform = `rotateY(${pos}deg)`;
});