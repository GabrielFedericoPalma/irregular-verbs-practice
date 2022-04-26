<template>
  
  <div id="q-app">
    <router-view />
  </div>

</template>
<script>
import { db} from 'boot/firebase.js';
import { LoadingBar } from 'quasar';

LoadingBar.setDefaults({
  color: 'secondary',
  size: '10px',
  position: 'bottom'
})

LoadingBar.start()

export default {
  name: 'App',
  created(){


    // Recieve data form Firebase
    db.child('1YlHOmMWW800YWYNN6mj4vQ9EgdK9a0sU8z1CdM3NDiI').get().then((snapshot) => {

    if (snapshot.exists()) {

        LoadingBar.stop()

        //console.log(snapshot.val());
        const datos = snapshot.val();
        
        // Add data to Store
        this.$store.commit('firebase_store/firebaseToStore', datos)

      //Add data to Store Cache
      // this.$store.commit('firebase_store/firebaseToStoreCache')

        
    } else {
        console.log("No data available");
        LoadingBar.stop()

        // Add data to Store
        let datos = '';
        this.$store.commit('firebase_store/firebaseToStore', datos)
    }
    }).catch((error) => {
      console.error(error);
      LoadingBar.stop()
 
      // Add data to Store
      let datos = '';
      this.$store.commit('firebase_store/firebaseToStore', datos)

    });
  }
}

</script>
