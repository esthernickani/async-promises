document.addEventListener("DOMContentLoaded", function() {
    multipleNumUl = document.querySelector('.multiple_number_facts');
    factsUl = document.querySelector('.facts_for_a_number');

    let multipleNumberFactsUrl = 'http://numbersapi.com/1,5,10,15/trivia?json'
    axios.get(multipleNumberFactsUrl)
    .then(response => {
        for (facts in response.data) {
            li = document.createElement('li');
            li.textContent = response.data[facts]
            multipleNumUl.appendChild(li)
        }
    })

    let factFor7Url = 'http://numbersapi.com/7/trivia?json'
    axios.get(factFor7Url)
    .then(response => {
        li = document.createElement('li');
        li.textContent = response.data['text']
        console.log(response.data['text'])
        factsUl.appendChild(li)
        return axios.get(factFor7Url)
    }).then(response => {
        li = document.createElement('li');
        li.textContent = response.data['text']
        console.log(response.data['text'])
        factsUl.appendChild(li)
        return axios.get(factFor7Url)
    }).then(response => {
        li = document.createElement('li');
        li.textContent = response.data['text']
        console.log(response.data['text'])
        factsUl.appendChild(li)
        return axios.get(factFor7Url)
    }).then(response => {
        li = document.createElement('li');
        li.textContent = response.data['text']
        console.log(response.data['text'])
        factsUl.appendChild(li)
        return axios.get(factFor7Url)
    })
})