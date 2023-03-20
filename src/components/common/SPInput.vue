<script setup="ref">
import { ref } from 'vue'
import EyeIcon from '@/assets/eye.svg'
import EyeOffIcon from '@/assets/eye-off.svg'

const inputType = ref('password')

const toggleInputType = () => {
    inputType.value = inputType.value === 'password' ? 'text' : 'password'
}
</script>

<template>
    <div class="sp-input">
        <span class="sp-input__title">Password:</span>
        <div class="sp-input__wrap">
            <input
                v-bind:type="inputType"
                class="sp-input__input"
                name="password"
                data-test="password-field"
            />
            <button class="sp-input__toggle" @click="toggleInputType">
                <div class="sp-input__eye" v-if="inputType === 'password'" v-html="EyeIcon"></div>
                <div class="sp-input__eye" v-else v-html="EyeOffIcon"></div>
            </button>
        </div>
    </div>
</template>

<style lang="postcss">
.sp-input {
}
.sp-input__title {
    display: block;
    padding-bottom: 10px;
}
.sp-input__wrap {
    position: relative;
}
.sp-input__input {
    padding: 10px;
    padding-right: 50px;
    font-size: 15px;
    background: none;
    border-radius: 3px;
    border: 1px solid #333;
    color: var(--color-text);
    &:focus {
        outline: none;
        border-color: #666;
    }
}
.sp-input__toggle {
    position: absolute;
    right: 0;
    height: 100%;
    background: none;
    border: none;
    z-index: 1;
}
.sp-input__eye {
    width: 24px;
    height: 24px;
    right: 0;
    top: 50%;
    cursor: pointer;
    opacity: 0.8;
    color: #ddd;
    transition: opacity 100ms ease;
    &:hover {
        opacity: 1;
    }
    & svg {
        width: 24px;
        & path {
            fill: currentColor;
        }
    }
}
</style>
