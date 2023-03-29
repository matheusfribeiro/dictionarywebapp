

export const header = {

  init: function() {
    this.cacheSelectors()
    this.bindEvents()
  },

  cacheSelectors: function () {
    this.select = document.querySelector("#selector")
    this.darkbox = document.querySelector("#darkbox")
    this.container = document.querySelector(".container")
    this.iconBook = document.querySelector('.fa-book')
    this.iconMoon = document.querySelector('.fa-moon')
    this.iconPlay = document.querySelector('.fa-circle-play')
    this.mainWord = document.querySelector('#mainWord')
    this.phonetics = document.querySelector('#phonetics')
    this.meaningInfo = document.querySelector('#meaning-info')
    this.wordInfo = document.querySelector('.word-info')
    this.ul = document.getElementsByTagName("ul")
    this.h4 = document.getElementsByTagName("h4")
    
  },

  bindEvents: function () {
    this.select.addEventListener('change', this.Events.select_change)
    this.darkbox.addEventListener('click', this.Events.darkmode_checked.bind(this))
    
  },

  Events: {
    select_change: function () {
      const val = this.value

      if (val == 'sans-serif') {

        document.body.style.fontFamily = 'sans-serif'
      } else if (val == 'serif') {
        document.body.style.fontFamily = 'serif'
      }
    },

    darkmode_checked: function () {
      
      if (darkbox.checked) { 
        document.body.classList.toggle("dark-mode")
        this.iconBook.classList.toggle("dark-mode")
        this.iconMoon.classList.toggle("dark-mode")
        this.iconPlay.classList.toggle("dark-mode")
        this.mainWord.classList.toggle("dark-mode")
        this.phonetics.classList.toggle("dark-mode")
        this.meaningInfo.classList.toggle("dark-mode")
        this.wordInfo.classList.toggle("dark-mode")

        for (let i = 0; i < this.ul.length; i++) {
          let element = this.ul[i]
          element.style.color = "rgb(212, 224, 155)"
          }
        for (let i = 0; i < this.h4.length; i++) {
          let element = this.h4[i]
          element.style.color = "rgb(212, 224, 155)"
          }
      } else if (!darkbox.checked) {
        document.body.classList.toggle("dark-mode")
        this.iconBook.classList.toggle("dark-mode")
        this.iconMoon.classList.toggle("dark-mode")
        this.iconPlay.classList.toggle("dark-mode")
        this.mainWord.classList.toggle("dark-mode")
        this.phonetics.classList.toggle("dark-mode")
        this.meaningInfo.classList.toggle("dark-mode")
        this.wordInfo.classList.toggle("dark-mode")
        
        for (let i = 0; i < this.ul.length; i++) {
          let element = this.ul[i]
          element.style.color = "black"
          }
        for (let i = 0; i < this.h4.length; i++) {
          let element = this.h4[i]
          element.style.color = "black"
          }
      }

    }
  },
  
  



}



