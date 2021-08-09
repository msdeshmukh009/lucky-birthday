var bDate = document.querySelector("#bDate");
var luckyNum = document.querySelector("#luckyNum");
var button = document.querySelector("#btn1");
var output = document.querySelector("#outputDiv")
var closeBtn = document.querySelector("#close-notice")
var noticeDiv = document.querySelector(".notice")
var form = document.querySelector("#form")


const outputPass=`<div class="label">Hurray!!You are a lucky person!</div><img width="100%" height="200px" src="undraw_awesome_rlvy.svg" alt="image">`
const outputFail=`<div class="label">Ohh!!Your birthday is not that lucky!</div><img width="100%" height="200px" src="undraw_Raining_re_4b55.svg" alt="image">`

// function clicked(){
//     preventDefault();
//     var dateString = (bDate.value).split("-").join("");
//     var sum =0;
//     for(var i=0;i<dateString.length;i++){
//         sum = sum + Number(dateString[i]);
//     }     
//             if(sum%Number(luckyNum.value)===0){
//                     output.innerHTML =outputPass;
//             }else{
//                  output.innerHTML=outputFail;
//                    }     
//         }

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    var dateString = ((bDate.value).split('-')).join("");
    var sum=0;
    for(var i=0;i<dateString.length;i++){
     sum = sum + Number(dateString[i]);  
    }
    
    if(sum%luckyNum ===0){
        outputDiv.innerHTML = outputPass;
    }
    else{
        outputDiv.innerHTML = outputFail
    }
})

function closeNotice(){
    noticeDiv.style.display="none"
}
closeBtn.addEventListener("click",closeNotice)

