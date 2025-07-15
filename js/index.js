

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission - this runs if the form is invalid (!form.checkValidity is a built-in HTML5 method)
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault() // stop form from submitting 
      }

      form.classList.add('was-validated') // triggers bootstraps validation css showing rd/green input borders and feedback messages 
    }, false) // false is so code runs when user triggers submit buttom if not it would happen to early and not check anything
  });

// Get the login modal
        const modal = document.getElementById('login-modal');

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };

// make the login button open the YoungFarmer login - will eventually need to work out how to show different pages depending on different users

const form = document.getElementById('login-form');

form.addEventListener('submit', function (event) {
  // checkValidity returns false if any required field is empty or invalid
  if (!form.checkValidity()) {
    event.preventDefault(); // stop submit
    form.classList.add('was-validated'); // show red borders/messages
  } else {
    event.preventDefault(); // stop actual submit
    // If valid, redirect to next page
    window.location.href = "./youngFarmers.html";
  }
});
