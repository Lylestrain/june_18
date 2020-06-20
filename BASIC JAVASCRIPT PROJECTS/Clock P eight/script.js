
function showTime(){

    let date = new Date();
    let hours = date.getHours();//0-23
    let minutes = date.getMinutes();//0-59
    let seconds = date.getSeconds();//0-59

    let formatHours = convertFormat(hours)

    hours = checkTime(hours)

    
}

function convertFormat(time) {
    let format = 'AM'
    if (time>=12) {
        format = 'PM'
    }
    return format;
}

function checkTime(time){
    if(time>12){
        time = time-12;
    }
    if(time===0){
        time=12;
    }
    return time
}