import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Contacts } from "../components/Contacts";

export default {
  title: "Contacts",
  component: Contacts,
} as ComponentMeta<typeof Contacts>;

export const Primary: ComponentStory<typeof Contacts> = () => <Contacts />;
