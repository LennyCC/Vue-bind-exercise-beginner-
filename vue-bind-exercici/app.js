
const app = {
  
  data(){
    return{
      name: 'Lenny',
      edad: 27,
      foticoURL: 'https://picsum.photos/id/237/200/300',
      

    }
  },

  methods: {
    getRandomNumber(){
      return Math.random().toFixed(2)
    }
   
  }
}


Vue.createApp(app).mount('#assignment')