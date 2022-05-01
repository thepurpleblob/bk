<template>
    <div class="home container-fluid">

        <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border text-primary text-center my-4" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <div v-if="!loading">
            <Block
                v-for="item in items" :key="item.id"
                :heading="item.Title"
                :content="item.Content"    
                :routerlink="item.Page"
                :image="item.imageurl"
                :imageleft="item.isleft"
            ></Block>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Block from '../components/Block.vue';

export default {
    name: 'Events',
    components: {
        Block,
    },
    data: function() {
        return {
            loading: true,
            items: [],
            blockstyle: '',
            assets: '',
        }
    },
    mounted: function() {
        const url = process.env.VUE_APP_ENDPOINT;
        this.assets = process.env.VUE_APP_ASSETS + '/';
        
        // Get front page items
        const v = this;
        axios.get(url + '/Events?filter={ "status": { "_eq": "published" }}')
        .then(response => {
            const items = response.data.data;
            let isleft = true;
            items.forEach(item => {
                item.imageurl = v.assets + item.Image;
                item.morelink = '/page/' + item.More;
                item.isleft = isleft;
                isleft = !isleft;
            });
            v.items = items;
            v.loading = false;
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

<style>
    .list-icon {
        font-size: 2rem;
        vertical-align: middle;
    }

    .fp-block img {
        display: inline-block;
        border-radius: 5px;
        max-width: 100%;
        height: auto;
        padding-right: 5px;
    }

    .item-img {
        min-height: 400px;
    }
</style>
