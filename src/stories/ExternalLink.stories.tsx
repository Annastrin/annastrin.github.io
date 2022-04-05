import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ExternalLink } from "../components/ExternalLink";

export default {
  title: "ExternalLink",
  component: ExternalLink,
} as ComponentMeta<typeof ExternalLink>;

export const Primary: ComponentStory<typeof ExternalLink> = () => (
  <ExternalLink href="#">Link</ExternalLink>
);
