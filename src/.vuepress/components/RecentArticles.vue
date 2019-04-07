<template>
    <div>
        <ul>
            <li v-for="post in recentFiles">
                {{post.lastUpdated}} - <a :href="post.path">{{post.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    const moment = require('moment');
    moment.locale('cs');
    export default {
        data() {
            return {};
        },
        computed:{
            recentFiles() {
                let files = this.$site.pages.filter(p => {
                    return p.path.indexOf('/') >= 0;
                }).sort((a,b) => {
                    let aDate = moment(a.lastUpdated, "LLL");
                    let bDate = moment(b.lastUpdated, "LLL");
                    let diff = aDate.diff(bDate);
                    if(diff < 0) return 1;
                    if(diff > 0) return -1;
                    return 0;
                }).slice(0,5);

                return files;
            }
        }
    }
</script>