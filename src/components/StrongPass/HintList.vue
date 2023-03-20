<script setup>
import { defineProps } from 'vue'
import { RulesText } from '@/domain/password/rules'
import { StrengthOption, StrengthOptionLabel } from '@/domain/password/strength-options'

const ruleClassModifier = {
    pass: 'password-hint__rule--pass',
    fail: 'password-hint__rule--fail'
}
const strengthClassModifier = {
    [StrengthOption.Strong]: 'password-hint__strength--strong',
    [StrengthOption.Weak]: 'password-hint__strength--weak'
}

const props = defineProps(['checkedRules', 'strength'])
</script>

<template>
    <div class="password-hint">
        <span class="password-hint__title">Password should fulfill with at least 5 rules:</span>
        <ul class="password-hint__list">
            <li
                v-for="rule in checkedRules"
                :key="rule.key"
                :data-test-rule-indicator="rule.key"
                class="password-hint__rule"
                :class="ruleClassModifier[rule.value ? 'pass' : 'fail']"
            >
                {{ RulesText[rule.key] }}
            </li>
        </ul>
        <div class="password-hint__strength">
            <strong :class="strengthClassModifier[strength]" data-test="validation-summary">
                {{ StrengthOptionLabel[strength] }}</strong
            >
            {{ strength === StrengthOption.Strong ? '😀' : '😥' }}
        </div>
    </div>
</template>

<style lang="postcss">
.password-hint {
    --color-transition: color 100ms ease;
}
.password-hint__title {
    margin-bottom: 10px;
}
.password-hint__list {
    padding: 0;
    margin: 0;
}
.password-hint__rule {
    list-style: none;
    opacity: 0.95;
    transition: var(--color-transition);
}
.password-hint__rule--fail {
    text-decoration: line-through;
    color: var(--color-fail);
}
.password-hint__rule--pass {
    color: var(--color-pass);
}
.password-hint__strength {
    margin-top: 10px;
    transition: var(--color-transition);
}
.password-hint__strength--strong {
    color: var(--color-pass);
}
.password-hint__strength--weak {
    color: var(--color-fail);
}
</style>
