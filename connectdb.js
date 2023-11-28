
const hostelType = 'A'; // Replace with the actual hostel type you want to check
//to search items
console.log('atleast it started');
const a = document.getElementById('bs');
if(a){console.log('fhhfhf');}
else{console.log('dggdh');}
a.addEventListener('click', async () => {
    const searchInput = document.getElementById('s').value.trim();
    console.log('Search Input:', searchInput);
    const searchUrl = `http://localhost:8080/dets?name=${encodeURIComponent(searchInput)}`;

    try {
        const response = await fetch(searchUrl);
        if (response.ok) {
            const searchResults = await response.json();
            displaySearchResults(searchResults);
        } else {
            console.error('Failed to fetch search results');
        }
    } catch (error) {
        console.error('Error fetching search results:', error);
    }
    });
function displaySearchResults(results) {
        const searchResultsContainer = document.getElementById('list1');
        searchResultsContainer.innerHTML = '';
    
        results.forEach(item => {
            /*const l = document.getElementById('list1');*/
              const productCard = document.createElement('a');
              productCard.href = `itemDetails.html?name=${encodeURIComponent(item.name)}`;
              productCard.className = 'product';
              productCard.innerHTML = `
                  <h2>${item.name}</h2>
                  <p>Description: ${item.description}</p>
                  <p>Price:Rs ${item.price}</p>
              `;
              searchResultsContainer.appendChild(productCard);
          });
}

    //to show items
const apiUrl = `http://localhost:8080/items`;
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
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


















/*
//for searching item by name
document.addEventListener('DOMContentLoaded', () => {
    console.log('atleast it started');
    const a = document.getElementById('bs');
    a.addEventListener('click', async () => {
    const searchInput = document.getElementById('s').value.trim();
    console.log('Search Input:', searchInput);
    const searchUrl = `http://localhost:8080/dets/?name=${encodeURIComponent(searchInput)}`;

    try {
        const response = await fetch(searchUrl);
        if (response.ok) {
            const searchResults = await response.json();
            displaySearchResults(searchResults);
        } else {
            console.error('Failed to fetch search results');
        }
    } catch (error) {
        console.error('Error fetching search results:', error);
    }
    })
});

function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('list1');
    searchResultsContainer.innerHTML = '';

    results.forEach(item => {
        /*const l = document.getElementById('list1');
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
}
*/



