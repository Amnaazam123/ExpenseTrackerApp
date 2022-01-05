//arrAmpuntY is not saving data inside it

window.onload = function () {
    //Reference the DropDownList.
    var ddlYears = document.getElementById("year");

    //Determine the Current Year.
    var currentYear = (new Date()).getFullYear();
    var select=document.createElement("OPTION");
    select.innerHTML="Select Year";
    ddlYears.appendChild(select);
    //Loop and add the Year values to DropDownList.
    for (var i = 1950; i <= currentYear; i++) {
        var option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        ddlYears.appendChild(option);
        f();
    }
};

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

var months= ["Janaury","February","March","April","May","June","July",
            "August","September","October","November","December"];

let amountOnY=[];
let arrType=JSON.parse(localStorage.getItem("Type"));
let arrAmount=JSON.parse(localStorage.getItem("Amount"));
let arrTime=JSON.parse(localStorage.getItem("Time"));

var menuArr = arrType.filter(onlyUnique);
let month="";
let year="";
function selectedMonth(s)
{
    month = s[s.selectedIndex].innerHTML;
}
function f(){
    let chartStatus = Chart.getChart("barChart");
    if (chartStatus != undefined) {
    chartStatus.destroy();
}
    var canvasElement=document.getElementById("barChart");
    for (let k in arrTime){
        var dateParts = arrTime[k].split("/");
        var m=parseInt(dateParts[0]);
        var findY=(dateParts[2]).split(" ");
        let y = findY[0];
        if(months[m-1]==month && y==year){
            amountOnY.push(arrAmount[k]);
        }
    }
    let yAxis=[];
    for(let k in amountOnY){
        var p=amountOnY[k];
        var r = /\d+/;
        let rupee = parseInt(p.match(r));
        yAxis.push(rupee);
    }
    var config={
        type:"bar",
        data:{
            labels:menuArr,
            datasets:[
                {
                    label:"Expense summaries",
                    data:yAxis,
                    backgroundColor:["red","green","blue","orange"],
                    borderColor:["rgba(255,159,64,1)",
                    "rgba(255,99,132,1)",
                    "rgba(54,162,235,1)",
                    "rgba(75,192,192,1)"]
                },
            ],
        }
    };
    var barChart=new Chart(canvasElement,config);
}
function selectedYear(s)
{
    year = s[s.selectedIndex].value;
    f();
}

