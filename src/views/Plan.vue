<template>
    <div class="page py-2">
        <div class="container-fluid">
            <h2>Plan your visit</h2>
            <div class="map-responsive">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2230.058160913491!2d-3.601705648100316!3d56.017665278904644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887d652b9c8bee1%3A0xaf20e1906bfcb585!2sBo&#39;ness%20%26%20Kinneil%20Railway!5e0!3m2!1sen!2suk!4v1647087449924!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div class="row mt-4">
                <div class="col-12 col-sm-6">
                    <ul class="list-unstyled">
                        <li><b>The Bo'ness and Kinneil Railway</b></li>
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

                    <h5>By bus from Edinburgh</h5>
                    <p>
                        Bo'ness Community bus runs from the centre of Edinburgh to Bo'ness with stops
                        in between and then back. 
                    </p>
                    <p>
                        It is recommended that you book your seat on the bus in advance. Please
                        see their website <a href="https://bonesscommunitybus.scot">here</a> for more info.
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
