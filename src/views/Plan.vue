<template>
    <div class="page py-2">
        <div class="container-fluid">
            <h2>Plan your visit</h2>

        <div class="row mb-4">
            <div class="col">
                <div class="card">
                    <h3 class="card-header text-center">WELCOME ABOARD</h3>
                    <div class="card-body">
                        <p>
                            There's nothing like a departure by steam or the rumble of a mighty heritage diesel locomotive.
                            Enjoy a scenic ten mile return train journey to Manuel along the Forth Estuary, through woodlands,
                            past waterfalls and over the Avon Viaduct.
                        </p>
                        <p>
                            Our friendly volunteers are waiting to  welcome you aboard and invite you the soak up the atmosphere
                            of our award-winning heritage railway through the sights, sounds and smells of yesteryear. 
                        </p>
                        <div class="alert alert-warning">
                            <b>IMPORTANT NOTE:</b> Unfortunately, our accessible carriage is out of service at present so wheelchairs
                            cannot be accomodated either in a compartment or other carriage. We are really sorry for any 
                            inconvenience and will have it back in service as soon as we can.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-4">
            <div class="col-12 col-sm-6">
                <div class="card">
                    <h3 class="card-header">TIMETABLE</h3>
                    <div class="card-body">
                        <p>
                            Our main season runs from April until October with special events in December.
                            Steam and heritage diesel trains will run on weekends, Tuesdays and other days in
                            school holidays during this period. Although you can just turn up on your chosen day
                            (except special events), we highly recommend you pre-book to guarantee a place on your chosen train.
                        </p>
 
                        <p>
                            <router-link to="/fares">Check our opening days and train times</router-link>
                        </p>
                    </div>
                </div>
            </div>
            <FaresBlock></FaresBlock>
        </div>

         <div class="row mb-4">
            <div class="col-12 col-sm-6">
                <img class="image-fluid" src="@/assets/BKR-374.jpg" />
            </div>
            <div class="col-12 col-sm-6">
                <img class="image-fluid" src="@/assets/BKR-288.jpg" />
            </div>
         </div>

        <h2>More information</h2>

        <div class="accordion mb-4" id="accordionFAQ">
            <div v-for="item in items" :key="item.n" class="accordion-item">
                <h2 class="accordion-header" :id="'heading' + item.n">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + item.n" aria-expanded="false" :aria-controls="'collapse' + item.n">
                    {{ item.q }}
                </button>
                </h2>
                <div :id="'collapse' + item.n" class="accordion-collapse collapse" :aria-labelledby="'heading' + item.n" data-bs-parent="#accordionFAQ">
                <div class="accordion-body">
                    <i><span v-html="item.a"></span></i>
                </div>
                </div>
            </div>
        </div>

        <h2>How to get here</h2>

        <div class="row mt-4">
            <div class="col-12 col-sm-6">
                <ul class="list-unstyled">
                    <li><b>The Bo'ness &amp; Kinneil Railway</b></li>
                    <li>Bo'ness Station</li>
                    <li>Union Street</li>
                    <li>Bo'ness</li>
                    <li>EH51 9AQ</li>
                </ul>
            </div>

            <div class="col-12 col-sm-6">
                <h5>By car</h5>
                <p>
                    Bo'ness Station is in the town centre and has lots of free parking.
                    M9 J5 or J3 then follow the brown tourist signs to Bo'ness and the railway.
                    Satnav, EH51 9AQ
                </p>
                <p>
                    If you are travelling by an electric vehicle, there are 5 electric car charging points
                    (connectors) available at <a href="https://www.zap-map.com/location/1pu6dal/">Union Street Car Park</a>,
                    less than 5 minutes walk from the station. 
                </p>

                <h5>By bus from Edinburgh</h5>
                <p>
                    <a href="https://www.citylink.co.uk/">Scottish Citylink</a> 
                </p>

                <h5>By train and bus</h5>
                <p>
                    Linlithgow is the nearest mainline station. Visitors should alight here and make their
                    way to Linlithgow Cross and the bus stop outside The Four Marys pub. Please see 
                    <a href="https://travelinescotland.com">www.travellinescotland.com</a> or call 0871 200 2233
                    for information about bus services.
                </p>
            </div>
        </div>
    </div>

    </div>
</template>

<script>
//import axios from 'axios';
import FaresBlock from '../components/FaresBlock.vue';

