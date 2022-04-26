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
    <div class="q-ma-md links" >
        <q-btn :disabled="$route.path=='/exam'" label="Practice" color="secondary" :class="{'text-white':true,'bg-grey-9':$route.path=='/practice' || $route.path=='/'}" @click="toRoute('/practice')" />
        <q-btn label="Exam" color="secondary" :class="{'text-white':true,'bg-black':$route.path=='/exam'}" @click="toRoute('/exam')" />
        <q-btn :disabled="$route.path=='/exam'" label="Results" color="secondary" :class="{'text-white':true,'bg-grey-9':$route.path=='/result'}" @click="toRoute('/result')" />
    </div>
</div>
     
<q-page padding >

<div class="q-pa-md" style="max-width: 800px; margin:auto; padding-bottom: 60px">

        <div class="title">
            <img src="images/flags.jpg" alt="Flag" style="max-width:180px; margin-bottom:16px" >
            <h4 class="text-center" style="margin:0; text-shadow: 1px 2px 3px #3e9ad9; color: #000000;" >IRREGULAR VERBS</h4>
            <h6 style="text-align:center;margin:0; color:#3e9ad9;font-size:18px" >PRACTICE</h6>
            <!-- <q-icon name="translate" style="font-size:22px" /> -->
            <!-- {{$route.path}} -->
        </div>

        <!-- PRACTICE -->
        <div v-if="$route.path=='/practice' || $route.path=='/'" >

        <div v-for="(item, index) in verbList" :key="index" >

          <h5 class="text-center" >
            <span class="text-uppercase" >
              {{item.INFINITIVE}}
              </span><span v-if="item.SPANISH" > - <em class="text-lowercase" style="font-size:16px; color: #8b5353" >{{item.SPANISH}}</em></span></h5>

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
        </div>
        <!-- END PRACTICE -->

        <!-- EXAM   -->
        <div v-if="$route.path=='/exam'" >
            <div v-for="(item, index) in verbListExam" :key="index" >

            <h5 class="text-center" ><span class="text-uppercase" >{{item.INFINITIVE}}</span><span v-if="item.SPANISH" > - <em class="text-lowercase" style="font-size:16px; color: #8b5353" >{{item.SPANISH}}</em></span></h5>

            <div class="inputsExam" >
                  <q-input
                    ref="input"
                    filled
                    value=""
                    v-model="item.INFINITIVE"
                    label="INFINITIVE"
                  />
                  
                  <q-input
                    ref="input"
                    filled
                    value=""
                    v-model="item.PAST"
                    label="PAST"
                  />
                  
                  <q-input
                    ref="input"
                    filled
                    value=""
                    v-model="item.PARTICIPLE"
                    label="PARTICIPLE"
                  />

              </div>
          </div>
        </div>
      <!-- END EXAM -->

        <!-- bottons go/back -->
        <!-- <div style="width:100%; display:flex; justify-content: space-between; margin-top:60px" >  
            <q-btn label="back" @click="goBack('back')" />
            <q-btn label="go" @click="goBack('go')" />
        </div> -->

  </div>

  <div class="q-mb-md links" v-if="$route.path=='/exam'" style="position: fixed; bottom:16px; right:22px" >
    <!-- <p>Take it <i>easy</i>, when you finish, click finish</p> -->
      <router-link to="/" >
        <q-btn label="Finish" color="secondary" />
      </router-link>
    </div>

  </q-page>

  </div>
</template>

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
      modelInput: {},
      init: 0,
      verbListExam: {}
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

        console.log('modelInput: ', this.modelInput)
        console.log('verbList: ', this.verbList)

        if(this.$route.path=='/exam'){
          // this.$store.commit('firebase_store/saveDataToResult', this.dataToResult)
        }

        this.$store.commit('firebase_store/pagination', to)
        window.scrollTo(0, 0);
        this.answer = -1
        this.modelInput = {}
    },
    toRoute(url){

      if(this.$route.path == '/exam'){
        return
      }

      if(url == '/exam'){
        this.verbListExam = {...this.verbList} 
      }

      this.$router.push(url)
    },
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

      if(this.init == 0){
        console.log('updated')
        //**Replace numbers for letters in ABCIndex**
        const letters = this.$store.state.firebase_store.ABCIndex
        const lettersLength = letters.length
        // const qPaginationClass = document.getElementsByClassName('q-pagination');
        
        const buttonsFromIndex = document.querySelectorAll('div.q-pagination div.row button')

        // console.log(buttonsFromIndex[2].innerText = '2')

        for(let i = 0; i<lettersLength; i++){
          buttonsFromIndex[i].innerText = letters[i]
        }
        this.init = 1
      }

  },
}
</script>

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
.links {margin:auto}
.links .q-btn {min-width:100px; margin:21px 8px}
.inputsExam .q-input {margin-bottom:20px}
</style>
