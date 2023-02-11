const form = document.querySelector("#form");

                form.addEventListener("submit", function(event) {
                event.preventDefault();
                console.log("username");

                const formData = new FormData(form);
                let registrationData = [];

                // Input validation

                if (!formData.get("username")) {
                    alert("Username is required");
                    return;
                }
                            

                if (!formData.get("tel")) {
                    alert("tel is required");
                    return;
                }

                if (!formData.get("confirm_password")) {
                    alert("Password is required");
                    return;
                }

                if (localStorage.getItem("registrationData")) {
                registrationData = JSON.parse(localStorage.getItem("registrationData"));

                for (let i = 0; i < registrationData.length; i++) {
                if (formData.get("tel") === registrationData[i].tel) {
                    alert("User already exists");
                    return;
                }
                }
                }

                if(formData.get("new-password") !== formData.get("confirm_password")){
                    alert("both passwords should be same");
                    return;
                }

                // Password validation
                if (formData.get("confirm_password").length < 8) {
                    alert("Password must be at least 8 characters long");
                    return;
                }
                // Space validation
                if (formData.get("username").indexOf(" ") !== -1) {
                    alert("Username cannot start with spaces");
                    return;
                }

                if (formData.get("username").lastIndexOf(" ") !== -1) {
                    alert("Username cannot end with spaces");
                    return;
                }

                if (formData.get("tel").indexOf(" ") !== -1) {
                    alert("Phone number cannot contain spaces");
                    return;
                }   

                if (formData.get("tel").lastIndexOf(" ") !== -1) {
                    alert("Phone number cannot contain spaces");
                    return;
                }

                if (formData.get("confirm_password").indexOf(" ") !== -1) {
                    alert("Password cannot begin with spaces");
                    return;
                }

                if (formData.get("confirm_password").lastIndexOf(" ") !== -1) {
                    alert("Password cannot end with spaces");
                    return;
                }

                // Check if the data already exists in local storage
                if (localStorage.getItem("registrationData")) {
                    registrationData = JSON.parse(localStorage.getItem("registrationData"));
                }

                // Push the new data to the array
                registrationData.push({
                    username: formData.get("username"),
                    tel: formData.get("tel"),
                    password: formData.get("confirm_password")
                });

                // Store the array in local storage
                localStorage.setItem("registrationData", JSON.stringify(registrationData));

                // go to the login page

                window.location.href="./login.html";

                // Clear the form
                // form.reset();
                            });