<template>
    <fieldset>
        <legend class="sr-only">Checkboxes</legend>
        <label :class="['block text-xs font-medium text-gray-700']">{{ checkBoxLabel }}</label>
        <label v-if=" checkBoxDescription!== undefined || checkBoxDescription !== ''" :class="['mt-1 block text-xs font-light text-gray-700']">{{ checkBoxDescription }}</label>
        <div class="divide-y divide-gray-200">
            <label v-for="item in checkBoxData" :key="item.value" class="flex cursor-pointer items-start gap-2 py-2">
                <div class="flex items-center">
                    &#8203;
                    <input @change="handleChecked" type="checkbox" class="size-3 rounded border-gray-300"
                        :value="item.value" />
                </div>
                <div>
                    <strong class="font-light text-xs text-gray-900"> {{ item.label }}</strong>
                    <p v-if="item.description !== undefined || item.description !== ''"
                        class="mt-1 text-pretty font-light text-xs text-gray-700">
                        {{ item.description }}
                    </p>
                </div>
            </label>
        </div>
    </fieldset>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';


interface CheckBoxItem {
    label: string;
    value: string;
    description: string
}


export default defineComponent({
    name: 'CheckBoxComponent',
    props: {
        checkBoxLabel: {
            type: String,
            default: 'Lorem ipsum dolor sit amet'
        },
        checkBoxDescription: {
            type: String,
            default: ''
            //  default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
        checkBoxErrorLabel: {
            type: String,
            default: 'Please checked the checkbox'
        },
        checkBoxData: {
            type: Array as PropType<CheckBoxItem[]>,
            default: () => [
                {
                    label: 'lorem ipssum 1',
                    value: '1',
                    description: 'Lorem ipsum dolor sit amet'
                },
                {
                    label: 'lorem ipssum 2',
                    value: '2',
                    description: 'Lorem ipsum dolor sit amet'
                }
            ]
        },
        value: {
            type: String,
            default: ''
        },
        showError: {
            type: Boolean,
            default: true
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
        },
        handleChecked(event: any) {
            console.log(event.target.value)
        }
    }
});
</script>
