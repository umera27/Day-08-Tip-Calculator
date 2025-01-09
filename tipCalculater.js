const btn=document.getElementById('btn');
const Errorr=document.getElementById('error');
let bonus;
let bonuses;
const tip=document.getElementById('tip');
const peo=document.getElementById('peoT');
const custom=document.getElementById('custom');


async function val(value) {
   let bill=document.getElementById('bill').value;
   let people=document.getElementById('people').value;
  var Custom;
   if (bill !='') {
   if (people==0 || people<0){
      console.log("Cant be zero");
      Errorr.style.display="flex";
     Errorr.style.color="red"; document.getElementById('people').style.border="1px solid red";
      }
   else {
     bonus=1*((bill*value)/100);
     console.log(bonus);              
      tip.style.color="hsl(172, 67%, 45%)";
      bonus=bonus.toFixed(2);
      bonus=Number(bonus);
      tip.innerText="$"+bonus;
      peo.style.color="hsl(172, 67%, 45%)";
     bonuses=people*((bill*value)/100);
    bonuses=bonuses.toFixed(2);
     bonuses=Number(bonuses);
       peo.innerText="$"+bonuses;
         Errorr.style.display="none";      document.getElementById('people').style.border="1px solid white";
        
                    }
  
 }
 

         
     function inputValue(value) {
         
      Custom=value; 
                           
     if (Custom!=0) {
     bonus=1*((bill*Custom)/100);
     console.log(bonus);
     bonus=bonus.toFixed(2);
     bonus=Number(bonus);
     tip.innerText=bonus;
     
     bonuses=people*((bill*custom)/100);
     bonuses=bonuses.toFixed(2);
     bonuses=Number(bonuses);
     peo.innerText=bonuses;
     }
     }       

  }
btn.addEventListener('click',function () {
    tip.innerText="$0.00";
    people.value="";
    bill.value="";
    peo.innerText="$0.00";
    
})


