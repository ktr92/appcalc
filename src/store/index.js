import { createStore } from 'vuex'

export default createStore({
  state: {
    type: ['men', 'women', 'pregnant'], // 0 - мужчины, 1 - женщины, 2 - берем. женщины
    activity: 1, // 1-5
    age: '1829', // 18-29, 30-39, ... , > 60

     /*   target: 2, // 0 - снижение, 1 - набор массы, 2 - поддержанеи массы
    height: 160, // 160 - 
    weight: 35, // 35 -  */

    selectedType: '',

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
        type: 'pregnant', // берем женщины      
        main: 0
      }
    ],

    results: [
      {
        id: '001',
        name: 'Селен',
        category: {
          men: {
            count: 70
          },
          women: {
            count: 55
          }
        }
      },
      {
        id: '002',
        name: 'Витамин С',
        category: {
          men: {
            count: 90
          },
          women: {
            count: 11
          }
        }
      }
    ]


  },
  mutations: {
    calcResults(state, payload) {
      state.selectedType = payload || 'men'
    }
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
    
  }
})
