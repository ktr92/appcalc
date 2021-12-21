<template>
  <div>
    <main>
      <div class="container calcpage">
        <div class="row">
          <div class="col-md-8"> 
            <Form /> 
             <Cards />
          </div>
          <div class="col-md-4"> 
            <Results /> 
          </div>

        </div>

       
      </div><!-- /.container -->
    </main>
  </div>
</template>

<script>
import Form from './components/Form.vue'
import { useStore } from "vuex";
import Results from './components/Results.vue';
import Cards from './components/Cards.vue';

export default {
  name: 'App',  
  components: {
    Form,
    Results,
    Cards
  },
  setup() {
    const store = useStore()
    
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
   
  }
  .row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .col-md-8 {
    padding: 0 15px;
    flex: 0 0 60%;
    max-width: 60%;
  }
  .col-md-4 {
    padding: 0 15px;
    flex: 0 0 40%;
    max-width: 40%;
  }
  .calcpage {
    padding: 30px 15px;
  }

  @media (max-width: 767px) {
   
    .col-md-8 {
      flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 30px;
    }
    .col-md-4 {
     flex: 0 0 100%;
      max-width: 100%;
     margin-bottom: 30px;
    }
  }
</style>
