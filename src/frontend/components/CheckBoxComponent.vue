<template>
    <fieldset>
        <label v-if="checkBoxLabel !== undefined || checkBoxLabel !== ''"
            :class="['block text-xs font-medium text-gray-700']">{{ checkBoxLabel }}</label>
        <label v-if="checkBoxDesc !== undefined || checkBoxDesc !== ''"
            :class="['mt-1 block text-xs font-light text-gray-700']">{{ checkBoxDesc }}</label>
        <div :class="[getCheckBoxDividerCss]">
            <label v-for="item in checkBoxData" :key="item.value" class="flex cursor-pointer items-start gap-2 py-2">
                <div class="flex items-center">
                    &#8203;
                    <input @change="handleChecked" type="checkbox" class="size-3 rounded border-gray-300"
                        :value="item.value" v-model="checkedValues" />
                </div>
                <div>
                    <strong class="font-light text-xs text-gray-900">{{ item.label }}</strong>
                    <p v-if="item.description" class="text-pretty font-light text-xs text-gray-700">
                        {{ item.description }}
                    </p>
                </div>
            </label>
        </div>
        <label v-show="showError" :class="['block text-xs font-light pb-2 text-red-400']">{{ getErrorText }}</label>
    </fieldset>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface CheckBoxItem {
    label: string;
    value: string;
    description?: string; // Make description optional in CheckBoxItem
}

export default defineComponent({
    name: 'CheckBoxComponent',
    props: {
        checkBoxLabel: {
            type: String,
            default: ''
        },
        checkBoxDesc: {
            type: String,
            default: ''
        },
        checkBoxErrorLabel: {
            type: String,
            default: ''
        },
        checkBoxData: {
            type: Array as PropType<CheckBoxItem[]>,
            default: () => [
            ]
        },
        value: {
            type: [String, Array] as PropType<string | string[]>, // Accept string or string array for value prop
            default: () => [] // Default value as string array
        },
        showError: {
            type: Boolean,
            default: true
        },
        showCheckBoxDivider: {
            type: Boolean,
            default: true
        },
        singleSelection: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            checkedValues: [] as string[] // Initialize checkedValues as an empty string array
        };
    },
    watch: {
        value(newValue) {
            this.checkIfEmpty(newValue);
        },
        checkedValues(newValues) {
            this.$emit('update:value', this.singleSelection ? newValues[0] : newValues);
        }
    },
    computed: {
        getErrorText(): string {
            return this.checkBoxErrorLabel || 'Please checked the checkbox';
        },
        getCheckBoxDividerCss(): string {
            return this.showCheckBoxDivider ? 'divide-y divide-gray-200' : '';
        }
    },
    methods: {
        handleChecked(event: Event) {
            const newValue = (event.target as HTMLInputElement).value;
            if (this.singleSelection) {
                const value = this.checkedValues[0]
                if (value === undefined) {
                    this.checkedValues = [];
                } else {
                    this.checkedValues.pop()
                    this.checkedValues = [newValue];
                }
                console.log(this.checkedValues[0])
                if (!(event.target as HTMLInputElement).checked && !this.checkedValues.includes(newValue)) {
                    this.checkedValues.pop()
                } else {
                    this.checkedValues = [newValue];
                }
            } else {
                if ((event.target as HTMLInputElement).checked) {
                    if (!this.checkedValues.includes(newValue)) {
                        this.checkedValues.push(newValue);
                    }
                } else {
                    this.checkedValues = this.checkedValues.filter(value => value !== newValue);
                }
            }
        },
        checkIfEmpty(newValue: string | string[]) {
            if (Array.isArray(newValue)) {
                newValue.forEach(val => {
                    if (val && !this.checkedValues.includes(val)) {
                        this.checkedValues.push(val);
                    }
                });
            } else {
                this.checkedValues = [newValue];
            }
        },
    },
    mounted() {
        this.checkIfEmpty(this.value);
    }
});
</script>
