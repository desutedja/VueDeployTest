import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
      // Personal 1
      FullName: '',
      DateOfBirth: '',
      TypeOfIdentity: '',
      IdentityNo: '',
      Sex: '',
      MotherName: '',
      Status: null,

      // Personal 2
      Address: '',
      Country: null,
      Province: 0,
      District: 0,
      SubDistrict: 0,
      Village: 0,
      PostalCode: '',
      PhoneNo: '',
      FaxNo: '',
      SmartPhoneNo: '',
      TaxNo: '',
      Home: null,

      // Personal 3
      Purpose: null,
      Funds: null,
      InvestmentExperience: '',
      terms1: '',
      terms2: '',

      // Job Detail
      Job: null,
      Salary: null,
      Company: '',
      BusinessField: '',
      Position: '',
      Experience: '',
      Experience2: '',
      CompanyAddress: '',
      CompanyPosCode: '',
      CompanyPhoneNo: '',
      CompanyFaxNo: '',

      // Asset Information
      HomeLocation: '',
      HomeValue: '',
      Deposito: '',
      Total: '',
      OtherAssets: '',

      // Emergency Contact
      EmergencyName: '',
      EmergencyAddress: '',
      EmergencyPos: '',
      EmergencyNumber: '',
      EmergencyStatus: '',

      // Bank Information
      BankName: null,
      AccountName: '',
      BranchName: '',
      AccountNo: '',
      PhoneNumber: '',
      SavingType: null,

      // Document
      SelfieWithID: null,
      PhotoID: null,
      OtherDocument: null,
      imgSelfieWithID: require('@/assets/upload images.jpeg'),

      // Aggreement
      AgreementProfile: 'Yes',

      // other
      AccountType: null,
      Currency: null,
      Deposit: '',
      Birthday: '',
      Password: '',
      Password2: '',
      checked: []
    },
    mutations: {
      // Personal 1
      setFullName (state, payload) { state.FullName = payload.FullName },
      setDateOfBirth (state, payload) { state.DateOfBirth = payload.DateOfBirth },
      setTypeOfIdentity (state, payload) { state.TypeOfIdentity = payload.TypeOfIdentity },
      setIdentityNo (state, payload) { state.IdentityNo = payload.IdentityNo },
      setSex (state, payload) { state.Sex = payload.Sex },
      setMotherName (state, payload) { state.MotherName = payload.MotherName },
      setStatus (state, payload) { state.Status = payload.Status },

      // Personal 2
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
      setTaxNo (state, payload) { state.TaxNo = payload.TaxNo },
      setHome (state, payload) { state.Home = payload.Home },

      // Personal 3
      setPurpose (state, payload) { state.Purpose = payload.Purpose },
      setFunds (state, payload) { state.Funds = payload.Funds },
      setInvestmentExperience (state, payload) { state.InvestmentExperience = payload.InvestmentExperience },
      setterms1 (state, payload) { state.terms1 = payload.terms1 },
      setterms2 (state, payload) { state.terms2 = payload.terms2 },

      // Job Detail
      setJob (state, payload) { state.Job = payload.Job },
      setSalary (state, payload) { state.Salary = payload.Salary },
      setCompany (state, payload) { state.Company = payload.Company },
      setBusinessField (state, payload) { state.BusinessField = payload.BusinessField },
      setPosition (state, payload) { state.Position = payload.Position },
      setExperience (state, payload) { state.Experience = payload.Experience },
      setExperience2 (state, payload) { state.Experience2 = payload.Experience2 },
      setCompanyAddress (state, payload) { state.CompanyAddress = payload.CompanyAddress },
      setCompanyPosCode (state, payload) { state.CompanyPosCode = payload.CompanyPosCode },
      setCompanyPhoneNo (state, payload) { state.CompanyPhoneNo = payload.CompanyPhoneNo },
      setCompanyFaxNo (state, payload) { state.CompanyFaxNo = payload.CompanyFaxNo },

      // Asset
      setHomeLocation (state, payload) { state.HomeLocation = payload.HomeLocation },
      setHomeValue (state, payload) { state.HomeValue = payload.HomeValue },
      setDeposito (state, payload) { state.Deposito = payload.Deposito },
      setTotal (state, payload) { state.Total = payload.Total },
      setOtherAssets (state, payload) { state.OtherAssets = payload.OtherAssets },

      // Emergency Contact
      setEmergencyName (state, payload) { state.EmergencyName = payload.EmergencyName },
      setEmergencyAddress (state, payload) { state.EmergencyAddress = payload.EmergencyAddress },
      setEmergencyPos (state, payload) { state.EmergencyPos = payload.EmergencyPos },
      setEmergencyNumber (state, payload) { state.EmergencyNumber = payload.EmergencyNumber },
      setEmergencyStatus (state, payload) { state.EmergencyStatus = payload.EmergencyStatus },

      // Bank
      setBankName (state, payload) { state.BankName = payload.BankName },
      setAccountName (state, payload) { state.AccountName = payload.AccountName },
      setBranchName (state, payload) { state.BranchName = payload.BranchName },
      setAccountNo (state, payload) { state.AccountNo = payload.AccountNo },
      setPhoneNumber (state, payload) { state.PhoneNumber = payload.PhoneNumber },
      setSavingType (state, payload) { state.SavingType = payload.SavingType },

      // Document
      setSelfieWithID (state, payload) { state.SelfieWithID = payload.SelfieWithID },
      setPhotoID (state, payload) { state.PhotoID = payload.PhotoID },
      setOtherDocument (state, payload) { state.OtherDocument = payload.OtherDocument },
      setimgSelfieWithID (state, payload) { state.imgSelfieWithID = payload.imgSelfieWithID },

      // Agreement
      setAgreementProfile (state, payload) { state.AgreementProfile = payload.AgreementProfile },

      // other
      setAccountType (state, payload) { state.AccountType = payload.AccountType },
      setCurrency (state, payload) { state.Currency = payload.Currency },
      setDeposit (state, payload) { state.Deposit = payload.Deposit },
      setBirthday (state, payload) { state.Birthday = payload.Birthday },
      setPassword (state, payload) { state.Password = payload.Password },
      setPassword2 (state, payload) { state.Password2 = payload.Password2 },
      setchecked (state, payload) { state.checked = payload.checked }
    }
  }
)
