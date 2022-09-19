<template>
    <div class="container-fluid">
        <h1>Latest News</h1>
        <LoadingCMS v-if="loading"></LoadingCMS>

        <div v-if="!loading">
            <div class="row">
                <div v-for="item in items" :key="item.id" class="col-12 col-sm-6 col-lg-4">
                    <NewsCard
                        :title="item.Title"
                        :gradient="item.gradient"
                        :image="assets + item.Image"
                        :showimage="item.Image ? true : false"
                        :intro="item.Intro"
                        :content="item.Content"
                        :routerlink="item.Page"
                    ></NewsCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import LoadingCMS from '../components/LoadingCMS.vue';
import NewsCard from '../components/NewsCard.vue';

export default {
    name: 'NewsItems',
    components: {
        LoadingCMS,
        NewsCard,
    },
    data: function() {
        return {
            items: [],
            loading: true,
            assets: process.env.VUE_APP_ASSETS + '/',
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