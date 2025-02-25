//CONTACT PAGE CREDENTIALS VALIDATION
const name = document.getElementById('name');
const email = document.getElementById('mail');
const subject = document.getElementById('subject');
const txt = document.getElementById('txt');

function cnc_validate(event) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    event.preventDefault();
    if (name.value === "" || email.value === "" || subject.value === "" || txt.value === "") {
        Swal.fire({
            title: 'Error!',
            text: 'Please fill in all fields.',
            icon: 'error',
            confirmButtonText: 'Okay'
        });
        return false;
    }
    else if (!emailRegex.test(email.value)) {
        Swal.fire({
            title: 'Error!',
            text: 'Please enter a valid email address.',
            icon: 'error',
            confirmButtonText: 'Okay'
        });
        return false;
    }
    else {
        Swal.fire({
            title: 'Success!',
            text: "Your message has been sent. We'll get back to you soon!",
            icon: 'success',
            confirmButtonText: 'Cool'
        });
        return false;
    }
}



//EMAIL VALIDATION AT NEWSLETTER
const mail = document.getElementById('mail');
function validate() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(mail.value)) {
        Swal.fire({
            title: 'Success!',
            text: "We'll contact you soon!",
            icon: 'success',
            confirmButtonText: 'Cool'
        });
    }
    else {
        Swal.fire({
            title: 'Error!',
            text: 'Enter a valid E-mail.',
            icon: 'error',
            confirmButtonText: 'Okay'
        });
    }
}