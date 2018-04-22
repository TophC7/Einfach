function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var suffix;
    suffix=checkTime(h);
    h=checkHour(h);
    m=checkMinutes(m);
    document.getElementById('clock').innerHTML= h + "." + m + ' ' + suffix;

    t=setTimeout('startTime()', 500)
}

function checkMinutes(i) {
    if (i<10) {
        i= "0" + i;
    }
    return i
}

function checkHour(o) {
    if (o > 12) {
        o = o - 12;
      }
    return o
}

function checkTime(u) {
    if (u > 12) {
        suffix = "pm";
      } else { suffix = "am"; }
    return suffix
}

window.onload=startTime;
