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

    // By default is false (because this feature is considered as a optional feature)
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
      // Save user's data to database
      this.userPhones.push(phone)
      this.userEmails.push(email)
      this.userPasswords.push(pass)
      this.userLatLang.push(false)

      // After signing up, users will automatically head to login section
      // We did this because of the code integrity (otherwise we need had redundancy)
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
      // We need to find the user's index to replace their location (by default
      // is False)
      const index = this.userPhones.indexOf(this.currentUserPhone)
      this.userLatLang[index] = latLng

      this.saveToLocalStorage();
    },
  },
})
