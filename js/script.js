
//    NeuroNova AI Newsletter Form
//    JavaScript Validation



// Welcome Message 

window.onload = function () {

    alert(
        "Welcome to the NeuroNova AI Ltd. - Sign up"
    );

};


//  Form Validation 

function validateForm() {

    // Get First Name 

    let firstName =
        document.forms["signupForm"]["fname"].value;

    // Get Last Name

    let lastName =
        document.forms["signupForm"]["lname"].value;

    // Validate First Name 

    if (firstName === "") {

        alert(
            "First Name is required."
        );

        return false;

    }

    // Validate Last Name 

    if (lastName === "") {

        alert(
            "Last Name is required."
        );

        return false;

    }

    // Success Message 

    alert(
        "Thank you for signing up to the NeuroNova AI"
    );

    return true;

}
