<template>
    <div class="flex flex-col gap-2">
        <label :class="['block text-xs font-medium text-gray-700']">{{ textAreaLabel }}</label>
        <label :class="['relative block rounded-md border shadow-sm', getHoverClassInput, getBorderClassInput]">
            <textarea
                class="text-xs w-full font-light p-2 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="e.g. Hello world" v-model="text" @input="handleInput"></textarea>
        </label>
        <span v-show="showError" class="text-xs font-light text-red-400 pointer-events-none">
            {{ textAreaErrorLabel }}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TextAreaComponent',
    props: {
        textAreaLabel: {
            type: String,
            default: ''
        },
        textAreaErrorLabel: {
            type: String,
            default: 'This field cannot be empty'
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
    data() {
        return {
            text: this.value
        };
    },
    watch: {
        value(newVal) {
            this.text = newVal;
            this.checkEmpty();
        },
        text(newVal) {
            this.$emit('update:value', newVal);
            this.checkEmpty();
        }
    },
    computed: {
        getHoverClassInput(): string {
            return this.showError ?
                'focus-within:border-red-400 focus-within:ring-1 focus-within:ring-red-400' :
                'focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500';
        },
        getBorderClassInput(): string {
            return this.showError ? 'border-red-400' : 'border-gray-200';
        },
        getLabelTextColor(): string {
            return this.showError ? 'text-red-400' : 'text-gray-700';
        }
    },
    methods: {
        handleInput(event: Event) {
            const newValue = (event.target as HTMLTextAreaElement).value;
            this.text = newValue;
            this.$emit('update:value', newValue);
            this.checkEmpty();
        },
        checkEmpty() {
            if (this.text.trim() !== '') {
                this.$emit('update:showError', false);
            }
        }
    }
});
</script>
