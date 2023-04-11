<template>
    <div class="home container-fluid">

        <div class="alert alert-danger">
            <h3>NO TRAINS Tuesday 11th April 2023</h3>

            <p>
                Due to a fault with our steam locomotive, we are unable to operate trains today Tuesday 11th April.
                Pre-booked ticket holders are being contacted.
                Our Museum of Scottish Railways, Visitor Trail, Gift Shop & Station Buffet will still be open.
                Our engineers are working hard to enable us to resume services tomorrow, Wednesday 12th April.
            </p>

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
