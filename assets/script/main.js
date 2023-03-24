
const Main = {

  init: function () {
    this.cacheSelectors()
    this.bindEvents()
    
  },

  cacheSelectors: function () {
    this.wordInput = document.querySelector('#wordInput')
    this.mainWord = document.querySelector('#mainWord')
    this.phonetics = document.querySelector('#phonetics')
    this.meaningInfo = document.querySelector('#meaning-info')
    
    

  },

  bindEvents: function() {
    this.wordInput.addEventListener('keypress', this.Events.searchWord_input.bind(this))
    
  },

  Events: {
    searchWord_input: function(e) {
      const key = e.key
      

      if (key == 'Enter') {
        this.meaningInfo.innerText = null

        this.DIC().then(data => {
          const word = data[0]
          console.log(word)
          mainWord.innerText = word.word
          if (word.phonetic){
            phonetics.innerText = word.phonetic
          } else if (word.phonetics[1] == undefined) {
            phonetics.innerText = 'No phonetics available'
          } else {
            phonetics.innerText = word.phonetics[1].text
          }
          
          

          

          word.meanings.forEach((item) => {
            const verbnoun = document.createElement("h4")
            const span = document.createElement("span")
            const ul = document.createElement("ul")
            const textNodevn = document.createTextNode(item.partOfSpeech)
            verbnoun.appendChild(textNodevn)
            span.innerText = "Meaning:"
            this.meaningInfo.appendChild(verbnoun)
            this.meaningInfo.appendChild(span)

            for (let i = 0; i < item.definitions.length; i++){
              const li = document.createElement("li")
              const textNodeli = document.createTextNode(item.definitions[i].definition)
              li.appendChild(textNodeli)
              ul.appendChild(li)
              this.meaningInfo.appendChild(ul)
                            
            }
          })

          //console.log(data)
        })
      }
    }

  },

  DIC: function () {

    return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput.value}`)
      .then(response => response.json())
      .catch(function () {
        alert('ERROR!!!')
      })
    
  },

}

Main.init()