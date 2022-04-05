import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Hero } from "../components/Hero";

export default {
  title: "Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

export const Primary: ComponentStory<typeof Hero> = () => <Hero />;
