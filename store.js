import {defineStore} from "pinia"
import {ref,computed} from "vue"

export const useTeamsStore = defineStore("teamStore",() =>{

    const teamsList = ref([{"name":"SomeTeam","children":[{"name":"SomeTeamInside","children":[]}]}])

    const getTeamsList = computed(() =>{
        return teamsList
    })

    function addTeam(target,newTeamName){
        if (target == ""){teamsList.value.push({"name":newTeamName,"children":[]})}
    }
    

    return {
        teamsList,
        getTeamsList,
        addTeam
    }
})