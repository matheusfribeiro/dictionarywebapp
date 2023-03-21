
const Main = {

  init: function () {
    this.cacheSelectors()
    this.bindEvents()
    
  },

  cacheSelectors: function () {
    this.wordInput = document.querySelector('#wordInput')
    this.mainWord = document.querySelector('#mainWord')
    

  },

  bindEvents: function() {
    this.wordInput.addEventListener('input', this.Events.searchWord_input.bind(this))
    
  },

  Events: {
    searchWord_input: function() {
      this.API(data)
      console.log(data)


      
      
    }

  },

  API: function () {
    if (wordInput.value) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput.value}`)
        .then(response => response.json())
        .then(searchWord_input)
        .catch(function () {
          alert('ERROR!!!')
        })
    }
    
  },

}

Main.init()