<template>
    <div class="py-4">
        <v-calendar is-expanded :attributes="attributes" color="blue" v-on:dayclick="onDayclick"></v-calendar>
        <div class="row py-4">
            <div class="col">
                <span class="dot dot-grey rounded-circle"></span> Special events
            </div>
            <div class="col">
                <span class="dot dot-yellow rounded-circle"></span> Yellow timetable
            </div>
            <div class="col">
                <span class="dot dot-green rounded-circle"></span> Green timetable
            </div>
            <div class="col">
                <span class="dot dot-orange rounded-circle"></span> Orange timetable
            </div>
        </div>

            <template><Timetable /></template>
    </div>
</template>

<script>
import axios from 'axios';
import Timetable from '../components/Timetable';

export default {
    name: 'Fares',
    components: {
        Timetable,
    },
    data: function() {
        return {
            content: '',
            blockstyle: '',
            attributes: [],
        }
    },
    methods: {
        update: function() {
            const url = process.env.VUE_APP_ENDPOINT;

            // Get front page items
            const v = this;
            axios.get(url + '/Calendar')
            .then(response => {
                const events = response.data.data;
                window.console.log(events);
                v.attributes = [];
                events.forEach(event => {
                    v.attributes.push({
                        key: event.id,
                        highlight: event.Color,  // Boolean, String, Object
                        dates: new Date(event.date),
                    });
                });
            })
            .catch(error => {
                window.console.log(error);
            })
        },
        onDayclick: function(thing) {
            window.console.log(thing);
            this.$modal.show(
                Timetable,
                {id: 1},
                {
                    adaptive: true,
                }
            );
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

<style lang="scss">
    .dot {
        height: 25px;
        width: 25px;
        display: inline-block;
        vertical-align: middle;
    }

    .dot-grey {
        background-color: #718096;
    }

    .dot-yellow {
        background-color: #d69e2e;
    }

    .dot-green {
        background-color: #198754;
    }

    .dot-orange {
        background-color: #fd7e14;
    }
</style>
