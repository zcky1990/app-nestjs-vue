import Divider from "./../../src/frontend/components/DividerComponent.vue";

export default {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: 'A countdown timer component that counts down to a specified date. Customize the title and the end date using props.'
      }
    }
  },
  render: (args) => ({
    components: {
      Divider,
    },
    setup() {
      return {
        ...args,
      };
    },
    template:
      '<Divider :message="message" :message-position="messagePosition" :color="color" :message-transform="messageTransform" />',
  }),
  argTypes: {
    message:{ control: "text" },
    messagePosition:{ 
      options: ['left', 'center', 'right'],
      control: { type: 'select' }, 
    },
    messageTransform:{ 
      options: ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      control: { type: 'select' }, 
    },
    color:{ 
      options: ['gray', 'black', 'red'],
      control: { type: 'select' }, 
    }
  },
};

export const Center = {
  parameters: {
    docs: {
      description: {
        story: 'Example How Divider component renderer when message position is center'
      },
      source: {
        code: `<Divider message="divider" message-position="center" color="gray" message-transform="uppercase" />`
      },
    }
  },
  args: {
    message:"divider",
    messagePosition:"center",
    messageTransform: "uppercase",
    color:"gray",
  }
}

export const Left = {
  parameters: {
    docs: {
      description: {
        story: 'Example How Divider component renderer when message position is left'
      },
      source: {
        code: `<Divider message="divider" message-position="left" color="gray" message-transform="uppercase" />`
      },
    }
  },
  args: {
    message:"divider",
    messagePosition:"left",
    messageTransform: "uppercase",
    color:"gray",
  },
};


export const Right = {
  parameters: {
    docs: {
      description: {
        story: 'Example How Divider component renderer when message position is right'
      },
      source: {
        code: `<Divider message="divider" message-position="right" color="gray" message-transform="uppercase" />`
      },
    }
  },
  args: {
    message:"divider",
    messagePosition:"right",
    messageTransform: "uppercase",
    color:"gray",
  },
};
