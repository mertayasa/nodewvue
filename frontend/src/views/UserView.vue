<template>
    <div v-if="users.length">
        <h1>Users</h1>
        <ul>
            <li v-for="user in users">
                {{ user.name }} - {{ user.age }}
                <!-- <router-link :to="'/user/' + user.id">
                    {{ user.name }}
                </router-link> -->
            </li>
        </ul>
    </div>
    <div v-else>
        <h1>No users</h1>
    </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>


<script>
import axios from 'axios';

export default {
	name: 'app', 
	data() {
		return {
			users: []
		}
	},

	created() {
		axios.get(`http://localhost:3000/api/get-users`)
			.then(response => {
				this.users = response.data

				console.log(this.users);
			})
			.catch(e => {
				this.errors.push(e)
			})
	}
}
</script>