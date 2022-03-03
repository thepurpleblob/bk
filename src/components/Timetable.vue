<template>
    <div id="timetable" class="container-fluid"> 
        <p class="mt-2 text-center text-uppercase"><b>{{ title }} TIMETABLE</b></p>
        <table v-if="services" class="table table-striped table-sm table-responsive border border-4 rounded-2" :style="modalColor">
            <tbody>
                <tr>
                    <td />
                    <td />
                    <td v-for="service in services" :key="service.upBoness">
                        <b>{{ service.Traction }}</b>
                    </td>
                </tr>
                <tr>
                    <th>
                        Bo'ness
                    </th>
                    <td><small>depart</small></td>
                    <td v-for="service in services" :key="service.upBoness">
                        {{ service.UpBoness }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Kinneil
                    </th>
                    <td><small>depart</small></td>
                    <td v-for="service in services" :key="service.upBoness">
                        {{ service.UpKinneil }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Birkhill
                    </th>
                    <td><small>depart</small></td>
                    <td v-for="service in services" :key="service.upBoness">
                        {{ service.UpBirkhill }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Manuel
                    </th>
                    <td><small>arrive</small></td>
                    <td v-for="service in services" :key="service.upBoness">
                        {{ service.UpManuel }}
                    </td>
                </tr>
                <tr><td>&nbsp;</td></tr>
                <tr>
                    <th>
                        Manuel
                    </th>
                    <td><small>depart</small></td>
                    <td v-for="service in services" :key="service.upBoness">
                        {{ service.DownManuel }}
                    </td>
                </tr>  
                <tr>
                    <th>
                        Birkhill
                    </th>
                    <td><small>depart</small></td>
                    <td v-for="service in services" :key="service.upBoness">
                        {{ service.DownBirkhill }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Kinneil
                    </th>
                    <td><small>depart</small></td>
                    <td v-for="service in services" :key="service.upBoness">
                        {{ service.DownKinneil }}
                    </td>
                </tr>    
                <tr>
                    <th>
                        Bo'ness
                    </th>
                    <td><small>arrive</small></td>
                    <td v-for="service in services" :key="service.upBoness">
                        {{ service.DownBoness }}
                    </td>
                </tr>        
            </tbody>
        </table>

        <div v-if="info" v-html="info" class="alert alert-info text-center"></div>

    </div> 
</template>

<script>
    export default {
        name: 'Timetable',
        props: {
            services: {
                type: Array,
                required: false,
            },
            title: {
                type: String,
                required: true,
            },
            color: {
                type: String,
                required: true,
            },
            info: {
                type: String,
                required: false,
            }
        },
        computed: {
            modalColor() {
                let css = '';
                switch (this.color) {
                    case 'grey':
                        css = '#718096';
                        break;
                    case 'yellow':
                        css = '#d69e2e';
                        break;
                    case 'green':
                        css = '#198754';
                        break;
                    case 'orange':
                        css = '#fd7e14';
                        break;
                }
                return {
                    'border-color': css + ' !important',
                }
            }
        },
        methods: {

        },
        mounted: function() {
            //this.display();
        }
    }
</script>

<style>
    .grey_border {
        background-color: #718096;
    }

    .yellow_border {
        border-color: #d69e2e !important;
    }

    .dot-green {
        background-color: #198754;
    }

    .dot-orange {
        background-color: #fd7e14;
    }
</style>