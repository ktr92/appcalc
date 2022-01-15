<template>
  <div>
    <main>
      <div class="container calcpage">
        <div class="row">
          <div class="col-md-8"> 
            <div>
              <Form /> 
            </div>
            <div>
              <Cards :order="order"/>
            </div>
          </div>
          <div class="col-md-4"> 
            <Results @anyChanges="changeOrder"/> 
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
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';

export default {
  name: 'App',  
  components: {
    Form,
    Results,
    Cards
  },
  setup() {
    const store = useStore()
    const order = ref([])
    order.value = [...Array(100).keys()]

    const changeOrder = () => {
      for (let i = 0; i < 5; i++) {
        order.value.unshift(order.value.pop())
      }
    }

    return {
      order,
      changeOrder
    }
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
    padding: 20px 15px;
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


nav ul a {
	font-size: inherit !important;
}

nav {
	background-color: #fff  !important;
	box-shadow: none !important;
	width: inherit !important;
}
.container {
	width: 100% !important;
}

.post-2068 .entry-header {
	max-width:100% !important;
}

.post-2068 .entry-content {
	padding: 0 !important;
}

.post-2068 td, .post-2068 th {
	font-size: 15px !important;
	    padding: 2px 5px !important;
      border-radius: 0 !important;
}
.post-2068 label {
	color: #686868;
}
.post-2068 ul:not(.browser-default)>li {
	list-style-type: disc !important;
}

.post-2068 table tr td:last-child, .post-2068 table tr th:last-child {
	font-weight: 600;
}
.post-2068  .col-md-4 {
margin-top: -60px;
}

    

@media (max-width: 1070px) { 
	.col-md-4 {
    margin-top:0px;
    flex: 0 0 100% !important;
    max-width: 100% !important;
    }

    .col-md-8{
    margin-top:0px;
    flex: 0 0 100% !important;
    max-width: 100% !important;
    }

    h1.entry-title {
    font-size: 2rem;
    }
    .radiogroup {
    width: 100%;
    overflow-x: auto;
    }
    .radiogroup__item label span {
    font-size: 13px;
    white-space: nowrap;
    padding: 8px 9px !important;
    }
	
	
}

@media (max-width: 767px) {
	.post-2068 .entry-content td {
			display: table-cell !important;
	}
	.post-2068 .entry-header  {
	padding: 0 15px !important;
		font-size: 1.6rem !important;
}
.post-2068 	h2 {
		font-size: 1.6rem !important;
	font-weight: 600;
	}
	
}

@media (max-width: 480px) {
	.row .col.s6 {
    width: 100% !important;}
  .single-post .entry-content ul, .single-post .entry-content ol {
    margin-left: 15px;
  padding-left: 21px;
  }
  .single-post .entry-content ol li, .single-post .entry-content ul li {
    padding-left: 0;
  }
  .single-post .entry-content p, .single-post .entry-content li, .single-post .entry-content a {
    font-size: 1rem !important;
  }
  .wp-block-column .wp-block-button, .wp-block-column .wp-block-buttons {
    margin-bottom: 5px !important;
  }
    .post-2068 h1.entry-title {
      font-size: 1.4rem !important;
  }
}
</style>
