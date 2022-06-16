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
<!-- <circle-spin loading="isLoading"></circle-spin> -->
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
// import { CircleSpin } from 'vue-loading-spinner';

export default {
    name: 'app',
    data() {
        return {
            isLoading: true,
            animes: []
        }
    },

    beforeRouteEnter(to, from, next) {
        axios.get(`https://kitsu.io/api/edge/trending/anime`)
            .then(response => {
                next(vm => {
                    vm.animes = response.data.data
                })
            })
            .catch(e => {
                next(vm => {
                    vm.animes = []
                })
            })
    },

    methods: {
        fetchAnime(next) {
            axios.get(`https://kitsu.io/api/edge/trending/anime`)
                .then(response => {
                    this.animes = response.data.data

                    // console.log(response.data.data);
                })
                .catch(e => {
                    console.log(e);
                })
        }
    }
}
</script>