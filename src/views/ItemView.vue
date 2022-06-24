<template>
  <div>
   <section id="content">
        <strong> {{itemData.title}}</strong><br/>
        <small>
            {{itemData.points}} by 
            <router-link :to="`/user/${itemData.user}`"  id="routerLink">
                {{itemData.user}} 
            </router-link>
            {{itemData.time_ago}}
        </small>
        <div v-html="itemData.content"></div>
   </section>
    <section id="comments">
        <p>
            <strong>comments</strong>
        </p>
        <div v-for="comment in itemData.comments" :key="comment">
            <p>
                <router-link :to="`/user/${comment.user}`" id="routerLink">
                    {{comment.user}}
                </router-link>
                <small> comment : {{comment.time_ago}}</small>
            </p>
            <div v-html="comment.content" id="commentText"></div>
        </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name : 'itemView',
    computed : {
        ...mapGetters(['itemData']),
    },
    created() {
        const askId = this.$route.params.id
        this.$store.dispatch('FETCH_ITEM', askId)
    },
}
</script >

<style scoped lang="scss">
div {
    a {
        color: #333
    }
    #content {
        border-bottom: 3px dotted #9c9c9c;
        padding: 20px 10px;
        > div {
            margin: 10px 0;
        }
    }
    #comments {
        padding: 10px 0;
        > p {
            margin: 20px 10px;
        }
        > div {
            padding: 10px;
            border-bottom: 1px solid #9c9c9c;

            p {
                margin-bottom: 10px;
            }
        }
    } 
}


</style>