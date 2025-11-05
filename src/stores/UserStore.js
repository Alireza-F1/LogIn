import { defineStore } from 'pinia'

export const useUserData = defineStore('userData', {
  state: () => ({
    // We will store the current user data in the following variables
    currentUserPhone: '',
    currentUserEmail: '',
    currentUserPass: '',
    currentLatLang: '',

    // We will store all of the users data in the following variables
    // They're like our database
    userPhones: [],
    userEmails: [],
    userPasswords: [],
    isLoggedIn: false,
    userLatLang: [],
  }),

  getters: {
    isUserLoggedIn() {
      return this.isLoggedIn
    },

    getUserLatLang() {
      return this.currentLatLang
    }
  },

  actions: {
    loadFromLocalStorage() {
      const storedData = localStorage.getItem('userStore')
      if (storedData) {
        this.$patch(JSON.parse(storedData))
      }
    },

    saveToLocalStorage() {
      localStorage.setItem('userStore', JSON.stringify(this.$state))
    },

    setUser(phone, email, pass) {
      this.userPhones.push(phone)
      this.userEmails.push(email)
      this.userPasswords.push(pass)
      this.userLatLang.push(false)

      this.saveToLocalStorage();
      this.logInUser(phone, email, pass)
    },

    logInUser(phone, email, pass) {
      for (let i = 0; i < this.userPhones.length; i++) {
        if (
          this.userPhones[i] === phone &&
          this.userPasswords[i] === pass &&
          this.userEmails[i] == email
        ) {
          this.isLoggedIn = true

          this.currentLatLang = this.userLatLang[i]
          this.currentUserEmail = this.userEmails[i]
          this.currentUserPass = this.userPasswords[i]
          this.currentUserPhone = this.userPhones[i]

          this.saveToLocalStorage();  
          break
        }
      }
    },

    logInToggle() {
      this.isLoggedIn = !this.isLoggedIn
      this.saveToLocalStorage();
    },

    setUserLatLang(latLng) {
      this.currentLatLang = latLng
      const index = this.userPhones.indexOf(this.currentUserPhone)
      this.userLatLang[index] = latLng

      this.saveToLocalStorage();
    },
  },
})
