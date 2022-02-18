<template>
    <div id="footer" class="container-fluid text-white py-4"> 
        <div id="socialicons">
            <ul class="list-inline">
                <li class="list-inline-item"><a class="link-light pe-2" href="https://www.facebook.com/BonessKinneilRailway/"><font-awesome-icon size="3x" :icon="['fab', 'facebook-square']" /></a></li>
                <li class="list-inline-item"><a class="link-light pe-2" href="https://www.instagram.com/bonesskinneilrailway/"><font-awesome-icon size="3x" :icon="['fab', 'instagram-square']" /></a></li>
                <li class="list-inline-item"><a class="link-light" href="https://twitter.com/bonessrailway"><font-awesome-icon size="3x" :icon="['fab', 'twitter-square']" /></a></li>
            </ul>
        </div>
        <div>
            <b>The Scottish Railway Preservation Society</b><br />
            Operators of Bo'ness &amp; Kinneil Railway and Museum of Scottish Railways<br />
            Scottish Charity No. SC002375
        </div>
        <div class="mt-3">
            <ul class="list-unstyled">
                <li><font-awesome-icon class="pe-1" size="2x" icon="phone-square-alt"/> 01506 825855</li>
                <li><font-awesome-icon class="pe-1" size="2x" icon="envelope"/> enquiries.railway@srps.org.uk</li>
            </ul>
        </div>  
        <ul class="mt-3 list-inline">
            <li class="list-inline-item"><router-link class="link-light" to="/page/terms">Terms & conditions</router-link></li>
            <li class="list-inline-item"><router-link class="link-light" to="/page/dp">Data protection policy</router-link></li>
            <li class="list-inline-item"><router-link class="link-light" to="/page/company">Company details</router-link></li>
        </ul>
    </div> 
</template>

<script>
    export default {
        name: 'Footer',
        props: {
            
        }
    }
</script>

<style>
#footer {
    background: rgb(68, 68, 68) !important;
}
</style>