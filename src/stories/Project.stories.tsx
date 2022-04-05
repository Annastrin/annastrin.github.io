import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Project } from "../components/Project";

export default {
  title: "Project",
  component: Project,
} as ComponentMeta<typeof Project>;

const Template: ComponentStory<typeof Project> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Project {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  image: "#",
  imageHeight: "",
  imageWidth: "",
  name: "Test project",
  description: "This is a test project for Storybook",
  technologies: [{ text: "HTML" }, { text: "CSS" }],
  link: "#",
  code: "#",
};
