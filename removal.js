// Use the fetch API to make a GET request
/*
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response body as JSON
  })
  .then((data) => {
    console.log('Is Hostel Overcrowded?', data);
    // You can use the 'data' variable for further processing
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });
*/

        /*
          const productCard = document.createElement('div');
          productCard.className = 'product';
          const productLink = document.createElement('a');
          productLink.href = 'item-details.html'; 
          productLink.appendChild(productCard);

          productCard.innerHTML = `
              <h2>${product.name}</h2>
              <p>Description: ${product.description}</p>
              <p>Price: Rs ${product.price}</p>
          `;
          
          productList.appendChild(productLink);
      });
          */

      
  //to show user info



  //to confirm login
/*
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
*/