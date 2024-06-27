<template>
    <div class="flex flex-col gap-2">
        <label for="SelectComponent" :class="['block text-xs font-light', getLabelTextColor]">
            {{ selectLabel }}
        </label>
        <select v-model="selectedValue"
            :class="['inline-flex px-4 py-2 items-center text-xs font-light overflow-hidden rounded-md border bg-white w-full', getLabelTextColor, getBorderClassInput]"
            @change="handleSelected">
            <option class="text-xs font-light" value="">Please select</option>
            <template v-for="item in selectItems" :key="item.value">
                <option class="text-xs font-light" :value="item.value">{{ item.key }}</option>
            </template>
        </select>
        <label v-show="showError" :class="['block text-xs font-light pb-2', getLabelTextColor]"> Please select an item
        </label>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SelectComponent',
    props: {
        value: {
            type: String,
            default: ''
        },
        showError: {
            type: Boolean,
            default: false
        },
        selectLabel: {
            type: String,
            default: ''
        },
        selectItems: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            selectedValue: this.value,
        };
    },
    watch: {
        value(newValue) {
            this.selectedValue = newValue;
        },
    },
    computed: {
        getBorderClassInput():string {
            return this.showError ? "border-red-400" : "border-gray-200";
        },
        getLabelTextColor():string {
            return this.showError ? "text-red-400" : "text-gray-700";
        }
    },
    methods: {
        handleSelected(event :any) {
            const selectedValue = event.target.value;
            this.$emit('update:value', selectedValue);
            this.$emit('update:showError', false);
        }
    }
});
</script>
