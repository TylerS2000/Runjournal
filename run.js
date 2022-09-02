let deleteInput = document.getElementById("delete");
let pop = ()=>{
for(let i=0; i<dateData.length; i++){if (dateData[i]==deleteInput.value){dateData.splice(i); lengthData.splice(i); timeData.splice(i); minutePerMileData.splice(i);}}
console.log('i');
console.log(deleteInput.value)
save();
}

let newLengthEntry = document.createElement("p");
let dateData = [];
let lengthData = [];
let timeData = [];
let minutePerMileData = [];
if (JSON.parse(localStorage.getItem("Dates"))!=null){dateData = JSON.parse(localStorage.getItem("Dates"))};
if(JSON.parse(localStorage.getItem("Pace"))!=null){minutePerMileData = JSON.parse(localStorage.getItem("Pace"))}
if (JSON.parse(localStorage.getItem("Time"))!=null){timeData = JSON.parse(localStorage.getItem("Time"))};
if (JSON.parse(localStorage.getItem("Length"))!=null){lengthData = JSON.parse(localStorage.getItem("Length"))};
for(let i = 0; i<dateData.length; i++){let x = document.createElement("p");dateColumn.appendChild(x); x.innerHTML=dateData[i];}
for(let i = 0; i<timeData.length; i++){let x = document.createElement("p");timeColumn.appendChild(x); x.innerHTML=timeData[i]+" minutes";}
for(let i = 0; i<lengthData.length; i++){let x = document.createElement("p");lengthColumn.appendChild(x); x.innerHTML=lengthData[i]+" miles";}

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
newDateEntry.innerHTML=date;
dateColumn.appendChild(newDateEntry);

let newLengthEntry = document.createElement("p");
newLengthEntry.innerHTML=length +" miles";
lengthColumn.appendChild(newLengthEntry);

let newTimeEntry = document.createElement("p");
newTimeEntry.innerHTML=time + " minutes";
timeColumn.appendChild(newTimeEntry);


//function that converts time to decimal and calculates average mile time 
let minutePerMile = () =>{
let minute0 = time[0].toString();
let minute1 = time[1].toString();
let minute2 = "";
if(time.length>5){minute2=time[2].toString();}
let minutes = Number((minute0+minute1+minute2));


let second0 = time[time.length-2].toString();
let second1 = time[time.length-1].toString();
let seconds = Number((second0+second1));

let decimalSecond = seconds/60;
let decimalMinute = minutes+decimalSecond;

return decimalMinute/length;

}
minutePerMileData.push(minutePerMile());
console.log(minutePerMileData);
//push data to arrays for storage/graphing
dateData.push(date);
lengthData.push(length);
timeData.push(time);
console.log(timeData, lengthData, dateData);
save();
}
let save = () => {window.localStorage.setItem("Dates", JSON.stringify(dateData));
localStorage.setItem("Pace", JSON.stringify(minutePerMileData));
localStorage.setItem("Time",JSON.stringify(timeData))
localStorage.setItem("Length",JSON.stringify(lengthData))
}





