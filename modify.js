const addressBarContent = new URLSearchParams(location.search)
const userId = addressBarContent.get('userId')
  
if (userId) {
  fetch( "https://striveschool-api.herokuapp.com/api/product/" + userId, {
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMmY2MjE4N2U1YzAwMTgxNGM1ZjciLCJpYXQiOjE3MDU2NTIwNjYsImV4cCI6MTcwNjg2MTY2Nn0.8R1lU44Vc3oxqWwW0d9YYQonOcW4oZIX2cCH_UNosB0",
      'content-type': 'application/json'   
      }
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(
          "Non sono riuscito a recuperare l'evento per modificare il form"
        )
      }
    })
    .then((newGame) => {
      document.getElementById('name').value = newGame.name
      document.getElementById('description').value = newGame.description
      document.getElementById('brand').value = newGame.brand
      document.getElementById('imageUrl').value = newGame.imageUrl
      document.getElementById('price').value = newGame.price
    })
    .catch((err) => {
      console.log(err)
    })
}


const putGames = function () {
  const newGame = {
      name : document.getElementById('name').value,
      description : document.getElementById('description').value,
      brand : document.getElementById('brand').value,
      imageUrl : document.getElementById('imageUrl').value,
      price: document.getElementById('price').value,
    }

    console.log(newGame)

  fetch("https://striveschool-api.herokuapp.com/api/product/" + userId, {
      method: 'PUT',
      headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMmY2MjE4N2U1YzAwMTgxNGM1ZjciLCJpYXQiOjE3MDU2NTIwNjYsImV4cCI6MTcwNjg2MTY2Nn0.8R1lU44Vc3oxqWwW0d9YYQonOcW4oZIX2cCH_UNosB0",
      'content-type': 'application/json'   
      },
      body: JSON.stringify(newGame)
  }) 
  .then((response) => {
    console.log(response)
    if (response.ok) {
      alert('SALVATO!')

    } else {
      alert('PROBLEMA NEL SALVATAGGIO!')
    }
  })
  .catch((err) => {
    console.log(err)
  })
}