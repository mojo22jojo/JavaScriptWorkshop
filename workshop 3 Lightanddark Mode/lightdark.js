const switchToggle=document.querySelector('input[type="checkbox"]');
const toggleIcon=document.getElementById('toggle-icon');
const nav=document.getElementById('nav');
function switchMode(e){
    // console.log("ok")
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        darkmode();
    }else{
        document.documentElement.setAttribute('data-theme','light');
        lightmode();
    }
}
function darkmode(){
    toggleIcon.children[0].textContent="โหมดกลางคืน";
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    nav.style.backgroundColor='rgb(0 0 0 / 50%)';
}
function lightmode(){
    toggleIcon.children[0].textContent="โหมดกลางวัน";
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    nav.style.backgroundColor='rgb(255 255 255 / 50%)';
}


switchToggle.addEventListener('change',switchMode);