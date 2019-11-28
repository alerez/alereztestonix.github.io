<template>
    <main>
        <div id="day">{{ tasksDay }}</div>

        <div id="postOne">
            <div class="status"></div>
            <p>{{ postOne.Text }}</p>
            <div class="time">{{ postOne.Time }}</div>
        </div>

        <div id="postTwo">
            <div class="status"></div>
            <p>{{ postTwo.Text }}</p>
            <div class="time">{{ postTwo.Time }}</div>
        </div>

        <div id="comentary">
            <p>{{ comentary }}</p>
        </div>

        <div id="postThree">
            <div class="status"></div>
            <p>{{ postThree.Text }}</p>
            <div class="time">{{ postThree.Time }}</div>
        </div>
        <Img/>
    </main>
</template>

<script>
    import Img from "./img";
    export default {
        name: "tasks",
        data(){
            return{
                tasksDay: 'TODAY',
                postOne:{
                    Text:'Darika Samak',
                    Time: '4:20 PM'
                },
                postTwo:{
                    Text:'Emilee Simchenko commented ',
                    Time: '4:20 PM'
                },
                comentary: 'During a project build, it is necessary to evaluate the product design\n' +
                    '                and development against project requirements and outcomes',
                postThree:{
                    Text:'Darika Samak uploaded 4 files ',
                    Time: '4:20 PM'
                }
            }
        },
        components:{
            Img,
        },
    }
</script>

<style scoped>

</style>