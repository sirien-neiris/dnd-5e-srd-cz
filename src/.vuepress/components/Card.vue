<template>
    <div class="card">
        <p class="card__header">{{ header }}</p>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: [
            'header',
        ],
        data() {
            return {};
        }
    }
</script>


<style lang="sass">
    .card
        padding: 0.1rem 1.5rem
        padding-bottom: 1rem
        margin: 1rem 0
        background-color: #f3f5f7
        border-color: #bc0300
        border-width: 0.06rem
        border-style: dashed

        .card__header
            font-weight: 600
            margin-bottom: -0.4rem

</style>