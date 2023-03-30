

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
        document.body.classList.add("dark-mode")
        this.iconBook.classList.add("dark-mode")
        this.iconMoon.classList.add("dark-mode")
        this.iconPlay.classList.add("dark-mode")
        this.mainWord.classList.add("dark-mode")
        this.phonetics.classList.add("dark-mode")
        this.meaningInfo.classList.add("dark-mode")
        this.wordInfo.classList.add("dark-mode")

        for (let i = 0; i < this.ul.length; i++) {
          let element = this.ul[i]
          element.classList.add("dark-mode")
        }
        for (let i = 0; i < this.h4.length; i++) {
          let element = this.h4[i]
          element.classList.add("dark-mode")
        }
      } else if (!darkbox.checked) {
        document.body.classList.remove("dark-mode")
        this.iconBook.classList.remove("dark-mode")
        this.iconMoon.classList.remove("dark-mode")
        this.iconPlay.classList.remove("dark-mode")
        this.mainWord.classList.remove("dark-mode")
        this.phonetics.classList.remove("dark-mode")
        this.meaningInfo.classList.remove("dark-mode")
        this.wordInfo.classList.remove("dark-mode")
        
        for (let i = 0; i < this.ul.length; i++) {
          let element = this.ul[i]
          element.classList.remove("dark-mode")
        }
        for (let i = 0; i < this.h4.length; i++) {
          let element = this.h4[i]
          element.classList.remove("dark-mode")
        }
      }

    }
  },
  
  



}



