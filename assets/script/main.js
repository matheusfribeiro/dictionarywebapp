import {header} from "./header.js"

const Main = {

  init: function () {
    this.cacheSelectors()
    this.bindEvents()
    this.urlcheck()
    
  },

  cacheSelectors: function () {
    this.wordInput = document.querySelector('#wordInput')
    this.mainWord = document.querySelector('#mainWord')
    this.phonetics = document.querySelector('#phonetics')
    this.meaningInfo = document.querySelector('#meaning-info')
    this.playSound = document.querySelector('#playSound')
    this.footer = document.querySelector("#footer")
    this.myURL = new URL(window.location.href)

  },

  bindEvents: function() {
    this.wordInput.addEventListener('keypress', this.Events.searchWord_input.bind(this))
    this.playSound.addEventListener('click', this.Events.playSound_click.bind(this))
    
  },

  Events: {
    searchWord_input: function(e) {
      const key = e.key
      
      if (key == 'Enter' && (!wordInput.value)) {
        alert('You must type a word!')
      } 

      if (key == 'Enter' && (wordInput.value)) {
        this.meaningInfo.innerText = null

        this.DIC().then(data => {
          const word = data[0]
          if (word == undefined) {
            alert('Mind your spelling!!!')
            return
          } else {

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

              if (header.darkbox.checked) {
                ul.setAttribute("class", "dark-mode")
                verbnoun.setAttribute("class", "dark-mode")
              }

              for (let i = 0; i < item.definitions.length; i++){
                const li = document.createElement("li")
                const textNodeli = document.createTextNode(item.definitions[i].definition)
                li.appendChild(textNodeli)
                ul.appendChild(li)
                this.meaningInfo.appendChild(ul)
                
              }
            })
            footer.style.position = "relative"
            this.playSound.style.display = "block"
          }

          console.log(window.location.href)
          this.myURL.hash = word.word
          history.pushState({}, "",  this.myURL.hash)
          console.log(this.myURL)
        })
      }
    },

    playSound_click: function (e) {
      

      if (wordInput.value) {

        this.DIC().then(data => {
          if(data[0].phonetics[0].audio) {
            
            const audio = new Audio(data[0].phonetics[0].audio)
            audio.play()
            
          } else {
            alert('No audio available')
          }
        })
      } else {
        alert('You must type a word!')
      }
    }

  },

  urlcheck: function () {
    
    if (this.myURL.hash) {
      console.log(this.myURL.hash)
      const hashUpdate = window.location.hash.substring(1)
      console.log(hashUpdate)
      
      this.meaningInfo.innerText = null

      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${hashUpdate}`)
        .then(response => response.json())
        .then(data => {
          const word = data[0]
          if (word == undefined) {
            alert('Mind your spelling!!!')
            return
          } else {

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

              if (header.darkbox.checked) {
                ul.setAttribute("class", "dark-mode")
                verbnoun.setAttribute("class", "dark-mode")
              }

              for (let i = 0; i < item.definitions.length; i++){
                const li = document.createElement("li")
                const textNodeli = document.createTextNode(item.definitions[i].definition)
                li.appendChild(textNodeli)
                ul.appendChild(li)
                this.meaningInfo.appendChild(ul)
                
              }
            })

            footer.style.position = "relative"
            this.playSound.style.display = "block"
          }

        })
    }
  },

  DIC: function () {

    return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput.value}`)
      .then(response => response.json())
      .catch(function () {
        
      })
    
  },
}

Main.init()
header.init()