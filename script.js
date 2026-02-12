function validateForm() {

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let error = document.getElementById("error");

    // Empty field check
    if (username === "" || email === "" || phone === "" || password === "" || confirm === "") {
        error.innerHTML = "All fields are mandatory!";
        return false;
    }

    // Phone validation (10 digits)
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        error.innerHTML = "Phone number must be 10 digits!";
        return false;
    }

    // Email validation
    let emailPattern = /^[a-zA-Z]+@[a-zA-Z]{3,}\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email)) {
        error.innerHTML = "Invalid Email format!";
        return false;
    }

    // Password validation
    let passPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[&$#@]).{7,}$/;
    if (!passPattern.test(password)) {
        error.innerHTML = "Password must contain 1 capital, 1 digit, 1 special (&,$,#,@) and min 7 chars!";
        return false;
    }

    // Confirm password match
    if (password !== confirm) {
        error.innerHTML = "Passwords do not match!";
        return false;
    }

    error.innerHTML = "Form Submitted Successfully!";
    error.style.color = "green";

    return false;
}


// DOM — Change Image
function changeImage() {
    document.getElementById("myImg").src = "https://via.placeholder.com/200";
}


// DOM — Change text
document.getElementById("welcome").innerHTML = "Hello Student! Welcome to FSD Lab";


// DOM — Add node
let newNode = document.createElement("p");
newNode.innerHTML = "New node added using DOM!";
document.body.appendChild(newNode);


// DOM — Delete node after 5 sec
setTimeout(() => {
    newNode.remove();
}, 5000);


// jQuery Part
$(document).ready(function () {

    // Change button text
    $("#jqueryBtn").click(function () {
        $(this).text("Button Text Changed using jQuery");
    });

    // Set background image using jQuery
    $("body").css("background-image", "url('https://via.placeholder.com/1200x800')");

    // Access form data using jQuery
    $("#submitBtn").click(function () {
        let name = $("#username").val();
        console.log("Username:", name);
    });

    // Add attribute using jQuery
    $("#title").attr("title", "This is Student Registration Form");
});