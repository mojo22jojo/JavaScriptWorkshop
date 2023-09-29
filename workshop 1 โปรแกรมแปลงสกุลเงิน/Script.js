const currency_one=document.getElementById('currency-one');
const currency_two=document.getElementById('currency-two');

const amount_one=document.getElementById('amount-one');
const amount_two=document.getElementById('amount-two');

const rateText=document.getElementById('rate');
const btnSwap=document.getElementById('btn');

 
currency_one.addEventListener('change',calcurateMoney);
currency_two.addEventListener('change',calcurateMoney);
amount_one.addEventListener('input',calcurateMoney);
amount_two.addEventListener('input',calcurateMoney);

function calcurateMoney(){
    const one = currency_one.value;
    const two = currency_two.value;    
    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
    .then(res=>res.json()).then(data=>{
        const rate=data.rates[two];
        console.log(data);
        rateText.innerText=`1 ${one} = ${rate}${two}`;
        console.log (rateText.innerText);
        amount_two.value=(amount_one.value*rate).toFixed(2);

    })
    }
    // function api(){   
    //     fetch(`http://localhost/api/getEmployeeLogin.php?isAdd=true`)
    //     .then(res=>res.json()).then(data=>{
    //         console.log(data.employee_id);
           
    
    //     })
    //     }


    // function Mhee() {
    //     console.log("Mhee");
    // }

    btnSwap.addEventListener('click',()=>{ //ปุ่มสลับ
        // USD => THB || THB => USD
        // TEMP => USD || THB = TEMP (USD)
        const temp = currency_one.value; // ต้นทาง
        currency_one.value=currency_two.value;
        currency_two.value = temp  
        calcurateMoney(); 
       
    })
  
// calcurateMoney();
console.log("Mhee");
api();


