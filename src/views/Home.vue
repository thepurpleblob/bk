<template>
    <div class="home container-fluid">

        <div class="row my-4 border">
            <div class="col-12 col-sm-6 col-lg-5 bg-dark text-light p-4">
                <h1>A Great Day Out - 
                the old fashioned way</h1>
                <div class="mt-2">
                    <router-link class="btn btn-outline-light" to="/page/greatdayout">Find out more...</router-link>
                </div>
            </div>
            <div id="oldfashioned" class="col-sm-6 col-lg-7 p-4 d-none d-sm-grid">

            </div>
        </div>

        <div class="row my-4 border">
            <div id="faresandtickets" class="col-sm-6 col-lg-7 p-4 d-none d-sm-grid">

            </div>
            <div class="col-12 col-sm-6 col-lg-5 bg-success text-body p-4">
                <h1>Fares and tickets</h1>
                <div class="mt-3">
                    <ul class="list-unstyled">
                        <li><a class="link-dark text-decoration-none" href="https://bkrailway.digitickets.co.uk"><font-awesome-icon class="fa-fw pe-1 list-icon" icon="ticket-alt"/> Buy tickets</a></li>
                        <li><router-link class="link-dark text-decoration-none" to="/fares"><font-awesome-icon class="fa-fw pe-1 list-icon" icon="calendar-alt"/> Timetables</router-link></li>
                    </ul>
                </div>
                <div class="mt-2">
                    <router-link class="btn btn-outline-dark" to="/page/faresandtickets">Find out more...</router-link>
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
    #oldfashioned {
        background-image: url('~@/assets/banner-birkhill-2016.jpeg');
        height: 340px;
    }

    #faresandtickets {
        background-image: url('~@/assets/banner-boness-view1.jpeg');
        height: 340px;
    }

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
