<template>
    <div class="home container-fluid">

        <div class="alert alert-danger">
            <h3>URGENT NOTICE - Trains cancelled this weekend</h3>
            <p>Due to operational reasons, all trains are cancelled on Saturday 30th April. Steam trains
                will be cancelled on Sunday 1st May. Diesel services from 14:45 and the '37403 Running Night'
                will run as planned. Please see the News page for full details.
            </p>
        </div>


        <Block
            heading="A Great Day Out - the old fashioned way"
            routerlink="/plan"
            :image="require('@/assets/TicketTrial1.jpg')"
            :linkimage="{
                src: require('@/assets/Click-for-tickets.png'),
                link: 'https://bkrailway.digitickets.co.uk',
                style: 'width: 150px'
            }"
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
