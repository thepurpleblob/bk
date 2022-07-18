<template>
    <div class="container-fluid">
        <h1>Latest News</h1>
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

export default {
    name: 'NewsItems',
    data: function() {
        return {
            items: [],
        }
    },
    mounted: function() {
        const url = process.env.VUE_APP_ENDPOINT;
        const v = this;
        axios.get(url + '/News?filter={ "status": { "_eq": "published" }}')
        .then(response => {
            const items = response.data.data;
            v.$log.debug(items);
            v.items = items;
        })
        .catch((error) => {
            const message = JSON.stringify(error, null, 2);
            v.$router.push({
                name: 'error404',
                params: {
                    message: message
                }
            });
        })
    }
}
</script>