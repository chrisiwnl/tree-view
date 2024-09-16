<template>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
  </head>
  <div>
    <v-container>
      <v-app>
        <div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;border-radius:15px 15px 0px 0px">
          <div style="width:20%;background-color:#e9ecef;height:50%;justify-content:center;display:flex;flex-direction: column;border-radius:15px 15px 0px 0px">
            <div style="width:100%;height:15%;border-bottom:solid 1px black;background-color: #495057;border-radius:15px 15px 0px 0px;display:flex;flex-direction:row;">
              <div style="width:80%;height:100%;display:flex;align-items: center;padding-left:15px;">
                <h1 style="color:white">Teams</h1>
              </div>
              <div style="width:20%;height:100%;display:flex;align-items:center;justify-content:end;padding-right:35px;cursor:pointer">
                <i class="fas fa-plus" style="color:#ffffff;" @click="teamsStore.addTeam('','NewTeam')"/>
              </div>
            </div>
            <div style="width:100%;height:85%">
              <TeamComp v-for="team in teamsStore.teamsList" :key="team" :teams="team" :depth=1></TeamComp>
            </div>
          </div>
        </div>
      </v-app>
    </v-container>
  </div>
</template>

<script setup>
import {useTeamsStore} from "./store"
import TeamComp from "./TeamComp.vue"

const teamsStore = useTeamsStore()
 
</script>

<style>
</style>