<template>
    <nav>
        <div class="content">
            <div class="title"><span class="svg"></span><span class="website">{{WebsiteRedesing}}</span><a href="#" class="touch"><span>&bull;&bull;&bull;</span></a></div>
            <div class="UserShareChat">
                <div class="userImg">
                    <img src="../assets/img/1.jpg" alt="chatUserPhoto">
                    <img src="../assets/img/2.jpg" alt="chatUserPhoto">
                    <img src="../assets/img/3.jpg" alt="chatUserPhoto">
                </div>
                <div class="ShareChat">
                    <button class="share"><span>{{Share}}</span></button>
                    <button class="chat"><span>{{Chat}}</span></button>
                </div>
            </div>
        </div>
        <ul class="mainMenu">
            <li><router-link to="/tasks" class="Tasks nav-link">{{Tasks}}</router-link></li>
            <li><a href="#" class="Kanban">{{Kanban}}</a></li>
            <li><router-link to="/activity" class="Activity margin nav-link">{{Activity}}</router-link></li>
            <li><a href="#" class="Calendar">{{Calendar}}</a></li>
            <li><a href="#" class="Files margin">{{Files}}</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'tasks',
  data(){
        return{
            WebsiteRedesing: 'Website Redesing',

            Share: 'Share',
            Chat: 'Chat',

            Tasks: 'Tasks',
            Kanban: 'Kenban',
            Activity: 'Activity',
            Calendar: 'Calendar',
            Files: 'Files'

        }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>