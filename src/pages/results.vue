<template>

<div>

<div class="pagination" >
<q-pagination
      v-model="indexNumber"
      :max="ABCIndexLength"
      direction-links
      boundary-links
      icon-first="skip_previous"
      icon-last="skip_next"
      icon-prev="fast_rewind"
      icon-next="fast_forward"
      @click="clickOnABCIndex()"
    />
    <div class="q-ma-md" >
      <router-link to="/practice" >
        <q-btn label="Practice" class="text-white bg-dark" />
      </router-link>
      <router-link to="/exam" >
        <q-btn label="Exam" color="secondary" />
      </router-link>
      <router-link to="/result" >
        <q-btn label="Results" color="secondary" />
      </router-link>
    </div>
</div>
     
<q-page padding >

<div class="q-pa-md" style="max-width: 800px; margin:auto; padding-bottom: 60px">

        <div class="title">
            <img src="images/flags.jpg" alt="Flag" style="max-width:180px; margin-bottom:16px" >
        <h4 class="text-center" style="margin:0" >IRREGULAR VERBS</h4>
            <h6 style="text-align:center;margin:0" >PRACTICE</h6>
            <!-- <q-icon name="translate" style="font-size:22px" /> -->
        </div>

        <div v-for="(item, index) in verbList" :key="index" >

          <h5 class="text-center" ><span class="text-uppercase" >{{item.INFINITIVE}}</span><span v-if="item.SPANISH" > - <em class="text-lowercase" style="font-size:16px; color: #8b5353" >{{item.SPANISH}}</em></span></h5>

          <q-input
            ref="input"
            filled
            value=""
            v-model="modelInput['infinitive'+index]"
            label="INFINITIVE"
            :rules="[ val => val.toLowerCase() == item.INFINITIVE ]"
          />
          
          <q-input
            ref="input"
            filled
            value=""
            v-model="modelInput['past'+index]"
            label="PAST"
            :rules="[ val => val.toLowerCase() == item.PAST ]"
          />
          
          <q-input
            ref="input"
            filled
            value=""
            v-model="modelInput['participle'+index]"
            label="PARTICIPLE"
            :rules="[ val => val.toLowerCase() == item.PARTICIPLE]"
          />

          <div style="width:100%; display:flex; justify-content: flex-end" >
            <div>
              <small style="display:inline-block; margin-right:33px;color: #8b5353;font-size: 14px;" v-if="answer==index" >{{item.INFINITIVE}} - {{item.PAST}} - {{item.PARTICIPLE}}</small>
              <q-btn label="answer" @click="toggleAnswer(index)" />
            </div>
          </div>

        </div>

        <!-- bottons go/back -->
        <!-- <div style="width:100%; display:flex; justify-content: space-between; margin-top:60px" >  
            <q-btn label="back" @click="goBack('back')" />
            <q-btn label="go" @click="goBack('go')" />
        </div> -->

  </div>

  </q-page>

  </div>
</template>

<style>
h1,h2,h3,h4,h5,h6{margin:24px 0}
.title{
    margin-bottom: 50px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
.pagination{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #f0f0f0;
    position: fixed;
    margin: auto;
    width: 100%;
    z-index: 1;
    padding: 6px 16px;
}
</style>

<script>
export default {
  name: 'PageIndex',
  components:{},
  data () {
    return {
      answer: -1,
      startSlice: 0,
      endSlice: 5,
      indexNumber: 1,
      isABCIndex: false,
      modelInput: {}
      // init: this.$store.state.firebase_store.init
    }
  },
  created(){
    // this.verbListLocal = {...this.verbList}
  },
  methods: {
    clickOnABCIndex(){
        let index = this.indexNumber -1
        let to = this.ABCIndex[index]
        this.$store.commit('firebase_store/pagination', to)
        window.scrollTo(0, 0);
        this.answer = -1
    },
    // goBack(value){

    //   window.scrollTo(0, 0);
    //   this.answer = -1
    //   let firstInput = document.getElementsByTagName('input');

    //   console.log('input: ',firstInput[0])
 
    //   if(value=='go'){
    //     this.indexNumber = this.indexNumber+1
    //     firstInput[0].focus()
    //     return
    //   }
    //   if(value=='back'){
    //     this.indexNumber = this.indexNumber-1
    //     return
    //   }
    
    // },
    // dataPagination() {

    //   console.log('pagination')
    //   //PAGINATION
    //   // if(indexNumber !== )

    // let index = this.indexNumber -1
    // let to = this.ABCIndex[index]
    // let length = this.dataGlobal.length
    // let dataGlobal = {...this.dataGlobal}
    // let pagination = null

    //   for(let i = 0; i<length; i++){
    //     // console.log(state.dataFirstLetters[i])
    //     if(to==this.dataFirstLetters[i]){
    //       // console.log('dataGlobal: ',dataGlobal[i].INFINITIVE)
    //       pagination = dataGlobal.filter(function(value){
    //         // console.log('value: ',value.INFINITIVE.charAt(0));
    //         return value.INFINITIVE.charAt(0) == to
    //       })
    //       // value => value.INFINITIVE == 'a')      
    //     }  
    //   }

    //   // console.log('pagination: ',pagination)
    //   return pagination
    //   // console.log('state.verbList: ',state.verbList)

    // },

    toggleAnswer(index){
      console.log(index, this.answer)
      if(index === this.answer){
        this.answer = -1
      }else{
        this.answer = index
      }     
    }

  },
  computed: {
    dataGlobal: {
      get () {
        return this.$store.state.firebase_store.dataGlobal
      }
    },
    verbList: {
      get () {
        return this.$store.state.firebase_store.verbList
      }
    },
    ABCIndex: {
      get() {
        return this.$store.state.firebase_store.ABCIndex
      }
    },
    ABCIndexLength: {
      get() {
        return this.$store.state.firebase_store.ABCIndex.length
      }
    },
    dataFirstLetters: {
      get() {
        return this.$store.state.firebase_store.dataFirstLetters
      }
    }
  },
  updated(){
      console.log('updated')

      this.init = true

      //**Replace numbers for letters in ABCIndex**

      const letters = this.$store.state.firebase_store.ABCIndex
      const lettersLength = letters.length
      // const qPaginationClass = document.getElementsByClassName('q-pagination');
      
      const buttonsFromIndex = document.querySelectorAll('div.q-pagination div.row button')

      // console.log(buttonsFromIndex[2].innerText = '2')

      for(let i = 0; i<lettersLength; i++){
        buttonsFromIndex[i].innerText = letters[i]
      }
  }
}
</script>