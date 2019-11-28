<template>
    <main>
        <div id="day">{{tasksDay}}</div>

        <div id="postOne">
            <div class="status"></div>
            <p>{{postOne.Text}}</p>
            <div class="time">{{postOne.Time}}</div>
        </div>

        <div id="postTwo">
            <div class="status"></div>
            <p>{{postTwo.Text}}</p>
            <div class="time">{{postTwo.Time}}</div>
        </div>

        <div id="comentary">
            <p>{{comentary}}</p>
        </div>

        <div id="postThree">
            <div class="status"></div>
            <p>{{postThree.Text}}</p>
            <div class="time">{{postThree.Time}}</div>
        </div>

        <Img/>
    </main>
</template>


<script>
 import Img from "./nav/img";
 export default {
   name: 'Content',
     components: {Img},
     data(){
         return{
             tasksDay: 'TODAY',
             postOne:{
                 Text:'Darika Samak mark as done Listing on Product Hunt so that\n' +
                     '                we can reach as many potential users',
                 Time: '8:40 PM'
             },
             postTwo:{
                 Text:'Emilee Simchenko commented on Account for teams and personal in bottom style',
                 Time: '7:32 PM'
             },
             comentary: 'During a project build, it is necessary to evaluate the product design\n' +
                 '                and development against project requirements and outcomes',
             postThree:{
                 Text:'Darika Samak uploaded 4 files on An option to search in\n' +
                     '                current projects or in all projects',
                 Time: '6:02 PM'
             }
         }
     },
 }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
