let doctor=document.querySelectorAll(".team");
let count=0;
doctor.forEach(function(card, index){
    card.style.left=`${index*100}%`
})
function myFun(){
   doctor.forEach(function(curValue){
    curValue.style.transform=`translateX(-${count*100}%)`
   })
}
setInterval(function(){
    count++;
    if(count==doctor.length){
        count=0;
    }
    myFun()
}, 3000);
