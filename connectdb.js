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
          const productCard = document.createElement('a');
          productCard.href = `itemDetails.html?name=${encodeURIComponent(product.name)}`;
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
      <h4>First name: ${data[0].firstName}</h4>
      <h4>Last Name: ${data[0].lastName}</h4>
      <h4>Email: ${data[0].email}</h4>
      <h4>Hostel: ${data[0].hostel}</h4>
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
            const favoritesContainer = document.getElementById('cart');
            i=1;

            data.forEach(favourite => {
                const favoriteItem = document.createElement('div');
                favoriteItem.className = 'cart-info';
                const itemName = document.createElement('p');
                itemName.textContent = `Item: ${favourite.name}`;

                const itemDescription = document.createElement('p');
                itemDescription.textContent = `Description: ${favourite.description}`;

                const itemPrice = document.createElement('p');
                itemPrice.textContent = `Price: ${favourite.price}`; 

                //favoriteItem.appendChild(itemName);
                //favoriteItem.appendChild(itemDescription);
                //favoriteItem.appendChild(itemPrice);

                //favoritesContainer.appendChild(favoriteItem);

                table = document.getElementById("favtable");
                row = table.insertRow(-1);
                c1 = row.insertCell(0);
                c2 = row.insertCell(1);
                c3 = row.insertCell(2);
                c4 = row.insertCell(3);

                c1.innerHTML = i;
                c2.innerHTML = favourite.name;
                c3.innerHTML = favourite.description;
                c4.innerHTML = favourite.price;
                i = i+1;
            });
        } else {
            const errorMessage = await response.text();
            console.error(`Error fetching user favorites: ${errorMessage}`);
        }
    } catch (error) {
        console.error('Error fetching user favorites:', error);
    }

    

});


// to show user listed items
document.addEventListener('DOMContentLoaded',async()=>{
    const em = sessionStorage.getItem('userEmail');
    const li = `http://localhost:8080/user/${em}/items`;

    fetch(li)
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
          const l = document.getElementById('listedItems');
            const productCard = document.createElement('a');
            productCard.href = `itemDetails.html?name=${encodeURIComponent(item.name)}`;
            productCard.className = 'product';
            productCard.innerHTML = `
                <h2>${item.name}</h2>
                <p>Description: ${item.description}</p>
                <p>Price:Rs ${item.price}</p>
            `;
            l.appendChild(productCard);
  
  
        });
    })
    .catch(error => console.error('Error fetching data: ', error));

    

});

//to post a new add
document.addEventListener('DOMContentLoaded', () => {
    const postad = document.forms.postadd; 

   postad.addEventListener('submit', async (event) => {
        event.preventDefault(); 

        const formData = new FormData(event.target);
        const postData = {};
        formData.forEach((value, key) => {
            postData[key] = value;
        });

        const postUrl = `http://localhost:8080/posts`;
        try {
            const response = await fetch(postUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            if (response.ok) {
                alert('Product Added!');
                window.location.href = 'main.html'; 
            } else {
               
                const errorMessage = await response.text();
                alert(`Could not add product: ${errorMessage}`);
            }
        } catch (error) {
            alert(`Could not add product`);
            console.error('Error during posting add:', error);
        }
    });
});
//to show specific item
document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const itemName = urlParams.get('name');

    const dets = `http://localhost:8080/dets/${itemName}`; 

    try {
        const response = await fetch(dets);
        if (response.ok) {
            const item = await response.json();
            const itemDetailsContainer = document.getElementById('spec');
            itemDetailsContainer.innerHTML = `
                <h2>${item.name}</h2>
                <p>Description: ${item.description}</p>
                <p>Price: Rs ${item.price}</p>
                <!-- Add other item details here -->
            `;
            const ii = item.id;
            sessionStorage.setItem('itemId',ii);
        } else {
            console.error('Error fetching item details');
        }
    } catch (error) {
        console.error('Error fetching item details:', error);
    }
});


//chat
document.getElementById('openChatBtn').addEventListener('click', function() {
    document.getElementById('chatPopup').style.display = 'block';

});
//to send message
document.getElementById('chatForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const messageI = document.getElementById('messageInput');
    const message = messageI.value;
    const userId = sessionStorage.getItem('cid');
    const it = sessionStorage.getItem('itemId');

    const data ={
        message: message,
        userId : userId,
        itemId : it
    };
    const dis = `http://localhost:8080/savemsg`;
    try {
        const response = await fetch(dis, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        messageI.value='';
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }

});

//show previosu messages
document.getElementById('openChatBtn').addEventListener('click', async function() {
    document.getElementById('chatPopup').style.display = 'block';

    try {
        const userId = sessionStorage.getItem('cid'); 
        const itemId = sessionStorage.getItem('itemId');

        const chatHistoryUrl = `http://localhost:8080/history?userId=${userId}&itemId=${itemId}`;
        const response = await fetch(chatHistoryUrl);
        
        if (response.ok) {
            const chatHistory = await response.json();
            renderChatHistory(chatHistory);
        } else {
            throw new Error('Failed to fetch chat history');
        }
    } catch (error) {
        console.error('Error fetching chat history:', error);
    }
});

function renderChatHistory(chatHistory) {
    const chatContainer = document.getElementById('chatContainer');

    chatContainer.innerHTML = '';

    chatHistory.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
    
        const messageContent = document.createElement('p');
        messageContent.textContent = message.message; 
        
        const userElement = document.createElement('p');
        userElement.textContent = `User ID: ${message.customerId}`; 

        const timestampElement = document.createElement('p');
        timestampElement.textContent = `Timestamp: ${message.createdAt}`; 

        messageElement.appendChild(messageContent);
        messageElement.appendChild(userElement);
        messageElement.appendChild(timestampElement);

        chatContainer.appendChild(messageElement);
    });
}