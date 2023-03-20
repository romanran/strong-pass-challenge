<script setup>
import { storeToRefs } from 'pinia'
import SPInput from '../common/SPInput.vue'
import { useStrongPasswordStore } from '@/stores/strong-password'
import { RULE, RulesText } from '@/domain/password/rules'
import { StrengthOption, StrengthOptionLabel } from '@/domain/password/strength-options'

/* config */
const rulesKeys = Object.values(RULE)
const rulesText = RulesText

const ruleClassModifier = {
    pass: 'password-hints__rule--pass',
    fail: 'password-hints__rule--fail'
}
const strengthClassModifier = {
    [StrengthOption.Strong]: 'password-hints__strength--strong',
    [StrengthOption.Weak]: 'password-hints__strength--weak'
}
/* --- */

const store = useStrongPasswordStore()
const { checkedRules, strength } = storeToRefs(useStrongPasswordStore())
console.log(checkedRules)

const checkPassword = (event) => {
    store.check(event.target.value)
}
</script>

<template>
    <div>
        <SPInput @input="checkPassword"></SPInput>

        <ul class="password-hints">
            <li
                v-for="rule in checkedRules"
                :key="rule.key"
                :data-test-rule-indicator="rule.key"
                class="password-hints__rule"
                :class="ruleClassModifier[rule.value ? 'pass' : 'fail']"
            >
                {{ rulesText[rule.key] }}
            </li>
        </ul>
        <span
            class="password-hints__strength"
            :class="strengthClassModifier[strength]"
            data-test="validation-summary"
            >{{ StrengthOptionLabel[strength] }}</span
        >
    </div>
</template>

<style>
.password-hints {
    padding: 0;
}
.password-hints__rule {
    list-style: none;
}
.password-hints__rule--fail {
    text-decoration: line-through;
    color: var(--color-fail);
}
.password-hints__rule--pass {
    color: var(--color-pass);
}
.password-hints__strength--strong {
    color: var(--color-pass);
}
.password-hints__strength--weak {
    color: var(--color-pass);
}
</style>
