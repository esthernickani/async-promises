document.addEventListener('DOMContentLoaded', function() {
    let shuffleCardsUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    cardsArr = []

    axios.get(shuffleCardsUrl)
    .then(response => {
        let getCardUrl = `https://deckofcardsapi.com/api/deck/${response.data.deck_id}/draw/?count=1`
        return axios.get(getCardUrl)
    }).then(response => {
        cardsArr.push({
            'value': response.data.cards[0].value, 
            'suit' : response.data.cards[0].suit
        })
        let getCardUrl = `https://deckofcardsapi.com/api/deck/${response.data.deck_id}/draw/?count=1`
        return axios.get(getCardUrl)
    }).then(response => {
        cardsArr.push({
            'value': response.data.cards[0].value, 
            'suit' : response.data.cards[0].suit
        })

        cardsArr.forEach(card => {
            console.log(`${card.value} of ${card.suit}`)
        })
    })

    const btn = document.querySelector('button')
    const cardContainer = document.querySelector('.cards')
    const cardFinishContainer = document.querySelector('.cards_finished')
    
    let deckId = null;

    axios.get(shuffleCardsUrl)
    .then(response => {
        deckId = response.data.deck_id;
        console.log(deckId)
        btn.classList.remove('hidden')                                                            
    })


    btn.addEventListener('click', function(e) {
        e.preventDefault();
        axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then(response => {
            
            let cardImage = new Image()
            cardImage.src = response.data.cards[0].image
            cardContainer.appendChild(cardImage)

            if (response.data.remaining == 0) {
                btn.classList.add('hidden');
                cardFinishContainer.classList.remove('hidden');
            }
        })
    })
   
})
    