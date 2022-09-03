
//delete by button
let clear = (y,x) => {
    y.removeChild(x);
}

//data storage
let dateData = [];
let lengthData = [];
let timeData = [];
let minutePerMileData = [];

//retrieving from local data
if (JSON.parse(localStorage.getItem("Dates")) != null) { dateData = JSON.parse(localStorage.getItem("Dates")) };
if (JSON.parse(localStorage.getItem("Pace")) != null) { minutePerMileData = JSON.parse(localStorage.getItem("Pace")) }
if (JSON.parse(localStorage.getItem("Time")) != null) { timeData = JSON.parse(localStorage.getItem("Time")) };
if (JSON.parse(localStorage.getItem("Length")) != null) { lengthData = JSON.parse(localStorage.getItem("Length")) };

//displaying saved local data and giving ability to delete already created data 
for (let i = 0; i < dateData.length; i++) { 
    let renderdate = document.createElement("p"); dateColumn.appendChild(renderdate); renderdate.innerHTML = dateData[i]; 
    let rendertime = document.createElement("p"); timeColumn.appendChild(rendertime); rendertime.innerHTML = timeData[i] + " minutes"; let y = document.createElement("button"); rendertime.appendChild(y); y.innerText = "x"; y.onclick = () => { console.log(renderdate.innerText)
    clear(timeColumn,rendertime); timeData.splice(i,1); clear(lengthColumn,renderlength); lengthData.splice(i,1); clear(dateColumn,renderdate); dateData.splice(i,1); minutePerMileData.splice(i,1); updategraph(); save(); }
    let renderlength = document.createElement("p");  lengthColumn.appendChild(renderlength);  renderlength.innerHTML = lengthData[i] + " miles";}

    //function that submits the data enetered with 
let submitrun = () => {
    //Assign variables to HTML elements
    let date = document.getElementById("date").value;
    let length = document.getElementById("length").value;
    let time = document.getElementById("time").value;
    let dateColumn = document.getElementById("dateColumn");
    let lengthColumn = document.getElementById("lengthColumn");
    let timeColumn = document.getElementById("timeColumn");

    //Add Input data to a p element appended to a column
    let newDateEntry = document.createElement("p");
    newDateEntry.innerHTML = date;
    dateColumn.appendChild(newDateEntry);
 
    let newLengthEntry = document.createElement("p");
    newLengthEntry.innerHTML = length + " miles";
    lengthColumn.appendChild(newLengthEntry);

    let newTimeEntry = document.createElement("p");
    newTimeEntry.innerHTML = time + " minutes";
    timeColumn.appendChild(newTimeEntry);
    let y = document.createElement("button");
    newTimeEntry.appendChild(y);
    y.innerText="x"
    y.onclick = ()=>{ let i = dateData.findIndex((date)=>{return date;} ); clear(timeColumn,newTimeEntry); timeData.splice(i,1); clear(dateColumn,newDateEntry); dateData.splice(i,1); clear(lengthColumn,newLengthEntry); lengthData.splice(i,1);  save(); updategraph(); minutePerMile.splice(i,1);}
    //function that converts time to decimal and calculates average mile time 
    let minutePerMile = () => {
        let minute0 = time[0].toString();
        let minute1 = time[1].toString();
        let minute2 = "";
        if (time.length > 5) { minute2 = time[2].toString(); }
        let minutes = Number((minute0 + minute1 + minute2));


        let second0 = time[time.length - 2].toString();
        let second1 = time[time.length - 1].toString();
        let seconds = Number((second0 + second1));

        let decimalSecond = seconds / 60;
        let decimalMinute = minutes + decimalSecond;

        return decimalMinute / length;

    }
    minutePerMileData.push(minutePerMile());
    //push data to arrays for storage/graphing
    dateData.push(date);
    lengthData.push(length);
    timeData.push(time);
    save();
    

}


let save = () => {
    window.localStorage.setItem("Dates", JSON.stringify(dateData));
    localStorage.setItem("Pace", JSON.stringify(minutePerMileData));
    localStorage.setItem("Time", JSON.stringify(timeData))
    localStorage.setItem("Length", JSON.stringify(lengthData))
}





