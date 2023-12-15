const add1 = document.querySelector(".add1");
const sub1 = document.querySelector(".sub1");

const add2 = document.querySelector(".add2");
const sub2 = document.querySelector(".sub2");
 


const cost1 = 8.99;
const cost2 = 7.68;


const label1 = document.querySelector(".cnt1");
const label2 = document.querySelector(".cnt2");


add1.addEventListener("click", ()=>{
    label1.innerHTML++; 
    setVals();
})

sub1.addEventListener("click", ()=>{
    if(label1.innerHTML > 0){
         label1.innerHTML--;
         setVals(); 
    }
})

add2.addEventListener("click", ()=>{
    label2.innerHTML++;
    setVals(); 
})

sub2.addEventListener("click", ()=>{
    if(label2.innerHTML > 0){
         label2.innerHTML--; 
         setVals();
    }
})



function setVals(){
    localStorage.setItem("tot1", label1.innerHTML);
    localStorage.setItem("tot2", label2.innerHTML);
  
}




