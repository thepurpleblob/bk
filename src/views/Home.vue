<template>
    <div class="home">
        <div :style="item.style"  v-for="item in items" :key="item.id" class="rounded-2">    
            <div class="row mb-4 rounded-2">
                <div class="col-8">
                    <img class="item-img img-fluid" :src="assets + item.Picture" />
                </div>
                <div class="col-4">
                    <h2 class="mt-3">{{ item.title }}</h2>
                    <p>{{ item.tagline }}</p>
                    <p v-if="item.More">
                        <a :href="item.morelink">Read more...</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Home',
    components: {
      
    },
    data: function() {
        return {
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
        axios.get(url + '/frontpage?filter={ "status": { "_eq": "published" }}')
        .then(response => {
            const items = response.data.data;
            items.forEach(item => {
                let style = '';
                if (item.backgroundcolor) {
                    style += 'background: ' + item.backgroundcolor + '; ';
                }
                if (item.textcolor) {
                    style += 'color: ' + item.textcolor + '; ';
                }
                item.style = style;
                item.morelink = '/page/' + item.More;
            });
            v.items = items;
        })
    }
}
</script>

<style>
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
