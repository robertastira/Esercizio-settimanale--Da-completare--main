const addressBarContent = new URLSearchParams(location.search)
const userId = addressBarContent.get('userId')
  


if (userId) {
  fetch( "https://striveschool-api.herokuapp.com/api/product/" + userId, {
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMmY2MjE4N2U1YzAwMTgxNGM1ZjciLCJpYXQiOjE3MDU2NTIwNjYsImV4cCI6MTcwNjg2MTY2Nn0.8R1lU44Vc3oxqWwW0d9YYQonOcW4oZIX2cCH_UNosB0",
      'content-type': 'application/json'   
      }
  })

    .then(response => response.json())
    .then(data => {

      const generateSingleCard = function (item) {
      
        console.log(item)
        const newCol = document.createElement('div')
        newCol.classList.add('col-12')
    
        console.log(item._id, item.userId)
        newCol.innerHTML = `
            <div class="card mt-4" style="width: 100%">
                <img src="${item.imageUrl}" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <p class="card-text">${item.brand}</p>
                    <p class="card-text">${item.price}</p>
                </div>
            </div>
            `
        const eventsRow = document.getElementById('single-card')
    
        console.log(newCol)
        eventsRow.appendChild(newCol)
      }

      generateSingleCard(data)

    });




    }