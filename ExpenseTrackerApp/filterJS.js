window.addEventListener("load",function(){
    let arrType=JSON.parse(localStorage.getItem("Type"));
    if(arrType!=null)
    {
        let html="";
        let srNo=1;
        var menuArr = arrType.filter(onlyUnique);
        for(let k in menuArr)
        {
            html=html+
            `<option id=${srNo}>${menuArr[k]}</option>`
            srNo++;
        }
        html=`<option>-- Select Option --</option>`+html;
        document.getElementById("typee").innerHTML=html;
    }
});

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
let myTypeValue="";
let myTypeId="";
let table = document.getElementById("myTable");
function displayTable(){

    let myTypeToSearch=myTypeValue;
    let range1=document.getElementById("range1").value;
    let range2=document.getElementById("range2").value;

    let range1Element=document.getElementById("range1");
    let range2Element=document.getElementById("range2");
    let typeElement=document.getElementById(myTypeId);
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
        <td class="amountClass">${arrAmount[k]}</td>
        <td class="typeClass">${arrType[k]}</td>
        <td>${arrTime[k]}</td>
        </tr>`
        sno++;
    }
    document.getElementById("root").innerHTML=html;


    if(myTypeValue!="")
    {
            var table=document.getElementsByTagName("table")[0];
            var table_row=document.getElementsByTagName("tr");
            for(var i=0;i<table_row.length;i++){
                var name_row=table_row[i].getElementsByTagName("td")[4];
                if(name_row)
                {
                    var type=name_row.textContent||TextDecoder.innerText;
                    if(type.indexOf(myTypeToSearch)>-1){
                        table_row[i].style.display="table_row";
                    }
                    else{
                        table_row[i].style.display="none";
                    }
                }
            }
        table.style.display="table";
        
    }
    if(range1!=""&&range2!="")
    {
        var table=document.getElementsByTagName("table")[0];
        var table_row=document.getElementsByTagName("tr");
        for(var i=0;i<table_row.length;i++){
            var name_row=table_row[i].getElementsByTagName("td")[3];
            if(name_row)
            {
                var price=name_row.textContent||TextDecoder.innerText;
                var r = /\d+/;
                let row_price = parseInt(price.match(r));
                let val1=parseInt(range1);
                let val2=parseInt(range2);
                if(row_price>=val1&&row_price<=val2){
                    table_row[i].style.display="table_row";
                }
                else{
                    table_row[i].style.display="none";
                }
            }
        }
    table.style.display="table";
    }
    else if((range1==""&&range2!="")||(range1!=""&&range2=="")){
        alert("Please select both ranges.");
        table.style.display="none";
    }
    else if(range2==""&&range1==""&&myTypeValue==""){
        alert("Please mention either type or range to filter your expenses");
    }

}


}

function selectedType(s)
{
    myTypeValue = s[s.selectedIndex].value;
    myTypeId=s[s.selectedIndex].id;
}