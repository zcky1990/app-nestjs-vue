<template>
    <div class="container mx-auto">
        Index Page
        <snackBar :show="snackBar.show" :message="snackBar.snackbarMessage" position="top" color="green" :timeout="snackBar.timeout"
            :type="snackBar.type" :title="snackBar.title" @show="showSnackbar"
            @close="closeSnackbar" />
        
        <textArea v-model:value="dropdown.value" :text-area-label="dropdown.dropdownLabel" v-model:show-error="dropdown.error" />
        <inputComp v-model:value="dropdown.value" :input-label="dropdown.dropdownLabel" input-type="number" v-model:show-error="dropdown.error" />
        <dropdown v-model:value="dropdown.value" :dropdown-label="dropdown.dropdownLabel" :dropdown-items="dropdown.dropdownItem" v-model:show-error="dropdown.error" />
        <selectComp v-model:value="dropdown.value" :select-label="dropdown.dropdownLabel" :select-items="dropdown.dropdownItem" v-model:show-error="dropdown.error"/>
        <dividerComp :message="divider.message" :message-position="divider.messagePosition" :color="divider.color"
            :message-transform="divider.messageTransform" />
        <checkBox />
    </div>
</template>

<script lang="ts">
import snackBar from "./../components/SnackbarComponent.vue";
import dividerComp from "./../components/DividerComponent.vue";
import dropdown from "./../components/DropdownComponent.vue"
import selectComp from "./../components/SelectComponent.vue"
import inputComp from "./../components/InputComponent.vue"
import textArea from "./../components/TextAreaComponent.vue"
import checkBox from "./../components/CheckBoxComponent.vue"


import { defineComponent } from 'vue';

export default defineComponent({
    name: 'IndexPages',
    components: {
        dropdown,
        snackBar,
        dividerComp,
        selectComp,
        textArea,
        inputComp,
        checkBox
    },
    data() {
        return {
            snackBar: {
                snackbarMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?',
                show: true,
                type: 'info',
                title: '',
                timeout: 1000
            },
            dialogPopUp: {
                showNotification: false,
                title: 'Notification',
                message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?',
                type: 'notification',
                button: {
                    submit: 'Submit',
                    cancel: 'Cancel'
                }
            },
            divider: {
                message: "test",
                messagePosition: "center",
                messageTransform: "uppercase",
                color: "red",
            },
            dropdown: {
                dropdownLabel: "Dropdown Label Example",
                value: '',
                dropdownItem: [{
                    key: "Dropdown 1",
                    value: "1"
                },
                {
                    key: "Dropdown 2",
                    value: "2"
                }],
                error: true
            }

        }
    },
    methods: {
        showSnackbar(title:string, message:string, type:string) {
            let snackBar = this.snackBar;
            snackBar.title = title;
            if (type === 'error') {
                snackBar.type = type;
            } else {
                snackBar.type = "info";
            }
            snackBar.snackbarMessage = message;
            snackBar.show = true;
            this.dialogPopUp.showNotification = true
        },
        closeSnackbar() {
            this.snackBar.show = false;
        },
    }
});
</script>
