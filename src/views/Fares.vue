<template>
    <div class="py-4">
        <v-calendar v-if="isPopulated" is-expanded :attributes="attributes" color="blue" v-on:dayclick="onDayclick" v-on:update:from-page="toPage"></v-calendar>
        <div class="row py-4">
            <div v-for="label in labels" :key="label.title" class="col">
                <span class="dot rounded-circle" :class="label.color"></span> {{ label.title }}
            </div>
        </div>

            
    </div>
</template>

<script>
import axios from 'axios';
import Timetable from '../components/Timetable';

// Tidy up services data from Timetable
function format_services(services) {
    const stations = [
        'UpBoness',
        'UpKinneil',
        'UpBirkhill',
        'UpManuel',
        'DownManuel',
        'DownBirkhill',
        'DownKinneil',
        'DownBoness',
    ];
    const timeregex = new RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]');
    if (services) {
        services.forEach(service => {
            stations.forEach(station => {
                if (timeregex.test(service[station])) {
                    service[station] = service[station].slice(0, 5);
                } else {
                    service[station] = '--';
                }
            })
        });
    }

    return services;
}

export default {
    name: 'Fares',
    components: {
    //    Timetable,
    },
    data: function() {
        return {
            content: '',
            isPopulated: false,
            events: [],
            blockstyle: '',
            attributes: [],
            labels: [],
        }
    },
    methods: {
        update: function() {
            const url = process.env.VUE_APP_ENDPOINT;

            // Get front page items
            const v = this;
            const sendCalendarRequest = async() => {
                try {
                    const response = await axios.get(url + '/Calendar');
                    const events = response.data.data;
                    this.events = events;
                    v.attributes = [];
                    events.forEach(event => {
                        v.attributes.push({
                            key: event.id,
                            highlight: event.Color,  // Boolean, String, Object
                            dates: new Date(event.date),
                            customData: {
                                ttid: event.Timetable,
                                color: event.Color,
                            }
                        });
                    });
                    this.isPopulated = true;
                }
                catch(error)  {
                    window.console.error(error);
                }
            }
            sendCalendarRequest();
        },
        onDayclick: function(day) {
            //window.console.log(day);
            const ttid = day.attributes[0].customData.ttid;
            const color = day.attributes[0].customData.color;
            if (ttid != null) {
                const url = process.env.VUE_APP_ENDPOINT;
                const v = this;
                axios.get(url + '/Timetable/' + ttid)
                .then(response => {
                    //window.console.log(response.data.data.Service);
                    const services = response.data.data.Service;
                    const title = response.data.data.Title;
                    const info = response.data.data.Info;

                    v.$modal.show(
                        Timetable,
                        {
                            services: format_services(services),
                            title: title,
                            color: color,
                            info: info,
                            servicecount: services.length,
                        },
                        {
                            adaptive: true,
                            height: 'auto',
                            minHeight: 300,
                        }
                    );
                })
            }
        },
        toPage: function(page) {
            // (isPopulated is critical for this to be called with data)
            window.console.log(page);
            window.console.log(this.events);
            const yearmonth = page.year.toString() + '-' + page.month.toString().padStart(2, '0');
            const labels = [];
            this.events.forEach(event => {
                if ((event.date.slice(0, 7) == yearmonth) && (event.Color != null) && (event.Title != null)) {
                    if (event.SpecialEvent) {
                        if (!labels.find(label => {
                            return label.title == event.Title;
                        })) {
                            labels.push({
                                title: event.Title,
                                color: 'dot-' + event.Color
                            });
                        }
                    } else {
                        if (!labels.find(label => {
                            return label.color == 'dot-' + event.Color;
                        })) {
                            labels.push({
                                title: event.Title + ' Timetable',
                                color: 'dot-' + event.Color
                            });
                        }
                    }
                }
            });
            this.labels = labels;
            window.console.log(this.labels);
        }
    },
    mounted: function() {
        this.update();
    },
    watch: {
        '$route': function() {
            this.update();
        }
    },
}
</script>

<style lang="scss">
    .dot {
        height: 25px;
        width: 25px;
        display: inline-block;
        vertical-align: middle;
    }

    .dot-grey {
        background-color: #718096;
    }

    .dot-gray {
        background-color: #718096;
    }

    .dot-yellow {
        background-color: #d69e2e;
    }

    .dot-green {
        background-color: #198754;
    }

    .dot-orange {
        background-color: #fd7e14;
    }

    .dot-pink {
        background-color: #d63384;
    }
</style>
