const pre = document.querySelector("pre");

document.addEventListener("mousemove", (e) => {
    rotateElement(e, pre);
});

function rotateElement(event, element) {
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;
    console.log(x, y);
}