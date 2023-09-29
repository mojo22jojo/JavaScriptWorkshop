// อ้างอิง Element ใน moneytracker     
const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// const Transactions = dataTransaction;
// console.log(Transactions); //console.log ไว้แสดงหน้านั้นๆให้ดู
let Transactions=[];
// console.log(Transactions);
function init(){
    console.log(init)
    list.innerHTML ='';
    Transactions.forEach(addDataTolist);
    calculateMoney();
}

function addDataTolist(Transactions){
    console.log(Transactions)
    const symbol = Transactions.amount < 0 ? '-':'+'; //trueถ้ามีค่าน่อยกว่า 0 ให้เป็น ลบ ถ้ามากกว่า 0 ให้เป็นบวก symbol เป็นตัวกำหนดค่า -,+
    console.log (Transactions.amount)
    //console.log(Transactions.amount); การเข้าถึงข้อมูลของจำนวนเงินให้ต่อท้ายด้วย.amounะ ถ้าต้องดารแบบข้อความให้เป็น .text หรือทั้งหมดไม่ต้องต่อ . อะไร
    const status = Transactions.amount < 0 ? 'minus':'plus';
    console.log(status)
    const item=document.createElement('li');
    item.classList.add(status)
    result = formatNumber(Math.abs(Transactions.amount));
    item.innerHTML =`${Transactions.text}<span>${symbol}${result}</span><button class="delete-btn1" onclick="removeData(${Transactions.id})">X</button>`; //ใส่ Math.abs เพื่อให้ค่าไม่ติดลบ
    list.appendChild(item) 

}
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  function autoID(){
    return Math.floor(Math.random()*1000000)
  }

function calculateMoney(){
    const amounts=Transactions.map(Transactions=>Transactions.amount);
    const total=amounts.reduce((result,item)=>(result+=item),0).toFixed(2); //คำนวณยอดคงเหลือ
    const income=amounts.filter(item=>item>0).reduce((result,item)=>(result+=item),0).toFixed(2); //คำนวณรายรับ
    const outcome=(amounts.filter(item=>item<0).reduce((result,item)=>(result+=item),0)*-1).toFixed(2); // คำนวณรายจ่าย

    
    
    balance.innerText=`$`+formatNumber(total);  //แสดงผลทางจอภาพ
    money_plus.innerText=`$`+formatNumber(income); //แสดงรายรับ
    money_minus.innerText=`$`+formatNumber(outcome); //แสดงรายจ่าย
}
function removeData(id){
//console.log("delete",id); ใช้คำสั่ง console.log() เพื่อดูว่าโปรแกรมทำงานอย่างที่คิดไว้หรือไม่
    Transactions=Transactions.filter(Transactions=>Transactions.id !==id)
    init();
}
function addTransaction(e){
    e.preventDefault();
    if(text.value.trim() === '' || amount.value.trim() === ''){
        alert("กรุณาป้อนข้อมูลให้ครบ");
    }
    else{
        const data={
            id:autoID(),
            text:text.value,
            amount:+amount.value
        
        }
        Transactions.push(data);
        addDataTolist(data);
        console.log(data);
        calculateMoney();
        text.value='';
        amount.value='';
    }
}
form.addEventListener('submit',addTransaction);
init();

``