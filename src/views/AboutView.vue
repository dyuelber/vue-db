<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
        <!-- <button @click="updateUser(user.id)">Atualizar</button> -->
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { supabase } from '../lib/supabaseClient';

//const users = ref([{name: 'Dyuelber'}, {name: 'Miranda'}])
const users = ref([])

async function getUsers() {
  const { data } = await supabase.from('users').select()
  console.log('getUsers ~ data:', data)
  users.value = data
}

async function getUserById(id) {
  const { data, error } = await supabase.from('cities').select().eq('id', id)
  console.log('getUserById ~ error:', error)
  console.log('getUserById ~ data:', data)
}

async function updateUser(id) {
  const name = 'Dyuelber Miranda';
  const { error } = await supabase.from('users').update({ name: name }).eq('id', id)
  console.log('updateUser ~ error:', error)  
}

async function createUser() {
  const { error } = await supabase.from('users').insert({name: 'Denmark', email: 'denmark@email.com' })
  console.log('createUser ~ error:', error)
}

async function deleteUser(id) {
  const { error } = await supabase.from('users').delete().eq('id', id)
  console.log('deleteUser ~ error:', error)
}
 
onMounted(() => {
  getUsers()
})

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
