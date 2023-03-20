<script setup>
import { storeToRefs } from 'pinia'
import SPInput from '../common/SPInput.vue'
import HintList from './HintList.vue'
import { useStrongPasswordStore } from '@/stores/strong-password'

const store = useStrongPasswordStore()
const { checkedRules, strength } = storeToRefs(useStrongPasswordStore())

const checkPassword = (event) => {
    store.check(event.target.value)
}
</script>

<template>
    <div class="strong-password">
        <SPInput
            class="strong-password__input"
            type="password"
            title="Password:"
            @input="checkPassword"
            @change="checkPassword"
        ></SPInput>
        <HintList :checkedRules="checkedRules" :strength="strength"></HintList>
    </div>
</template>

<style lang="postcss">
.strong-password {
    width: 100%;
    @media (min-width: 768px) {
        display: flex;
        justify-content: center;
    }
}
.strong-password__input {
    padding-right: 20px;
    margin-bottom: 20px;
    @media (min-width: 768px) {
        margin-bottom: 0px;
    }
}
</style>
