import CheckBox from '../../src/frontend/components/CheckBoxComponent.vue';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'An CheckBox Component Example.',
      },
    },
  },
  render: (args) => ({
    components: { CheckBox },
    setup() {
      return { ...args };
    },
    template: `
      <div class="container">
        <checkBox v-model:value="value" :check-box-label="label" :check-box-desc="desc" :check-box-error-label="errorLabel" :check-box-data="items" v-model:show-error="error" :single-selection="single"/>
      </div>
    `,
  }),
  argTypes: {
    value: { control: 'array' },
    label: { control: 'text' },
    desc: { control: 'text' },
    errorLabel: { control: 'text' },
    single: { control: { type: 'boolean' } },
    items: { control: 'object' },
    error: {
      control: { type: 'boolean' },
    },
  },
};

export const checkBox = {
  parameters: {
    docs: {
      description: {
        story: 'A CheckBox component example with label',
      },
      source: {
        code: `<CheckBox v-model:value="value" :check-box-label="label" :check-box-desc="desc" :check-box-error-label="errorLabel" :check-box-data="items" v-model:show-error="error" :single-selection="single" />`,
      },
    },
  },
  args: {
    label: 'Checkbox Label Example',
    desc: 'CheckBox Descripton label Example',
    value: ['value_1'],
    single: true,
    items: [
      {
        label: 'checkbox label 1',
        value: 'value_1',
        description: 'label description',
      },
      {
        label: 'checkbox label 2',
        value: 'value_2',
        description: 'label description',
      },
    ],
    error: false,
  },
};

export const checkBoxWithErrorEnable = {
  parameters: {
    docs: {
      description: {
        story: 'A CheckBox component example with error enable',
      },
      source: {
        code: `<CheckBox v-model:value="value" :check-box-label="label" :check-box-desc="desc" :check-box-error-label="errorLabel" :check-box-data="items" v-model:show-error="error" :single-selection="single" />`,
      },
    },
  },
  args: {
    label: 'Checkbox Label Example',
    desc: 'CheckBox Descripton label Example',
    value: ['value_1'],
    single: true,
    items: [
      {
        label: 'checkbox label 1',
        value: 'value_1',
        description: 'label description',
      },
      {
        label: 'checkbox label 2',
        value: 'value_2',
        description: 'label description',
      },
    ],
    error: true,
  },
};
