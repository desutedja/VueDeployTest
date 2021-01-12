import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
      AccountType: null,
      Currency: null,
      Deposit: '',
      Birthday: '',
      Password: '',
      Password2: '',
      checked: [],
      BankName: null,
      AccountName: '',
      BranchName: '',
      AccountNo: '',
      PhoneNumber: '',
      SavingType: null
    },
    mutations: {
      setAccountType (state, payload) {
        state.AccountType = payload.AccountType
      },
      setCurrency (state, payload) {
        state.Currency = payload.Currency
      },
      setDeposit (state, payload) {
        state.Deposit = payload.Deposit
      },
      setBirthday (state, payload) {
        state.Birthday = payload.Birthday
      },
      setPassword (state, payload) {
        state.Password = payload.Password
      },
      setPassword2 (state, payload) {
        state.Password2 = payload.Password2
      },
      setchecked (state, payload) {
        state.checked = payload.checked
      },
      setBankName (state, payload) {
        state.BankName = payload.BankName
      },
      setAccountName (state, payload) {
        state.AccountName = payload.AccountName
      },
      setBranchName (state, payload) {
        state.BranchName = payload.BranchName
      },
      setAccountNo (state, payload) {
        state.AccountNo = payload.AccountNo
      },
      setPhoneNumber (state, payload) {
        state.PhoneNumber = payload.PhoneNumber
      },
      setSavingType (state, payload) {
        state.SavingType = payload.SavingType
      }
    }
  }
)
