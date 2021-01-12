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
      SavingType: null,
      FullName: '',
      DateOfBirth: '',
      TypeOfIdentity: '',
      IdentityNo: '',
      Sex: '',
      Address: '',
      Country: null,
      Province: 0,
      District: 0
    },
    mutations: {
      setAccountType (state, payload) { state.AccountType = payload.AccountType },
      setCurrency (state, payload) { state.Currency = payload.Currency },
      setDeposit (state, payload) { state.Deposit = payload.Deposit },
      setBirthday (state, payload) { state.Birthday = payload.Birthday },
      setPassword (state, payload) { state.Password = payload.Password },
      setPassword2 (state, payload) { state.Password2 = payload.Password2 },
      setchecked (state, payload) { state.checked = payload.checked },
      setBankName (state, payload) { state.BankName = payload.BankName },
      setAccountName (state, payload) { state.AccountName = payload.AccountName },
      setBranchName (state, payload) { state.BranchName = payload.BranchName },
      setAccountNo (state, payload) { state.AccountNo = payload.AccountNo },
      setPhoneNumber (state, payload) { state.PhoneNumber = payload.PhoneNumber },
      setSavingType (state, payload) { state.SavingType = payload.SavingType },
      setFullName (state, payload) { state.FullName = payload.FullName },
      setDateOfBirth (state, payload) { state.DateOfBirth = payload.DateOfBirth },
      setTypeOfIdentity (state, payload) { state.TypeOfIdentity = payload.TypeOfIdentity },
      setIdentityNo (state, payload) { state.IdentityNo = payload.IdentityNo },
      setSex (state, payload) { state.Sex = payload.Sex },
      setAddress (state, payload) { state.Address = payload.Address },
      setCountry (state, payload) { state.Country = payload.Country },
      setProvince (state, payload) { state.Province = payload.Province },
      setDistrict (state, payload) { state.District = payload.District },
      setSubDistrict (state, payload) { state.SubDistrict = payload.SubDistrict },
      setVillage (state, payload) { state.Village = payload.Village },
      setPostalCode (state, payload) { state.PostalCode = payload.PostalCode },
      setPhoneNo (state, payload) { state.PhoneNo = payload.PhoneNo },
      setFaxNo (state, payload) { state.FaxNo = payload.FaxNo },
      setSmartPhoneNo (state, payload) { state.SmartPhoneNo = payload.SmartPhoneNo },
      setHome (state, payload) { state.Home = payload.Home }
    }
  }
)
