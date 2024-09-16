<template>
    <div :style="style" >
      {{ props.teams.name }} 
        <i v-if="dropped && props.teams.children.length >= 1" class="fas fa-minus" @click="dropped = !dropped"></i>
        <i v-if="!dropped && props.teams.children.length >= 1" class="fas fa-plus" @click="dropped = !dropped"></i>
      <div v-if="expanded">
          <TeamComp v-for="children in props.teams.children" :key="children.name" :teams="children" :depth=newDepth></TeamComp>
      </div>
    </div>
</template>

<script setup>

import {defineProps,computed,ref} from "vue";

let props = defineProps({
    teams: Object,
    depth: Number
})

const style = computed (() => {
  return 'margin-left:' + props.depth * 10 + 'px'
})

const newDepth = computed (() => {
  return props.depth + 1
})

const dropped = ref(false)

const expanded = computed(() => {
  if (props.teams.children.length >= 1 && dropped.value){return true}
  else {return false} 
})

</script>

<style scoped>


</style>