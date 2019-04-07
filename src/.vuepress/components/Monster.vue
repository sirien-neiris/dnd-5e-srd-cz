<template>
    <div class="monster">
        <div class="monster__title">{{ title }}</div>
        <div class="monster__subtitle">{{ subtitle }}</div>
        <div class="monster__block monster--red">
            <span class="monster__block-title">Obranné číslo</span> {{ armorClass }}<br>
            <span class="monster__block-title">Životy</span> {{ hitPoints }}<br>
            <span class="monster__block-title">Rychlost</span> {{ speed }}
        </div>
        <div class="monster__stats monster--red">
            <ul>
                <li class="monster__stats-item">
                    <span class="monster__stats-item-name">SIL</span>
                    <span class="monster__stats-item-number">{{ str }}</span>
                </li>
                <li class="monster__stats-item">
                    <span class="monster__stats-item-name">OBR</span>
                    <span class="monster__stats-item-number">{{ dex }}</span>
                </li>
                <li class="monster__stats-item">
                    <span class="monster__stats-item-name">ODL</span>
                    <span class="monster__stats-item-number">{{ con }}</span>
                </li>
                <li class="monster__stats-item">
                    <span class="monster__stats-item-name">INT</span>
                    <span class="monster__stats-item-number">{{ int }}</span>
                </li>
                <li class="monster__stats-item">
                    <span class="monster__stats-item-name">MDR</span>
                    <span class="monster__stats-item-number">{{ wis }}</span>
                </li>
                <li class="monster__stats-item">
                    <span class="monster__stats-item-name">CHA</span>
                    <span class="monster__stats-item-number">{{ cha }}</span>
                </li>
            </ul>
        </div>
        <div class="monster__block monster--red">
            <template v-if="savingThrows">
                <span class="monster__block-title">Záchranné hody</span> {{ savingThrows }}<br>
            </template>
            <template v-if="skills">
                <span class="monster__block-title">Dovednosti</span> {{ skills }}<br>
            </template>
            <template v-if="damageVulnerabilities">
                <span class="monster__block-title">Zranitelnost vůči zraněním</span> {{ damageVulnerabilities }}<br>
            </template>
            <template v-if="damageResistances">
                <span class="monster__block-title">Odolání vůči zraněním</span> {{ damageResistances }}<br>
            </template>
            <template v-if="damageImmunities">
                <span class="monster__block-title">Imunity vůči zraněním</span> {{ damageImmunities }}<br>
            </template>
            <template v-if="conditionImmunities">
                <span class="monster__block-title">Imunity vůči stavům</span> {{ conditionImmunities }}<br>
            </template>
            <template v-if="senses">
                <span class="monster__block-title">Smysly</span> {{ senses }}<br>
            </template>
            <template v-if="languages">
                <span class="monster__block-title">Jazyky</span> {{ languages }}<br>
            </template>
            <template v-if="challenge">
                <span class="monster__block-title">Nebezpečnost</span> {{ challenge }}<br>
            </template>
        </div>
        <div class="monster__block-content">
            <slot></slot>
        </div>
    </div>

</template>

<script>
    export default {
        props: [
            'title',
            'subtitle',
            'armorClass',
            'hitPoints',
            'speed',
            'str',
            'dex',
            'con',
            'int',
            'wis',
            'cha',
            'savingThrows',
            'skills',
            'damageVulnerabilities',
            'damageResistances',
            'damageImmunities',
            'conditionImmunities',
            'senses',
            'languages',
            'challenge'
        ],
        data() {
            return {};
        }
    }
</script>


<style lang="sass">
    .monster
        margin-bottom: 1em
        padding: 15px 20px
        background-color: #ffebb6
        color: black

        .monster__title
            font-size: 200%
            text-transform: capitalize

        .monster__subtitle
            font-size: 110%
            font-style: italic

        .monster__block
            margin-top: 0.5em
            margin-bottom: 0.5em
            padding: 0.5em
            border-top: 3px #7c0005 solid
            border-bottom: 3px #7c0005 solid

        .monster__block-title
            font-weight: bold

        .monster--red
            color: #7c0005

        .monster__stats ul
            list-style-type: none
            margin: 0
            padding: 0
            overflow: hidden

        .monster__stats li
            float: left
            display: inline-block
            width: 16.5%
            text-align: center

        .monster__stats-item-name
            font-weight: bold
            display: block

        .monster__stats-item-number
            display: block

        h6
            font-size: 160%
            border-bottom: 1px black solid
            margin-top: 0.5em
            margin-bottom: 0.5em

</style>