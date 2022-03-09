<template>
    <div class="page py-2">
        <div class="container-fluid">
            <h2>Plan your visit</h2>

            <GmapMap
                :center="{lat:10, lng:10}"
                :zoom="7"
                map-type-id="terrain"
                style="width: 500px; height: 300px"
            >
            </GmapMap>
        </div>

    </div>
</template>

<script>
//import axios from 'axios';

export default {
    name: 'Plan',
    components: {
      
    },
    data: function() {
        return {
            title: '',
            content: '',
            blockstyle: '',
        }
    },
    methods: {

    },
    mounted: function() {
      
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
