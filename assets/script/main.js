
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

        this.DIC().then(data => {
          const word = data[0]
          mainWord.innerText = word.word
          phonetics.innerText = word.phonetic

          for (let meaning of word.meanings) {
            let i = 0
            this.meaningInfo.innerHTML += `
              <hr>
              <h4>${meaning.partOfSpeech}</h4>
              <span>Meaning:</span>
              <ul>
                <li>${meaning.definitions[i].definition}</li>
              </ul>
            `
            i++
          }
          
          /*
          for (let i = 0; i < data[0].meanings.length; i++) {
            const meaning = document.createElement("span")
            const meaningNode = document.createTextNode(data[0].meanings[i].partOfSpeech)

            meaning.appendChild(meaningNode)
            this.wordSection.append(meaning)


            const definition = document.createElement("li")
            const definitionNode = document.createTextNode(data[0].meanings[i].definitions[i].definition)
            definition.appendChild(definitionNode)
            this.deflist.appendChild(definition)

            console.log(data[0].meanings[i].definitions[i])
  
            
          }
          */
          

          console.log(data)
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