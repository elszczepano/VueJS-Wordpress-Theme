<template>
    <a :href="`https://devszczepaniak.pl/post/${slug}`">
        <v-card>
            <v-card-media :src="thumbnail" height="200px"></v-card-media>
            <v-card-title class="article-sample__description" primary-title>
                <div>
                    <h3 class="article-sample__title headline mb-0" v-html="title"></h3>
                    <div class="subheading">{{description | charReplace | sliceText(85)}}...</div>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :href="`https://devszczepaniak.pl/post/${slug}`" flat>Czytaj dalej <i class="material-icons red--marker">chevron_right</i></v-btn>
            </v-card-actions>
        </v-card>
    </a>
</template>

<script>
    import sliceText from './mixins/sliceText';
    import charReplace from './mixins/charReplace';
    export default {
        name: 'article-sample',
        mixins: [sliceText, charReplace],
        props: ['details'],
        data: () => ({
            slug: '',
            thumbnail: '',
            title: '',
            description: ''
        }),
        watch: {
            '$props': {
                handler: function (val) {
                    this.title = val['details']['title']['rendered'];
                    this.thumbnail = val['details']['better_featured_image']['source_url'];
                    this.description = val['details']['excerpt']['rendered'];
                    this.slug = val['details']['slug'];
                },
                deep: true
            }
        }
    };
</script>

<style scoped>
    .article-sample__description {
        height: 150px;
    }
    .article-sample__title {
        min-height: 50px;
    }
</style>