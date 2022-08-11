let index = 1;

show_image(1);

function show_image(i) {
    index += i
    let chosen = document.querySelectorAll(".slider-img-container");

    if (index < 0)
        index = chosen.length;
    if (index > chosen.length-1)
        index = 1;

    for (let y = 0; y < chosen.length; y++) {
        chosen[y].style.display = "none";
    }

    chosen[index].style.display = "block";
}