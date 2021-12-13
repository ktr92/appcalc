import { createStore } from 'vuex'

export default createStore({
  state: {
   
     /*   target: 2, // 0 - снижение, 1 - набор массы, 2 - поддержанеи массы
    height: 160, // 160 - 
    weight: 35, // 35 -  */

    selectedType: 'men',
    selectedAge: 18,
    selectedPregnant: null,

    category: [
      {
        type: 'men', // мужчины
        label: 'Мужчина',
        main: 1
      },
      {
        type: 'women', // женщины
        label: 'Женщина',
        main: 1
      },
      {
        type: 'pregnant', // берем. женщины      
        label: 'Беременность',
        main: 0
      }
    ],

    results: [
     /*  {
        id: '001',
        name: 'Селен',
        category: {
          "men": {
            count: 70
          },
          "women": {
            count: 55
          }
        }
      },
      {
        id: '002',
        name: 'Витамин С',
        category: {
          "men": {
            count: 90
          },
          "women": {
            count: 11
          }
        }
      }, */
      {
        id: '003',
        name: 'Кальций',
        category: {
          "men": {
            age: {
              "under60": {
                count: 1000
              },
              "over60": {
                count: 1200
              }
            }
            
          },
          "women": {
            age: {
              "under60": {
                count: 999
              },
              "over60": {
                count: 1199
              }
            }
          },
          "pregnant": {
            age: {
              "under60": {
                stage: {
                  "0": {
                    count: 1000
                  },
                  "1": {
                    count: 1000
                  },
                  "2": {
                    count: 1300
                  },
                  "3": {
                    count: 1400
                  }, 
                  "4": {
                    count: 1400  
                  }
                }
              },
              "over60": {
                stage: {
                  "0": {
                    count: 1200
                  },
                  "1": {
                    count: 1200
                  },
                  "2": {
                    count: 1500
                  },
                  "3": {
                    count: 1600
                  }, 
                  "4": {
                    count: 1600  
                  }
                }
              }
            }
          }
        }
      }
    ]


  },
  mutations: {
    calc(state, {
      type,
      age,
      pregnant })
      {
        if (type == "men") {
          state.selectedPregnant = null
        }
        else {
          state.selectedPregnant = pregnant || "0"
        }
        if (pregnant && pregnant !== '0') {
          state.selectedType = "pregnant"
        } else {
          state.selectedType = type || 'men'
        }
        
        state.selectedAge = age || 18
    },
   /*  calcResults(state, payload) {   
      state.selectedType = payload || 'men'
    },
    calcResultsAge(state, payload) {
      state.selectedAge = payload || 18
    },
    calcResultsPregnant(state, payload) {
      state.selectedType = "pregnant"
      state.selectedPregnant = payload || "0"
    } */
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getType: state => {
      return state.category.filter(i => i.main === 1)
    },
    getResults: state => (param) => {
      return state.results
    },
    
    getSelectedType: state => () => {
      return state.selectedType
    },
    getIsWomen: state => () => {
      return (state.selectedType == "women") || (state.selectedType == "pregnant") ? 1 : 0
    },
    
    getSelectedAge: state => () => {
      return state.selectedAge > 60 ? "over60" : "under60"
    },
    getCurrentAge: state => () => {
      return state.selectedAge
    },
    getSelectedPregnant: state => () => {
      return state.selectedPregnant
    },
    
    
  }
})
