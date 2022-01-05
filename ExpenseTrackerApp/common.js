let check=0;
var storedValue="";
function fun(rid)
{  
    if(rid>=0)
    {
        //form values
        let arrSummary=JSON.parse(localStorage.getItem("Summary"));
        let arrDescription=JSON.parse(localStorage.getItem("Description"));
        let arrAmount=JSON.parse(localStorage.getItem("Amount"));
        let arrType=JSON.parse(localStorage.getItem("Type"));
        let arrTime=JSON.parse(localStorage.getItem("Time"));

        let expSumm=arrSummary[rid];
        let expDes=arrDescription[rid];
        let amt=arrAmount[rid];
        let typ=arrType[rid];
        let time=arrTime[rid];

        document.getElementById("expSumm").value=expSumm;
        document.getElementById("expDes").value=expDes;
        document.getElementById("amt").value=amt;
        document.getElementById("typ").value=typ;
        document.getElementById("time").value=time;

        console.log(document.getElementById("update"));

    } 
}

function editData(rid)
{
    var toUpdate=localStorage.getItem("toUpdate");
    if(toUpdate==null)
    {
        updateArr=[];
    }
    else{
        updateArr=JSON.parse(toUpdate);
    }
    updateArr.push(rid);
    localStorage.setItem("toUpdate",JSON.stringify(updateArr));

}
window.addEventListener('load', function() {
        var value=parseInt(localStorage.getItem("toUpdate")[localStorage.toUpdate.length-2]);
        fun(value);
});
