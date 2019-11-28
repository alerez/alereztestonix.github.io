<template>

  <div id="Layout">
    <SideBar />
    <div id="base">
        <Header />
        <router-view/>
    </div>

  </div>
</template>

<script>
  //import Content from './components/Content';
  import Header from "./components/Header";
  import SideBar from "./components/SideBar";

  //mport Tasks from "./components/nav/Tasks";
  //import Activity from "./components/nav/Activity";

export default {
  name: 'Layout',
  components: {
      SideBar,
      Header,
      //Content
  }

}
</script>

<style>
    #Layout{
        display: flex;
        flex-direction: row;
        flex-basis: 100%;
    }
    #base{
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
    }
</style>
