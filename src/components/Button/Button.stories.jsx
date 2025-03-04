import Button from "./Button";

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button'
  }
}
export const Primary = {
  args: {
    variant: 'primary',
  },
};


export const Secondary = {
  args: {
    variant: 'secondary',
  },
};


export const Success = {
  args: {
    variant: 'success',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
  },
};

const Template = args => <Button {...args}/>

export const PrimaryA = Template.bind({})
PrimaryA.args = {
  variant: 'primary',
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
  ...PrimaryA.args,


}
