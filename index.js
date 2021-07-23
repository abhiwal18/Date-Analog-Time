function setDate(){
    var a=new Date();
    var getdate=document.querySelector("#time");
    let time= a.getHours() +':'+ a.getMinutes()+ ':'+a.getSeconds();
    let date = a.toLocaleDateString();
    getdate.innerHTML= time + " on " + date;
}

setInterval(setDate,1000);
setInterval(() => {
    d = new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();
    hRotation = 30*hTime + mTime/2;
    mRotation =  6*mTime;
    sRotation = 6*sTime;

    hour.style.transform = `rotate(${hRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;

},1000);

