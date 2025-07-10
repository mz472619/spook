function hello(event) {

    const element = document.getElementById("pupil");

    const x = 3 * event.pageX / window.innerWidth;

    const y = 3 * event.pageY / window.innerHeight;

    element.style["left"] = x + "vmin";
    element.style["top"] = y + "vmin";
}

document.addEventListener('click', hello);