export default {
    name: 'Plan',
    components: {
        FaresBlock,
    },
    data: function() {
        return {
            title: '',
            content: '',
            blockstyle: '',
            items: [
                {
                    n: 'One',
                    q: "Is the railway open?",
                    a: `Yes, we open from April until October
                        with special events in December. Steam and heritage diesel trains will run on weekends,
                        Tuesdays and other days in school holidays during this period.
                        <a href="/fares">Our 2022 timetable is available.</a>`
                },
                {
                    n: 'Two',
                    q: "Will it be a Steam Train or a Heritage Diesel Train?",
                    a: `Midweek trains are all steam-hauled. On Saturday and Sunday the first three trains
                        are steam-hauled and the fourth is heritage diesel-hauled.<br />
                        *Note: Whilst every effort is made to run to the published timetable,
                        SRPS reserves the right to vary it and to use steam or diesel power without notice.`
                },
                {
                    n: 'Three',
                    q: "How much are tickets?",
                    a: `See above for ticket prices`
                },
                {
                    n: 'Four',
                    q: "Do I need to pre-book tickets online?",
                    a: `You can pre-book your date and train departure time up until 9am on the day of your visit subject to availability.
                        <a href="https://bkrailway.digitickets.co.uk" title="Book your tickets">Book your tickets here</a>.
                        Your ticket will only be valid for the train you book.
                        Some tickets may be available at the station on the day, but if the train you wish to
                        travel on is fully booked, you will not be able to board. So it's best to pre-book if you can.
                        `
                },
                {
                    n: 'FourA',
                    q: "Can I bring my group to your Railway and Museum?",
                    a: `Of course. Group discounts apply for 12+ paying passengers.
                    Please contact our office on <a href="tel:01506825855">01506 825855</a>
                    or email <a href="mailto:office@srps.org.uk">office@srps.org.uk</a> for further information.`
                },
                {
                    n: 'FourB',
                    q: "Do you accept bookings from School Groups?",
                    a: `Yes, we welcome school groups and also have a great Education Pack available to help
                    with planning your visit or for use in the classroom.
                    Please contact our office on <a href="tel:01506825855">01506 825855</a>
                    or email <a href="mailto:office@srps.org.uk">office@srps.org.uk</a> for further information.`
                },
                {
                    n: 'Five',
                    q: "What safety measures will there be in place?",
                    a: `We will maintain mitigation measures, including managing capacities and visitor flow,
                        use of hand sanitation stations and enhanced cleaning protocols,
                        until otherwise announced, in accordance with industry best practice and
                        guidance endorsed by the <a href="https://asva.co.uk/">Association of Scottish Visitor Attractions</a>.
                        <br /><br />
                        As per the latest guidance from the Scottish Government, face coverings are recommended indoors,
                        unless exempt or eating and drinking. This includes on trains and at Bo’ness Station.
                        It is also recommended they are worn in areas likely to be crowded, including queues.
                        <br /><br />
                        Please be mindful of other visitors and use the space we have provided kindly.
                        <br /><br />
                        Do follow Government advice and local mitigations at all times,
                        <a href="https://www.gov.scot/collections/coronavirus-covid-19-guidance/">See the latest information.</a>
                        
                        `
                },
                {
                    n: 'Six',
                    q: "Do infants count in the numbers for booking a table/compartment?",
                    a: `There is no actual ticket especially for infants. As far as our seating is concerned,
                        a child under 5 would be able to sit on an adults knee and not need a seat.
                        Please note this does not apply to special events which will differ in their infant policy.`
                },
                {
                    n: 'Seven',
                    q: "How long will I be on the train?",
                    a: `Your return train journey to Manuel takes around 70 minutes.<br />
                        Our staff will be there if you need help finding your seat.
                        At Manuel the train will stop for just over ten minutes* to allow the crew to move the
                        locomotive from one end of the train to the other to pull it back to Bo’ness.
                        At Manuel you are welcome to alight and enjoy the fresh air on our platform whilst this takes place.
                        When it is time to get back on, the Guard will blow their whistle and our staff
                        will let you know it’s time to get back on. 
                        (*Please note this may change due to operational needs)`
                },
                {
                    n: 'Eight',
                    q: "What time should we get to Bo’ness Station to catch our train?",
                    a: `Please arrive around 20-30 minutes before your train departure to allow time for parking,
                        waiting to board your train and visiting our toilet facilities.`
                },
                {
                    n: 'Nine',
                    q: "Can I just come for a wander round the site and visit the café and Gift Shop?",
                    a: `Visitors can come to the Station to visit our shop and Station Buffet when we are running trains.
                        <br /><br />
                        Access to the platform is for passengers who have bought or wish to buy tickets for travel on our trains only.
                        It is recommended that all passengers and visitors continue to wear a face covering,
                        unless exempt in line with our mitigation measures whilst at the Station,
                        Station Buffet, the train platforms, on trains (unless eating or drinking) and keep a
                        safe distance from other visitors and follow marked routes.
                        <br /><br />
                        Please note site access may be limited at special events.`
                },
                {
                    n: 'Ten',
                    q: "Are there toilets on the train?",
                    a: `Yes there are as well as in Bo’ness Station.`
                },
                {
                    n: 'Eleven',
                    q: "What else can I do?",
                    a: `Right now you can use our free car park, pick up a souvenir in our Gift Shop,
                        take a pre-booked train journey, enjoy the sights, sounds and smells of the golden age of train travel,
                        bring a picnic to eat in our picnic area, buy a hot or cold drink and a meal to eat in the Station Buffet
                        or takeaway on the train, use our toilet facilities and be looked after by our friendly staff and
                        volunteers whilst you are with us.<br />
                        You can also go on the Visitor Trail to the Museum of Scottish Railways and Engineering Workshop Viewing Gallery,
                        show your railway ticket and you’ll get discounted entry. `
                },
                {
                    n: 'Twelve',
                    q: "Can I change my train time if I can no longer make it?",
                    a: `Unfortunately, we can only make transfers or offer refunds if we are unable to run your booked train service.
                        <a href="https://bkrailway.digitickets.co.uk/pages/terms">Please find further terms and conditions see our booking page</a>. `
                },
                {
                    n: "Thirteen",
                    q: "Can I get something to eat and drink?",
                    a: `Yes. Our Station Buffet will be open for hot and cold food, drinks and snacks.<br />
                        You are also welcome to bring your own picnic to eat in our picnic areas or on the train but please
                        dispose of your litter wisely.`
                },
                {
                    n: 'Fourteen',
                    q: "Is the Museum of Scottish Railways open?",
                    a: `Yes, with a brand new heated entrance area for 2022, you will see it from Bo’ness Station platform.
                        Accessed from the footbridge and visitor trail, you’ll be able to visit the new Engineering Workshop
                        Viewing Gallery  built by funding from the National Lottery Heritage Fund and see restoration work in practice. `
                },
                {
                    n: 'Fifteen',
                    q: "Are the station and trains accessible?",
                    a: `
                    <strong>IMPORTANT NOTE:</strong> Unfortunately our accessible carriage is out of service at present.
                    We are really sorry for any inconvenience and will have it back in service as soon as we can.<br />
                    There is good disabled access to the station, the Station Buffet, the entertainment, the trains, the Museum
                    of Scottish Railways and Engineering Workshop Viewing Gallery. There is also plenty of dedicated
                    disabled parking at Bo'ness. A disabled toilet is also available at Bo'ness station.<br />
                    <a href="https://www.accessibilityguides.org/content/boness-kinneil-railway">Please see our accessibility statement.</a>`
                },
                {
                    n: 'Sixteen',
                    q: "Is there parking?",
                    a: `Yes. We have a large free car park with accessible parking spaces less than 10 metres from Bo’ness Station`
                },
                {
                    n: 'Seventeen',
                    q: "Can I bring my dog ?",
                    a: `Assistance dogs are allowed on site at any time. All dogs are welcome except on special event days such as
                        Day Out With Thomas and Santa Steam Trains which are extremely busy and not the best experience for our four legged friends!
                        <br /><br />
                        On standard days well behaved dogs are welcome on the trains but only in the standard class open carriages,
                        i.e. tables of up to four. On the platforms dogs must be kept on a lead at all times. We do not allow dogs
                        in our compartment or first class coaches.
                        <br /><br />
                        We also ask that dogs are kept off the seats too, please.
                        <br /><br />
                        Dogs are not allowed in the Station Buffet at Bo’ness but food and drinks from the menu can be taken
                        away and enjoyed at picnic benches around the site.`
                },
                {
                    n: 'Eighteen',
                    q: 'Do you run any special events?',
                    a: `We have a programme of special events for everyone from tiny tots to 
                        avid train enthusiasts including Day Out With Thomas™ and Santa Steam Trains. `
                }
            ]
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

    .map-responsive{
        overflow:hidden;
        padding-bottom:56.25%;
        position:relative;
        height:0;
    }

    .map-responsive iframe{
        left:0;
        top:0;
        height:100%;
        width:100%;
        position:absolute;
    }

</style>
