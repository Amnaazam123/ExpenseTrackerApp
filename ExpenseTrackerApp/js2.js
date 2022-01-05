console.log("js2 am added");
n =  new Date();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(document.getElementById("time"));
document.getElementById("time").value = n.getDate()+"/"+n.getMonth()+1+"/"+n.getFullYear()+" "+days[n.getDay()]+" "+n.getHours()+":"+n.getMinutes()+":"+n.getSeconds();
//localStorage.clear();

let id="";
function manageData(){

    let expSumm=document.getElementById("expSumm").value;
    let expDes=document.getElementById("expDes").value;
    let amt=document.getElementById("amt").value;
    let typ=document.getElementById("typ").value;
    let time=document.getElementById("time").value;

    if(expSumm==""||expDes==""||amt==""||typ==""||time=="")
    {
        alert("Please enter all fields.");
    }
    else{
        if(id=="")           //data is going to add
        {
            let arrSummary=JSON.parse(localStorage.getItem("Summary"));
            let arrDescription=JSON.parse(localStorage.getItem("Description"));
            let arrAmount=JSON.parse(localStorage.getItem("Amount"));
            let arrType=JSON.parse(localStorage.getItem("Type"));
            let arrTime=JSON.parse(localStorage.getItem("Time"));
            if(arrSummary==null)
            {
                let summaryData=[expSumm];
                let descriptionData=[expDes];
                let amountData=[amt];
                let typeData=[typ];
                let timeData=[time];
                localStorage.setItem("Summary",JSON.stringify(summaryData));
                localStorage.setItem("Description",JSON.stringify(descriptionData));
                localStorage.setItem("Amount",JSON.stringify(amountData));
                localStorage.setItem("Type",JSON.stringify(typeData));
                localStorage.setItem("Time",JSON.stringify(timeData));
            }
            else
            {
                arrSummary.push(expSumm);
                arrDescription.push(expDes);
                arrAmount.push(amt);
                arrType.push(typ);
                arrTime.push(time);
                localStorage.setItem("Summary",JSON.stringify(arrSummary));
                localStorage.setItem("Description",JSON.stringify(arrDescription));
                localStorage.setItem("Amount",JSON.stringify(arrAmount));
                localStorage.setItem("Type",JSON.stringify(arrType));
                localStorage.setItem("Time",JSON.stringify(arrTime));
            }
            alert("Data added successfully.");
        }
    }
    document.getElementById("expSumm").value = "";
    document.getElementById("expDes").value = "";
    document.getElementById("amt").value = "";
    document.getElementById("typ").value = "";
    document.getElementById("time").value = "";
}
function updateData(){
    let expSumm=document.getElementById("expSumm").value;
    let expDes=document.getElementById("expDes").value;
    let amt=document.getElementById("amt").value;
    let typ=document.getElementById("typ").value;
    let time=document.getElementById("time").value;

    let arrSummary=JSON.parse(localStorage.getItem("Summary"));
    let arrDescription=JSON.parse(localStorage.getItem("Description"));
    let arrAmount=JSON.parse(localStorage.getItem("Amount"));
    let arrType=JSON.parse(localStorage.getItem("Type"));
    let arrTime=JSON.parse(localStorage.getItem("Time"));

    var value=parseInt(localStorage.getItem("toUpdate")[localStorage.toUpdate.length-2]);

    arrSummary[value]=expSumm;
    arrDescription[value]=expDes;
    arrAmount[value]=amt;
    arrType[value]=typ;
    arrTime[value]=time;

    localStorage.setItem("Summary",JSON.stringify(arrSummary));
    localStorage.setItem("Description",JSON.stringify(arrDescription));
    localStorage.setItem("Amount",JSON.stringify(arrAmount));
    localStorage.setItem("Type",JSON.stringify(arrType));
    localStorage.setItem("Time",JSON.stringify(arrTime));

}
