let form = document.querySelector('form');
let userData = [];  //* Initialize userData
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;
    
    // Initialize the checkStatus to false
    let checkStatus = false;
    
    let userData = JSON.parse(localStorage.getItem('userDetails')) || [];
    
    for (let v of userData) {
        if (v.email === email) {
            checkStatus = true;
            break;
        }
    }

    if (checkStatus) {
        alert('Email already exists');
    } else {
        userData.push({
            "email": email,
            "password": password
        });
        localStorage.setItem('userDetails', JSON.stringify(userData));
        //alert('Signup successful!');
        window.location.href = '../public/index.html';
        e.target.reset(); // Reset input
    }
});
