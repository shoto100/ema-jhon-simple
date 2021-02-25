
gsap.from(".left-container", 2, {
    width: "0",
    ease: Expo.easeInOut
});
gsap.from(".right-container", 2, {
    delay: 1.5,
    width: "0",
    opacity: 0,
    ease: Expo.easeInOut
});
gsap.from(".center-container", 2, {
    delay: 3,
    width: "0",
    x: -20,
    ease: Expo.easeInOut
});
gsap.from(".logo", 2, {
    delay: 1.5,    
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});
gsap.from(".info", 2, {
    delay: 1.5,    
    y: 50,
    opacity: 0,    
    ease: Expo.easeInOut
});
gsap.from(".story", 2, {
    delay: 2.5,    
    y: 20,
    opacity: 0,    
    ease: Expo.easeInOut
});
gsap.from(".menu", 2, {
    delay: 3.5,
    y: 20,
    opacity: 0,
    rotate: 90,    
    ease: Expo.easeInOut
});
gsap.from(".social ul", 2, {
    delay: 3.8,
    y: 20,
    opacity: 0,
    stagger: .2,
    ease: Expo.easeInOut
});

// Kursor

// new kursor({
//     type: 4
// });

//! Form Validation ! -----------------------

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');

// Show input error message

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control123 error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show input success message

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control123 success';
}

// Check email is valid

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
        
    }
    else {
        showError(input, 'Email is not valid'); 
        
    }
}

// Check password is valid

function checkPassword(input) {
    const rex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    
    if (rex.test(input.value.trim())) {
        showSuccess(input);
        
    }
    else {
        showError(input, 'Password is not valid; must be use (uppercase, number, symbol)'); 
        
    }
}

// Check password match 

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords is not match');
        showError(input1, 'Passwords is not match');
        
    }
     
}

// Check required fields

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFeildName(input)} is required`)
        }
        else {
            showSuccess(input);
        }
    });
}

// Check input length

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFeildName(input)} must be at least ${min} characters`);
        
    }
    else if (input.value.length > max) {
        showError(input, `${getFeildName(input)} must be less thern ${max} characters`);
        
    }
    else {
        showSuccess(input);
    }
}

// Get feildname

function getFeildName(input) {
    return input.id.toUpperCase().charAt(0) + input.id.slice(1);
}

//Event Listener

email.addEventListener('focusout', function(e) {
    checkEmail(email);
});
username.addEventListener('focusout', function(e) {
    checkLength(username, 3, 15);
});

password.addEventListener('focusout', function(e) {
    checkPassword(password);
});

// password1.addEventListener('focusout', function(e) {
//     checkPassword(password1);
// });

form.addEventListener('submit', function(e) {

    e.preventDefault();

    
    checkRequired([username, email, password, password1]);
    checkLength(username, 3, 15);
    checkPassword(password);
    checkEmail(email);
    checkPasswordMatch(password, password1);

    

}); 
