//to show items
const hostelType = 'A'; // Replace with the actual hostel type you want to check

// Construct the URL with the specific hostel parameter
const apiUrl = 'http://localhost:8080/items';

  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
      // Process the data and create HTML elements to display the products
      data.forEach(product => {
        const l = document.getElementById('list1');
          const productCard = document.createElement('div');
          productCard.className = 'product';
          productCard.innerHTML = `
              <h2>${product.name}</h2>
              <p>Description: ${product.description}</p>
              <p>Price:Rs ${product.price}</p>
          `;
          l.appendChild(productCard);


      });
  })
  .catch(error => console.error('Error fetching data: ', error));

/*
//to show user info
const apiUrl3 = 'http://localhost:8080/user';


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
        personDetails.appendChild(modifyform);


    });
})
.catch(error => console.error('Error fetching data: ', error));
*/


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
                console.log('login done');
                const e = loginForm.elements.email.value;
                sessionStorage.setItem('userEmail',e)
                window.location.href = 'main.html'; 
            } else {
                const errorMessage = await response.text();
                alert(`Login failed: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    });
});

//to show user info

const email2 = sessionStorage.getItem('userEmail');
//const email = 'green.ranger@gmail.com'; // Retrieve email from the session storage
const person = `http://localhost:8080/user/${email2}`;

fetch(person)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Process the data and create HTML elements to display the user information
    const personDetails = document.getElementById('personDetails');
    personDetails.className = 'display';
    personDetails.innerHTML = `
      <h4>First name: ${data[0].firstName}</h4><br>
      <h4>Last Name: ${data[0].lastName}</h4><br>
      <h4>Email: ${data[0].email}</h4><br>
      <h4>Hostel: ${data[0].hostel}</h4><br>
    `;
    const c = data[0].id;
    sessionStorage.setItem('cid',c);
    //console.log(sessionStorage.getItem('cid'));
  })
  .catch(error => console.error('Error fetching data: ', error));

  //to save new user info

  document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.forms.loginr; 

    registrationForm.addEventListener('submit', async (event) => {
        event.preventDefault(); 

        const formData = new FormData(event.target);
        const registrationData = {};
        formData.forEach((value, key) => {
            registrationData[key] = value;
        });

        const registerUrl = `http://localhost:8080/register`;
        try {
            const response = await fetch(registerUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData),
            });

            if (response.ok) {
                alert('Registration done! Please login.');
                window.location.href = 'login.html'; 
            } else {
               
                const errorMessage = await response.text();
                alert(`Registration failed: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    });
});

//show user favourites
document.addEventListener('DOMContentLoaded',async()=>{
    const em = sessionStorage.getItem('userEmail');
    const fav = `http://localhost:8080/user/${em}/favourites`;

    try {
        const response = await fetch(fav, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            const favoritesContainer = document.getElementById('cart'); // Replace with your container ID

            data.forEach(favourite => {
                // Create HTML elements to display the favorite items
                const favoriteItem = document.createElement('div');
                favoriteItem.className = 'cart-info';
                const itemName = document.createElement('p');
                itemName.textContent = `Item: ${favourite.name}`; // Replace with the property name for item name

                const itemDescription = document.createElement('p');
                itemDescription.textContent = `Description: ${favourite.description}`;

                const itemPrice = document.createElement('p');
                itemPrice.textContent = `Description: ${favourite.price}`; // Replace with the property name for item description

                // Append the item name and description to the favoriteItem element
                favoriteItem.appendChild(itemName);
                favoriteItem.appendChild(itemDescription);

                favoritesContainer.appendChild(favoriteItem);
            });
        } else {
            const errorMessage = await response.text();
            console.error(`Error fetching user favorites: ${errorMessage}`);
        }
    } catch (error) {
        console.error('Error fetching user favorites:', error);
    }

    

})
