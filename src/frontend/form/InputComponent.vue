<template>
    <div class="flex flex-col gap-2">
        <label :class="['block text-xs font-light', getLabelTextColor]">{{ inputLabel }}</label>
        <label :class="['relative block rounded-md border shadow-sm', getHoverClassInput, getBorderClassInput]">
            <input :type="inputType"
                :class="['text-xs w-full font-light p-2 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0', getLabelTextColor]"
                :value="value" @input="handleInput" placeholder=" " />
        </label>
        <span v-show="showError" class="text-xs font-light text-red-400 pointer-events-none">
            {{ inputErrorLabel }}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'InputComponent',
    props: {
        inputLabel: {
            type: String,
            default: ''
        },
        inputType: {
            type: String,
            default: 'text'
        },
        inputErrorLabel: {
            type: String,
            default: 'Something went wrong...'
        },
        value: {
            type: String,
            default: ''
        },
        showError: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        value(newValue) {
            this.checkIfEmpty(newValue);
        }
    },
    computed: {
        getHoverClassInput(): string {
            return this.showError
                ? 'focus-within:border-red-400 focus-within:ring-1 focus-within:ring-red-400'
                : 'focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500';
        },
        getBorderClassInput(): string {
            return this.showError ? 'border-red-400' : 'border-gray-200';
        },
        getLabelTextColor(): string {
            return this.showError ? 'text-red-400' : 'text-gray-700';
        }
    },
    methods: {
        handleInput(event: any) {
            const newValue = event.target.value;
            this.$emit('update:value', newValue);
            this.checkIfEmpty(newValue);
        },
        checkIfEmpty(value: string) {
            if (value.trim() !== '') {
                this.$emit('update:showError', false);
            }
        }
    }
});
</script>
