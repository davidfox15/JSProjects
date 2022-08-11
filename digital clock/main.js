// window.setInterval(update_time, 200);
window.addEventListener("load",update_time)

function update_time () {
    let now = new Date();
    document.querySelector("#time").innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    setTimeout(update_time,1000);
}