<template>
    <div class="home container-fluid">

        <div class="alert alert-danger">
            <h3>CANCELLED SERVICES</h3>

            <p>All services on Saturday 1st April, Sunday 2nd April and Tuesday 4th April have been cancelled. This is due to unforeseen operational
            difficulties.</p>
            <p>The railway will still be opened as planned. All our other amenities will still be available.</p>
            <p>We're sorry for any inconvenience or disappointment</p> 
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
