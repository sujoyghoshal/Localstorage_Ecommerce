const loginform = document.querySelector('#login-form')
loginform.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    // Check if it's admin
    if ('admin@gmail.com' === email && '1234' === password) {
        location.href = '../public/admindashboard.html';
        return;
    }

    
    const userData = JSON.parse(localStorage.getItem('userDetails')) || [];
    const user = userData.find(item => item.email === email && item.password === password);
    if (user) {
        localStorage.setItem("user", JSON.stringify({ userid: user.email }));
        location.href = '../public/userdashboard.html';
    } else {
        alert('Invalid email or password');
    }

    // Reset the form after handling all conditions
    e.target.reset();
});
