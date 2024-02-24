const confirmPage=JSON.parse(localStorage.getItem('Confirm-order'));
//console.log(confirmPage.name)
const p=document.querySelector('p');
p.innerHTML=confirmPage.name;

const back=document.querySelector('#back');
back.addEventListener('click',()=>{
    location.href='../public/userdashboard.html';
})