<template>
  <q-layout view="lHh Lpr lFf" style="padding-top:0" >
    <q-header elevated class="q-pa-md" style="position: relative; min-height:220px; display:flex; justify-content: center; align-items: center" >
    </q-header>


    <q-page-container style="padding-top:0px" >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
/* .q-header{background-image: url(~assets/banner.jpg);} */
.q-header, header{display:none !important;}

</style>

<script>

export default {
  name: 'MainLayout',
  components:{},
  data () {
    return {
    }
  }
}
</script>
