// -=-=-=-=-=-=-=- Events -=-=-=-=-=-=-=-

// ---------- set event handler
// 2 - using addEventListener()
btn2.addEventListener("click", () => {
    console.log("Button 2 Clicked!");
});

// 3 - using on{event_name} property
const btn3 = document.getElementById('btn3');

btn3.onmousedown = () => console.log("Mouse Down");
btn3.onmouseup = () => console.log("Mouse Up");
btn3.onmouseenter = () => console.log("Mouse Enter");
btn3.onmouseleave = () => console.log("Mouse Leave");

//window.onresize = () => document.body.innerHTML += "*";

// ----- event parameter contains event information
btn3.onclick = (event) => {
    console.log(event);
    console.log("Button 3 clicked!");
};

const coordsText = document.querySelector('#coords-text');

window.onmousemove = (event) => {
    // console.log(event);
    coordsText.textContent = `${event.x}:${event.y}`;
}
