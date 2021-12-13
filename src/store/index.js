import {
  createStore
} from 'vuex'

export default createStore({
  state: {

    /*   target: 2, // 0 - снижение, 1 - набор массы, 2 - поддержанеи массы
    height: 160, // 160 - 
    weight: 35, // 35 -  */

    selectedType: 'men',
    selectedAge: 18,
    selectedPregnant: null,
    selectedHeight: 170,
    selectedWeight: 60,
    selectedActivity: 1.55,
    calories: 0,

    category: [{
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

    vitamins: [
      
      {
        id: '001',
        name: 'Витамин С',
        category: {
          "men": {
            age: {
              "under60": {count: "90 мг"},
              "over60": {count: "90 мг"}
            }

          },
          "women": {
            age: {
              "under60": {count: "90 мг"},
              "over60": {count: "90 мг"}
            }
          },
          "pregnant": {
            age: {
              "under60": {
                stage: {
                  "0": {count: "90 мг"},
                  "1": {count: "90 мг"},
                  "2": {count: "100 мг"},
                  "3": {count: "120 мг"},
                  "4": {count: "120 мг"}
                }
              },
              "over60": {
                stage: {
                  "0": {count: "90 мг"},
                  "1": {count: "90 мг"},
                  "2": {count: "100 мг"},
                  "3": {count: "120 мг"},
                  "4": {count: "120 мг"}
                }
              }
            }
          }
        }
      },
      {
        id: '001',
        name: 'Витамин В1 (Тиамин)',
        category: {
          "men": {
            age: {
              "under60": {count: "1.5 мг"},
              "over60": {count: "1.5 мг"}
            }

          },
          "women": {
            age: {
              "under60": {count: "1.5 мг"},
              "over60": {count: "1.5 мг"}
            }
          },
          "pregnant": {
            age: {
              "under60": {
                stage: {
                  "0": {count: "1.5 мг"},
                  "1": {count: "1.5 мг"},
                  "2": {count: "1.7 мг"},
                  "3": {count: "1.8 мг"},
                  "4": {count: "1.8 мг"}
                }
              },
              "over60": {
                stage: {
                  "0": {count: "1.5 мг"},
                  "1": {count: "1.5 мг"},
                  "2": {count: "1.7 мг"},
                  "3": {count: "1.8 мг"},
                  "4": {count: "1.8 мг"}
                }
              },
             
            }
          }
        }
      },

    ],

    minerals: [
      {
        id: '003',
        name: 'Кальций',
        category: {
          "men": {
            age: {
              "under60": {count: "1000 мг"},
              "over60": {count: "1200 мг"}
            }

          },
          "women": {
            age: {
              "under60": {count: "1000 мг"},
              "over60": {count: "1200 мг"}
            }
          },
          "pregnant": {
            age: {
              "under60": {
                stage: {
                  "0": {count: "1000 мг"},
                  "1": {count: "1000 мг"},
                  "2": {count: "1300 мг"},
                  "3": {count: "1400 мг"},
                  "4": {count: "1400 мг"}
                }
              },
              "over60": {
                stage: {
                  "0": {count: "1200 мг"},
                  "1": {count: "1200 мг"},
                  "2": {count: "1500 мг"},
                  "3": {count: "1600 мг"},
                  "4": {count: "1600 мг"}
                }
              }
            }
          }
        }
      },
    ]


  },
  mutations: {
    calc(state, {
      type,
      age,
      pregnant
    }) {
      if (type == "men") {
        state.selectedPregnant = null
      } else {
        state.selectedPregnant = pregnant || "0"
      }
      if (pregnant && pregnant !== '0') {
        state.selectedType = "pregnant"
      } else {
        state.selectedType = type || 'men'
      }

      state.selectedAge = age || 18
    },
    formula(state, {     
      type,
      height,
      weight,
      age,
      activity
    }) {
      if (type == "men") {
        state.calories = (10*weight + 6.25*height - 5*age + 5) * activity
      } else {
        state.calories = (10*weight + 6.25*height - 5*age - 161) * activity
      }
    }
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
  actions: {},
  modules: {},
  getters: {
    getType: state => {
      return state.category.filter(i => i.main === 1)
    },
    getVitamins: state => (param) => {
      return state.vitamins
    },
    getMinerals: state => (param) => {
      return state.minerals
    },
    getCalories: state => (param) => {
      return state.calories
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
    getCurrentHeight: state => () => {
      return state.selectedHeight
    },
    getCurrentWeight: state => () => {
      return state.selectedWeight
    },
    getCurrentActivity: state => () => {
      return state.selectedActivity
    },

  }
})