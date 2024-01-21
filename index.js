const putGames = function () {
    const newGame = {
        name : document.getElementById('name').value,
        description : document.getElementById('description').value,
        brand : document.getElementById('brand').value,
        imageUrl : document.getElementById('imageUrl').value,
        price: document.getElementById('price').value,
      }

      console.log(newGame)

    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: 'POST',
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


const generateCards = function (items) {
  items.forEach((newGame) => {

    console.log(newGame)
    const newCol = document.createElement('div')
    newCol.classList.add('col', 'col-12', 'col-md-4', 'col-lg-3')

    console.log(newGame._id, newGame.userId)
    newCol.innerHTML = `
        <div class="card">
            <img src="${newGame.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body bg-secondary-subtle">
                <h5 class="card-title">${newGame.name}</h5>
                <p class="card-text">Descrizione: ${newGame.description}</p>
                <p class="card-text">Marca: ${newGame.brand}</p>
                <p class="card-text">Prezzo: ${newGame.price}</p>
                <a onclick="sendDetail(this)" data-userId='${newGame._id}' class="btn btn-secondary"><i class="bi bi-cart-check me-2">Scopri di più</i></a>
                <a onclick="sendModify(this)" data-userId='${newGame._id}' class="btn btn btn-dark"><i class="bi bi-cart-check me-2">Modifica</i></a>
            </div>
        </div>
        `
    const eventsRow = document.getElementById('games-cards')

    console.log(newCol)
    eventsRow.appendChild(newCol)
  })
}

function sendModify(val) {
  const userId = val.getAttribute('data-userId');
  location.replace(document.location.origin + "/modify.html?userId=" + userId);
}

function sendDetail(val) {
  const userId = val.getAttribute('data-userId');
  location.replace(document.location.origin + "/detail.html?userId=" + userId);
}

const getGames = function (items) {
    // nella homepage useremo questo URL per fare un'operazione di GET
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMmY2MjE4N2U1YzAwMTgxNGM1ZjciLCJpYXQiOjE3MDU2NTIwNjYsImV4cCI6MTcwNjg2MTY2Nn0.8R1lU44Vc3oxqWwW0d9YYQonOcW4oZIX2cCH_UNosB0"   }
    })
    .then(response => response.json())
    .then(data => {
      generateCards(data)
    });
    }

    

    const loadButton = document.getElementById('init-load')
    loadButton.addEventListener('click', function () {
      console.log(getGames())
  })

