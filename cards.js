  singleCardPromise =axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
  singleCardPromise.then(response =>{
    console.log(`${response.data.cards[0].value} of ${response.data.cards[0].suit}`)
    
  }).catch(error =>{
    console.log(error)
  })
  doubleCardPromise =axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
  singleCardPromise.then(response =>{
    // console.log(response.data)
    console.log(`${response.data.cards[0].value} of ${response.data.cards[0].suit}`)
    let deckId=response.data.deck_id;
    return axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  }).then(response =>{
    console.log(`${response.data.cards[0].value} of ${response.data.cards[0].suit}`)
  })
  .catch(error =>{
    console.log(error)
  })

  let deckId;
  let btn= $('.button')
  let textarea =$('#card-area')
  let imagesrc = $('.ImageSrc')
newDeckPromise =axios.get('https://deckofcardsapi.com/api/deck/new/')
newDeckPromise.then(response =>{
  deckId = response.data.deck_id;
  console.log('new deck')
  console.log("new deck id", deckId)
}).catch(error =>{
  console.log(error)
})

function clickButton() {
  drawPromise=axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  drawPromise.then(response =>{
    console.log('new draw')
    console.log(response.data.cards[0].images.png)
    document.getElementById("imageid").src = response.data.cards[0].image
  })
}