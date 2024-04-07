let clock = document.getElementById('clock')

function updateclock() {
    const now = new Date()
    let hours = now.getHours();
    const meridan = hours >= 12 ? "Pm" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const second = now.getSeconds().toString().padStart(2,0);
    const timestring = `${hours}:${minutes}:${second} ${ meridan}`
     clock.innerHTML= timestring;

}


updateclock()
setInterval(updateclock, 1000)