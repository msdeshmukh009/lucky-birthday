var bDate = document.querySelector("#bDate");
var luckyNum = document.querySelector("#luckyNum");
var button = document.querySelector("#btn1");
var output = document.querySelector("#outputDiv")
var closeBtn = document.querySelector("#close-notice")
var noticeDiv = document.querySelector(".notice")
var form = document.querySelector("#form")


const outputPass='<div>Hurray!!You are a lucky person!</div><img width="100%" height="200px"  src="undraw_awesome_rlvy.svg" alt="image">'
const outputFail='<div>Ohh!!Your birthday is not that lucky!</div><img width="100%" height="200px"  src="undraw_Raining_re_4b55.svg" alt="image">'



form.addEventListener("submit", (e)=>{
    e.preventDefault();
    var dateString = (bDate.value).split("-").join("");
    let sum =0;
   
    for(var i=0;i< dateString.length;i++){
        sum = sum + Number(dateString[i]); 
    }
    
    const luckyNo= Number(luckyNum.value);
    if(sum%luckyNo === 0){
        outputDiv.innerHTML = outputPass;
    }
    else{
        outputDiv.innerHTML = outputFail;
    }
})

closeBtn.addEventListener("click",()=>{
    noticeDiv.style.display="none"
})

