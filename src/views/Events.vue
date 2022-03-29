<template>
    <div class="home container-fluid">

        <div v-for="item in items" :key="item.id" class="row my-4 border" :style="item.rowstyle">
            <div v-if="!item.isleft" id="oldfashioned" class="col-sm-6 col-lg-7 p-4 d-none d-sm-grid" :style="item.imagestyle">

            </div>
            <div class="col-12 col-sm-6 col-lg-5 p-4 text-center">
                <h1>{{ item.Title }}</h1>
                <div v-html="item.Content"></div>
                <div class="mt-2">
                    <router-link class="btn btn-outline-light" :to="item.Page">Find out more...</router-link>
                </div>
            </div>
            <div v-if="item.isleft" id="oldfashioned" class="col-sm-6 col-lg-7 p-4 d-none d-sm-grid" :style="item.imagestyle">

            </div>
        </div>

        <!--
        <div :style="item.style"  v-for="item in items" :key="item.id">    

            <div class="row mb-4">
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
        -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Events',
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
        axios.get(url + '/Events?filter={ "status": { "_eq": "published" }}')
        .then(response => {
            const items = response.data.data;
    window.console.log(items);
            let isleft = true;
            items.forEach(item => {
                item.rowstyle = {
                    "background-color": item.Background,
                    "color": item.TextColour,
                };
                item.imagestyle = {
                    "background-image": "url(" + v.assets + item.Image + ")",
                    "height": "340px",
                    "background-repeat": "no-repeat",
                    "background-size": "contain",
                    "background-position": isleft ? "right" : "left",
                };
                let style = '';
                if (item.backgroundcolor) {
                    style += 'background: ' + item.backgroundcolor + '; ';
                }
                if (item.textcolor) {
                    style += 'color: ' + item.textcolor + '; ';
                }
                item.style = style;
                item.morelink = '/page/' + item.More;
                item.isleft = isleft;
                isleft = !isleft;
            });
            v.items = items;
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
