<template>
    <div class="home">
        <div :style="item.style"  v-for="item in items" :key="item.id">
            <div class="container-fluid py-4 fp-block">
                <div class="fpcontent" v-html="item.content"></div>
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
        }
    },
    mounted: function() {
        const url = process.env.VUE_APP_ENDPOINT;
        
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

</style>
