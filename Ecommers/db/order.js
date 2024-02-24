const productname=document.getElementById('productname');
const prodes=document.getElementById('prodes');
const date=document.getElementById('date');
date.innerHTML=Date();
const pimage=document.getElementById('pimage');
let orderdata=JSON.parse(localStorage.getItem('orderpage'));
//console.log(orderdata.Productname);
productname.innerHTML=orderdata.Productname;
prodes.innerHTML=orderdata.ProductDes;
//console.log(orderdata.productimg);
pimage.setAttribute('src',`${orderdata.productimg}`);

//*
let form = document.querySelector('#form');
let formName = document.querySelector('#name');
let formEmail = document.querySelector('#email');
let formNumber = document.querySelector('#number');
let formAltern = document.querySelector('#al-number');
let formPincode = document.querySelector('#pincode');
let formAddress = document.querySelector('#address');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let name=formName.value;
    let email=formEmail.value;
    let number=formNumber.value;
    let alternum=formAltern.value;
    let pincode=formPincode.value;
    let address=formAddress.value;
    //console.log(name,email,number,alternum,pincode,pincode,address);
    let objData={
        "name":name,
        "email":email,
        "number":number,
        "alterNum":alternum,
        "pincode":pincode,
        "address":address
    }

    localStorage.setItem('Confirm-order',JSON.stringify(objData));
    location.href='../public/thankyou.html';
});
