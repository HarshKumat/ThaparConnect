//to show items
const hostelType = 'A'; // Replace with the actual hostel type you want to check

// Construct the URL with the specific hostel parameter
const apiUrl = 'http://localhost:8080/items';

  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
      // Process the data and create HTML elements to display the products
      data.forEach(product => {
          const productCard = document.createElement('div');
          productCard.className = 'product';
          productCard.innerHTML = `
              <h2>${product.name}</h2>
              <p>Description: ${product.description}</p>
              <p>Price:Rs ${product.price}</p>
          `;
          list1.appendChild(productCard);


      });
  })
  .catch(error => console.error('Error fetching data: ', error));


//to show user info
const apiUrl3 = 'http://localhost:8080/details';


fetch(apiUrl3)
.then(response => response.json())
.then(data => {
    // Process the data and create HTML elements to display the products
    data.forEach(detail => {
        const personDetails = document.getElementById('personDetails');
        personDetails.className = 'display';
        personDetails.innerHTML = `
            <h4>First name: ${detail.firstName}</h4><br>
            <h4>Email: ${detail.email}</h4><br>
            <h4>Hotel: ${detail.hostel}</h4><br>
        `;
        //personDetails.appendChild(modifyform);


    });
})
.catch(error => console.error('Error fetching data: ', error));



  //to confirm login

  document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.forms.login1; // Assuming your form has the name "login1"

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        const email = loginForm.elements.email.value;
        const password = loginForm.elements.password.value;

        // Make an HTTP POST request to your Spring Boot backend
        const apiUrl2 = 'http://localhost:8080/login'; // Replace with your login endpoint
        const requestBody = JSON.stringify({ email, password });

        try {
            const response = await fetch(apiUrl2, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: requestBody,
            });

            if (response.ok) {
                // Successfully logged in
                const email = loginForm.elements.email.value;
                sessionStorage.setItem('userEmail',email)
                window.location.href = 'main.html'; // Redirect to the dashboard page
            } else {
                // Show an error message (e.g., incorrect username or password)
                // You can display the error message on the page as needed
                const errorMessage = await response.text();
                alert(`Login failed: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    });
});
