<template>
    <div class="home container-fluid">

        <Block
            heading="A Great Day Out - the old fashioned way"
            routerlink="/plan"
            :image="require('@/assets/TicketTrial1.jpg')"
        ></Block>

        <Block
            heading="Fares and tickets"
            routerlink=""
            :image="require('@/assets/TicketOffice.jpg')"
            imageleft="true"
            :list="fareslist"
        ></Block>
    </div>
</template>

<script>
import Block from '../components/Block.vue';

export default {
    name: 'Home',
    components: {
        Block,
    },
    data: function() {
        return {
            items: [],
            blockstyle: '',
            assets: '',
            fareslist: [
                {
                    n: 1,
                    text: 'Buy tickets',
                    icon: 'ticket-alt',
                    externallink: 'https://bkrailway.digitickets.co.uk'
                },
                {
                    n: 2,
                    text: 'Timetables',
                    icon: 'calendar-alt',
                    routerlink: '/fares'
                },
                {
                    n: 3,
                    text: 'Fares',
                    icon: 'pound-sign',
                    routerlink: '/plan',
                }
            ]
        }
    },
}
</script>

<style>

</style>
