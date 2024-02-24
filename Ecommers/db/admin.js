const from = document.querySelector('form');
const main = document.querySelector('.main')
const table = document.querySelector('#table');
from.addEventListener('submit', (e) => {
    e.preventDefault();
    const productname = e.target.productname.value;
    const productdes = e.target.productdes.value;
    const productpri = e.target.productpri.value;
    const productimg = e.target.productimg.value;
    //console.log(productname,productdes,productpri);
    const userdata = JSON.parse(localStorage.getItem('product')) ?? [];
    console.log(userdata);
    userdata.push({
        "Productname": productname,
        "ProductDes": productdes,
        "ProductPrice": productpri,
        "productimg": productimg
    });
    localStorage.setItem('product', JSON.stringify(userdata));
    display();
    window.location.reload();
    e.target.reset();
})
//* Display
function display() {
    const userdata = JSON.parse(localStorage.getItem('product')) ?? [];
    userdata.forEach((item, index) => {
        //console.log(item);
        let tr2 = document.createElement('tr');
        let td = document.createElement('td');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        td.innerHTML = index;
        td1.innerHTML = item.Productname;
        td2.innerHTML = item.ProductDes;
        td3.innerHTML = item.ProductPrice;
        // td4.innerHTML=`<button onclick='edit(${index})'> Edit </button>`;
        td4.innerHTML = `<button class="edit-button" onclick='edit(${index})'> Edit <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
        </svg></button>`;

        td5.innerHTML = `<button class="delete-button" onclick='removeData(${index})'> Delete <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg></button>`;


        td5.setAttribute('id', 'delete-button');
        td6.innerHTML = `<img src="${item.productimg}" alt="Product Image" style="width:80px; height:80;">`;

        tr2.appendChild(td);
        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);
        tr2.appendChild(td4);
        tr2.appendChild(td5);
        tr2.appendChild(td6);
        table.appendChild(tr2);
    })
    main.appendChild(table);

}
display();


//*delete :
let removeData = (index) => {
    alert('are you sure delete..');
    let userData = JSON.parse(localStorage.getItem('product')) ?? [];
    userData.splice(index, 1);
    localStorage.setItem('product', JSON.stringify(userData));
    window.location.reload();
};
//*Edit
let div = document.querySelector('#edit-container');
let edit_name = document.querySelector('#edit_name');
let edit_des = document.querySelector('#edit_des');
let edit_price = document.querySelector('#edit_price');
const editForm = document.querySelector('#edit-form');
const pimage = document.querySelector('#mini-image');
let edit = (index) => {
    div.setAttribute('id', 'show-edit');
    let userData = JSON.parse(localStorage.getItem('product')) || [];
    let itemToEdit = userData[index];
    pimage.setAttribute('src', `${itemToEdit.productimg}`)
    document.getElementById('edit_name').value = itemToEdit.Productname;
    document.getElementById('edit_des').value = itemToEdit.ProductDes;
    document.getElementById('edit_price').value = itemToEdit.ProductPrice;

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        itemToEdit.Productname = document.getElementById('edit_name').value;
        itemToEdit.ProductDes = document.getElementById('edit_des').value;
        itemToEdit.ProductPrice = document.getElementById('edit_price').value;
        localStorage.setItem('product', JSON.stringify(userData));
        div.style.display = 'none';
        window.location.reload();
        display();
    });
};
//*Scroll down button :
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
