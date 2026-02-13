let timeInput=document.getElementById("initialTime");
let altitudeInput=document.getElementById("altitude");
let button=document.getElementById("convertButton");
let result=document.getElementById("result")


button.addEventListener("click",function() {
    console.log("Button clicked")
    let timeValue=timeInput.value;
    let altitudeValue=altitudeInput.value;
    console.log(timeValue,altitudeValue);
    let altitudeMeters = altitudeValue*0.305;
    function convertTimeToSeconds(mmSsString) {
        const[minutes, seconds]=mmSsString.split(':');
        const totalSeconds = (+minutes)*60 +(+seconds);
        return totalSeconds;
    }
    let totalSeconds= convertTimeToSeconds(timeValue);
    function altitudeEquation(totalSeconds, altitude){
       const k=0.018;
       const percent_loss =k*(altitude/1000);
       const seeLevelTime= totalSeconds*(1-percent_loss);
       return seeLevelTime;
    }
    let seaLevelTime=altitudeEquation(totalSeconds,altitudeMeters)
let minutes = Math.floor(seaLevelTime/60);
let seconds = (seaLevelTime%60).toFixed(2);
let convertedTime = minutes + ":" + seconds;
    result.innerText = "Your converted time is "+ convertedTime
});

