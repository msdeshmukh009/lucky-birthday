var bDate = document.querySelector("#bDate");
var luckyNum = document.querySelector("#luckyNum");
var button = document.querySelector("#btn1");
var output = document.querySelector("#outputDiv")

function clicked(){
    var dateString = (bDate.value).split("-").join("");
    var sum =0;
    for(var i=0;i<dateString.length;i++){
        sum = sum + Number(dateString[i]);
    }
   if(sum%Number(luckyNum.value)===0){
    output.innerText ="yay"
   }else{
       output.innerText="nah"
   }
}
button.addEventListener("click",clicked);
