<template>
    <div class="container-fluid">
        <h1>Latest News</h1>
        <LoadingCMS v-if="loading"></LoadingCMS>
        <div class="card my-4" v-for="item in items" :key="item.id">
            <div class="card-body">
                <h2 class="card-title">{{ item.Title }}</h2>
                  <button class="btn btn-primary my-2" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+item.id" aria-expanded="false" :aria-controls="'collapse' + item.id">
                      Show/hide
                </button>
                <div class="collapse" :id="'collapse' + item.id">
                        <span v-html="item.Content"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import LoadingCMS from '../components/LoadingCMS.vue';

export default {
    name: 'NewsItems',
    components: {
        LoadingCMS,
    },
    data: function() {
        return {
            items: [],
            loading: true,
        }
    },
    mounted: function() {
        const url = process.env.VUE_APP_ENDPOINT;
        const v = this;
        axios.get(url + '/News?filter={ "status": { "_eq": "published" }}')
        .then(response => {
            const items = response.data.data;
             v.items = items;
            v.loading = false;
        })
        .catch(err => {
            v.$log.error(err);
        });
    }
}
</script>

<style lang="scss">
    @import '../style/gradients.css';
</style>