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
            Scottish Railway Preservation Society (operators of Bo'ness &amp; Kinneil Railway)
            is a Scottish Charity, SC002375, regulated by the Scottish Charity Regulator (OSCR)
        </div>
        <div class="mt-3">
            <ul class="list-unstyled">
                <li><font-awesome-icon class="fa-fw pe-1" size="2x" icon="phone-square-alt"/> <a class="link-light text-decoration-none" href="tel:01506 825855">01506 825855</a></li>
                <li><font-awesome-icon class="fa-fw pe-1" size="2x" icon="envelope"/> <a class="link-light text-decoration-none" href="mailto:enquiries@srps.org.uk">enquiries.railway@srps.org.uk</a></li>
            </ul>
        </div>

        <ul class="mt-3 list-unstyled">
            <li><a class="link-light" href="https://www.srps.org.uk/">Scottish Railway Preservation Society</a></li>
            <li><a class="link-light" href="https://www.srps.org.uk/railtours/">SRPS Railtours</a></li>
        </ul>

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