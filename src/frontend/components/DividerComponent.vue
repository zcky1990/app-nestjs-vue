<template>
    <span class="flex items-center">
        <span v-if="isLeft && hasMessage"
            :class="['shrink-0 px-6 text-sm font-light', getTextColor, messageDecoration]">
            {{ message }}
        </span>
        <span :class="['h-px flex-1', getColor]"></span>
        <span v-if="isCenter && hasMessage"
            :class="['shrink-0 px-6 text-sm font-light', getTextColor, messageDecoration]">
            {{ message }}
        </span>
        <span :class="['h-px flex-1', getColor]"></span>
        <span v-if="isRight && hasMessage"
            :class="['shrink-0 px-6 text-sm font-light', getTextColor, messageDecoration]">
            {{ message }}
        </span>
    </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DividerComponent',
    props: {
        message: {
            type: String,
            default: ''
        },
        messagePosition: {
            type: String,
            default: 'center'
        },
        messageTransform: {
            type: String,
            default: 'uppercase'
        },
        color: {
            type: String,
            default: 'gray'
        }
    },
    computed: {
        hasMessage(): boolean {
            return this.message !== '';
        },
        isCenter(): boolean {
            return this.messagePosition === 'center';
        },
        isLeft(): boolean {
            return this.messagePosition === 'left';
        },
        isRight(): boolean {
            return this.messagePosition === 'right';
        },
        getColor(): string {
            return {
                gray: 'bg-gray-400',
                black: 'bg-black',
                red: 'bg-red-400'
            }[this.color] || 'bg-black';
        },
        getTextColor(): string {
            return {
                gray: 'text-gray-400',
                black: 'text-black',
                red: 'text-red-400'
            }[this.color] || 'text-black';
        },
        messageDecoration(): string {
            return {
                uppercase: 'uppercase',
                lowercase: 'lowercase',
                capitalize: 'capitalize',
                'normal-case': 'normal-case'
            }[this.messageTransform] || 'normal-case';
        }
    }
});
</script>