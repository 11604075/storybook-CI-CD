import Input from "./Input";

export default {
  title: 'Form/Input',
  component: Input,
};

export const Small = {
  args: {
    size: 'small',
    placeholder: ''
  },
};


export const Medium = {
  args: {
    size: 'medium',

  },
};


export const Large = {
  args: {
    size: 'large',

  },
};

Small.storyName = "Small Input"