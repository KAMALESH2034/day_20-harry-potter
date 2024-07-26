

const container = document.getElementsByClassName("container")[0];

function hpCards() {
  const url = "https://hp-api.onrender.com/api/characters";

  
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((hp) => {
     
     
      hp.forEach((element) => {
     

        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("style", "width: 19rem;");
        card.innerHTML += `
              <div class="card-img">
                  <img class="card-img-top" src="${element.image}" alt="image unavailable" >
                  </div>
                <div class="card-body">
                
                  <p class="card-text" style="font-family: Century Gothic;"> Character Name : <span style="color: #740001">${element.name}</span></p>
                  <p class="card-text" style="font-family: Century Gothic;">House :<span style="color: #740001"> ${element.house} </span> </p>
                  <p class="card-text" style="font-family: Century Gothic;"> D.O.B : <span style="color: #740001">${element.dateOfBirth} </span> </p>
                   <p class="card-text" style="font-family: Century Gothic;"> Patronus: <span style="color: #740001">${element.patronus} </span> </p>
                  <p class="card-text" style="font-family: Century Gothic;"> Gender: <span style="color: #740001">${element.gender} </span> </p>
                  </div>`;
                  
        container.append(card);
      });
    }).catch((error)=>console.log(error))
}

hpCards();