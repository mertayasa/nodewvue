<template>
    <div class="container">
        <div class="d-flex align-items-center justify-content-center vh-100">
            <form class="col-12 col-md-6 shadow-lg rounded p-4" @submit="handleLogin">
                <h3 class="text-center">Login</h3>
                <div class="mb-3 form-control-sm px-0">
                    <label for="loginInputEmail" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="loginInputEmail" aria-describedby="emailHelp" v-model="email">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3 form-control-sm px-0">
                    <label for="loginInputPassword" class="form-label">Password</label>
                    <input type="password" class="form-control" id="loginInputPassword" v-model="password">
                </div>
                <div class="mb-3 form-check form-control-sm">
                    <input type="checkbox" class="form-check-input" id="rememberCheck" v-model="remember">
                    <label class="form-check-label" for="rememberCheck">Remember me</label>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'app',
    data() {
        return {
            email: '',
            password: '',
            remember: false,
        }
    },
    created: function() {
        document.title = this.$appName
    },
    methods: {
        handleLogin(e) {
            e.preventDefault()
            let data = {
                email: this.email,
                password: this.password,
                remember: this.remember
            }

            console.log(data)
            
            // axios.get(`https://kitsu.io/api/edge/trending/anime`)
            //     .then(response => {
            //         this.animes = response.data.data
            //     })
        }
    }
}

</script>