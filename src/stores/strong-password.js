import { defineStore } from 'pinia'
import { ref } from 'vue'

import { RULE } from '@/domain/password/rules'
import { checkPassword } from '@/domain/password/check-password'
import { StrengthOption } from '@/domain/password/strength-options'

const init = checkPassword('')
const defaultState = {
    checkedRules: init.checkedRules,
    strength: init.strength
}

export const useStrongPasswordStore = defineStore('strong_password', () => {
    const strength = ref(defaultState.strength)
    const checkedRules = ref(defaultState.checkedRules)

    function check(password) {
        if (!password) {
            checkedRules.value = defaultState.checkedRules
            strength.value = defaultState.strength
            return
        }
        const result = checkPassword(password)
        checkedRules.value = result.checkedRules
        strength.value = result.strength
    }

    return {
        check,
        checkedRules,
        strength
    }
})
