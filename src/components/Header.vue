<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="@/assets/bklogo.png" alt="BKR Logo" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item border-bottom border-3 ms-3" :class="{'border-primary': isActive('/')}">
                        <router-link class="nav-link px-0" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item border-bottom border-3 ms-3" :class="{'border-primary': isActive('/fares')}">
                        <router-link class="nav-link px-0" to="/fares">Fares &amp; Tickets</router-link>
                    </li>
                    <li class="nav-item border-bottom border-3 ms-3" :class="{'border-primary': isActive('/plan')}">
                        <router-link class="nav-link px-0" to="/plan">Plan your visit</router-link>
                    </li>
                    <li class="nav-item border-bottom border-3 ms-3" :class="{'border-primary': isActive('/events')}">
                        <router-link class="nav-link px-0" to="/events">Events</router-link>
                    </li>
                    <li class="nav-item border-bottom border-3 ms-3" :class="{'border-primary': isActive('/about')}">
                        <router-link class="nav-link px-0" to="/about">About us</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>   
</template>

<script>
    export default {
        name: 'Header',
        props: {
            
        },
        methods: {
            isActive: function(path) {
                return (path == this.$route.path);
            }
        }
    }
</script>