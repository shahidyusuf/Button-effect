const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event)=> {
    // console.log(event.pageY -btnEl.offsetTop);
    // console.log(event.pageX-btnEl.offsetLeft);
    const x = (event.PageX-btnEl.offsetLeft);
    const y = (event.PageY-btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
    })
