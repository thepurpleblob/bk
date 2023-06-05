<template>
    <div class="home container-fluid">

        <div v-if="false" class="alert alert-danger">
            <p>
                Due to an ongoing fault with our credit/debit card machine at the Booking Office, Bo'ness Railway Station, it would
                be advisable to pre-book tickets in advance, if possible. If you're buying tickets on the day, please bring cash
                with you. The nearest cash machine is at Tesco, a 5 minute walk from the station.
            </p>
        </div>

        <LayoutBlock
            heading="A Great Day Out - the old fashioned way"
            routerlink="/plan"
            :image="require('@/assets/TicketTrial1.jpg')"
            :linkimage="{
                src: require('@/assets/Click-for-tickets.png'),
                link: 'https://bkrailway.digitickets.co.uk',
                style: 'width: 150px'
            }"
        ></LayoutBlock>

        <LayoutBlock
            heading="Fares and tickets"
            routerlink=""
            :image="require('@/assets/TicketOffice.jpg')"
            imageleft="true"
            :list="fareslist"
        ></LayoutBlock>
    </div>
</template>

<script>
import LayoutBlock from '../components/LayoutBlock.vue';

export default {
    name: 'HomePage',
    components: {
        LayoutBlock,
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
