window.addEventListener('load', function() {
    selectData();
});

function selectData(){
    let arrSummary=JSON.parse(localStorage.getItem("Summary"));
    let arrDescription=JSON.parse(localStorage.getItem("Description"));
    let arrAmount=JSON.parse(localStorage.getItem("Amount"));
    let arrType=JSON.parse(localStorage.getItem("Type"));
    let arrTime=JSON.parse(localStorage.getItem("Time"));

    if(arrSummary != null)
    {
        let html="";
        let sno=1;
        for(let k in arrSummary)
        {
            html=html+`<tr>
            <td>${sno}</td>
            <td>${arrSummary[k]}</td>
            <td>${arrDescription[k]}</td>
            <td>${arrAmount[k]}</td>
            <td>${arrType[k]}</td>
            <td>${arrTime[k]}</td>
            <td>
            <a href="update.html"><button id="update" onclick=editData(${k})>Update</button></a>
            <a href="javascript:void(0)"><button id="delete" onclick=deleteData(${k})>Delete</button></a>
            </td>
            </tr>`
            sno++;
        }
        document.getElementById("root").innerHTML=html;
    }
}
function deleteData(rid){
    let arrSummary=JSON.parse(localStorage.getItem("Summary"));
    let arrDescription=JSON.parse(localStorage.getItem("Description"));
    let arrAmount=JSON.parse(localStorage.getItem("Amount"));
    let arrType=JSON.parse(localStorage.getItem("Type"));
    let arrTime=JSON.parse(localStorage.getItem("Time"));
    
    arrSummary.splice(rid,1);
    arrDescription.splice(rid,1);
    arrAmount.splice(rid,1);
    arrType.splice(rid,1);
    arrTime.splice(rid,1);
    localStorage.setItem("Summary",JSON.stringify(arrSummary));
    localStorage.setItem("Description",JSON.stringify(arrDescription));
    localStorage.setItem("Amount",JSON.stringify(arrAmount));
    localStorage.setItem("Type",JSON.stringify(arrType));
    localStorage.setItem("Time",JSON.stringify(arrTime));
    selectData();
}

