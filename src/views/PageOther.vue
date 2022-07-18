<template>
    <div class="page py-2">

        <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border text-primary text-center my-4" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <div v-if="!loading">
            <div class="container-fluid">
                <h2>{{ title }}</h2>
            </div>
            <div class="pagecontent container-fluid fs-5" v-html="content"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'PageOther',
    components: {
      
    },
    data: function() {
        return {
            loading: true,
            title: '',
            content: '',
            blockstyle: '',
        }
    },
    methods: {
        update: function() {
            const url = process.env.VUE_APP_ENDPOINT;

            // Get front page items
            const slug = this.$route.params.slug;
            const v = this;
            let filter = '';
            if (isNaN(slug)) {
                filter = '/Page?filter={ "status": {"_eq": "published"}, "slug": {"_eq": "' + slug + '"}}';
            } else {
                filter = '/Page?filter={ "status": {"_eq": "published"}, "id": {"_eq": "' + slug + '"}}'
            }
            axios.get(url + filter)
            .then(response => {
                const pages = response.data.data;
                if (pages.length !== 0) {
                    const page = pages[0];
                    v.title = page.Title;
                    v.content = page.Content;
                } else {
                    v.$log.error('Error 404');
                    v.$router.push('/404');
                    // TODO: Redirect to 404
                }
                v.loading = false;
            })
            .catch(error => {
                const message = JSON.stringify(error, null, 2);
                v.$router.push({
                    name: 'error404',
                    params: {
                        message: message
                    }
                });
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
    .page img {
        display: inline-block;
        border-radius: 5px;
        max-width: 100%;
        height: auto;
        padding-right: 5px;
    }

</style>
