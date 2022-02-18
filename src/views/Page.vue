<template>
    <div class="page">
        <div class="pagecontent container-fluid" v-html="content"></div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Page',
    components: {
      
    },
    data: function() {
        return {
            content: '',
            blockstyle: '',
        }
    },
    methods: {
        update: function() {
            const url = process.env.VUE_APP_ENDPOINT;

            window.console.log(this.$route.params);
        
            // Get front page items
            //const v = this;
            const slug = this.$route.params.slug;
            const v = this;
            axios.get(url + '/Page?filter={ "status": {"_eq": "published"}, "slug": {"_eq": "' + slug + '"}}')
            .then(response => {
                const pages = response.data.data;
                if (pages.length !== 0) {
                    const page = pages[0];
                    window.console.log(page);
                    v.content = page.Content;
                } else {
                    window.console.log('Error 404');
                    // TODO: Redirect to 404
                }
            })
            .catch(error => {
                window.console.log(error);
            })
        }
    },
    mounted: function() {
        this.update();
    },
    watch: {
        '$route': function() {
            this.update();
        }
    },
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
