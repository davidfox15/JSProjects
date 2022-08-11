update_time();

window.setInterval(update_time, 200);

function update_time () {
    let now = new Date();
    document.querySelector("#time").innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}