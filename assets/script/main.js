
const Main = {

  init: function () {
    this.cacheSelectors()
    this.bindEvents()
    
  },

  cacheSelectors: function () {
    this.wordInput = document.querySelector('#wordInput')
    this.mainWord = document.querySelector('#mainWord')
    this.phonetics = document.querySelector('#phonetics')
    

  },

  bindEvents: function() {
    this.wordInput.addEventListener('input', this.Events.searchWord_input.bind(this))
    
  },

  Events: {
    searchWord_input: function(e) {
      this.API().then(data => {
        mainWord.innerText = data[0].word
        phonetics.innerText = data[0].phonetics[0].text
        //console.log(data[0].phonetics[0].text)
      })
    }

  },

  API: function () {

    return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput.value}`)
      .then(response => response.json())
      .catch(function () {
        alert('ERROR!!!')
      })
    
  },

}

Main.init()