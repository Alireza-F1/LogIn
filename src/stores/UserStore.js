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
    userLatLang: [],

  }),

  getters: {
    isUserLoggedIn() {
      if (this.currentUserPhone){
        return true
      }
      return false
    },

    getUserLatLang() {
      return this.currentLatLang
    },
  },

  actions: {
    loadAllDataFromLocalStorage() {
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
      this.saveToLocalStorage()
      this.logInUser(phone, pass)
    },

    logInUser(phone, pass) {
      const index_phone = this.userPhones.indexOf(phone)
      const index_pass = this.userPasswords.indexOf(pass)

      if (index_phone === index_pass) {
        this.isLoggedIn = true

        this.currentLatLang = this.userLatLang[index_phone]
        this.currentUserEmail = this.userEmails[index_phone]
        this.currentUserPass = this.userPasswords[index_phone]
        this.currentUserPhone = this.userPhones[index_phone]

        this.saveToLocalStorage()
      }
    },

    logout() {
      this.currentUserEmail = ''
      this.currentUserPass = ''
      this.currentUserPhone = ''
      this.currentLatLang = false
      this.saveToLocalStorage()
    },

    setUserLatLang(latLng) {
      this.currentLatLang = latLng
      // We need to find the user's index to replace their location (by default
      // is False)
      const index = this.userPhones.indexOf(this.currentUserPhone)
      this.userLatLang[index] = latLng

      this.saveToLocalStorage()
    },
  },
})
