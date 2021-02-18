<template>
  <div id="app">
    <Aside />
    <router-view />
  </div>
</template>

<script>
import Aside from '@/components/Aside/Aside'
import Main from '@/components/Main/Main'
import NewInterview from '@/view/NewInterview'
export default {
  name: 'App',
  components: {
    Aside, Main, NewInterview
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    display: block;
    text-decoration: none;
    color: black;
  }
  button {
    cursor: pointer;
  }
  #app {
    width: 1440px;
    margin: auto;
    display: flex;
    flex-direction: row;
  }
</style>
