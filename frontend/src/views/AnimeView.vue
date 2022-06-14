<template>
    <div v-if="animes.length">
        <h1>Animes</h1>
        <ul>
            <li v-for="anime in animes">
                {{ anime.attributes.titles.en ?? anime.attributes.titles.en_jp }} - {{ anime.attributes.averageRating }}
                <!-- <router-link :to="'/anime/' + anime.id">
                    {{ anime.name }}
                </router-link> -->
            </li>
        </ul>
    </div>
    <div v-else>
        <h1>No animes</h1>
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
			animes: []
		}
	},

	created() {
		axios.get(`https://kitsu.io/api/edge/trending/anime`)
			.then(response => {
				this.animes = response.data.data

				// console.log(response.data.data);
			})
			.catch(e => {
				this.errors.push(e)
			})
	}
}
</script>