import { RULE } from '@/domain/password/rules'

const minimumOfRulesPassed = 5

export function checkRules(password) {
    const rulesPassed = [
        { key: RULE.OneLetter, value: password.length >= 1 },
        { key: RULE.UpperAndLower, value: new RegExp(/([a-z][A-Z]|[A-Z][a-z])/).test(password) },
        { key: RULE.OneNumber, value: new RegExp(/([0-9])/).test(password) },
        { key: RULE.SpecialSymbol, value: new RegExp(/([^A-Za-z0-9])/).test(password) },
        { key: RULE.LongerThan4, value: password.length > 4 },
        { key: RULE.LongerThan8, value: password.length > 8 },
        { key: RULE.LongerThan12, value: password.length > 12 }
    ]
    return rulesPassed
}

export function checkIfStrong(rules) {
    const numberOfRulesPassed = Object.values(rules).reduce((numberOfRules, rule) => {
        return rule.value ? numberOfRules + 1 : numberOfRules
    }, 0)
    return numberOfRulesPassed >= minimumOfRulesPassed
}
