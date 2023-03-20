import { checkRules, checkIfStrong } from './behaviors'
import { StrengthOption } from './strength-options'

export function checkPassword(password) {
    const checkedRules = checkRules(password)
    const strength = checkIfStrong(checkedRules) ? StrengthOption.Strong : StrengthOption.Weak

    return {
        checkedRules,
        strength
    }
}
