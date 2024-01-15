import { signInCredentials } from "@actions/signInCredentials";
import { Avatar } from "@ui/hera/Avatar";
import { Badge } from "@ui/hera/Badge";
import { Button } from "@ui/hera/Button";
import { Checkbox, CheckboxField, CheckboxGroup } from "@ui/hera/Checkbox";
import { DarkModeToggle } from "@ui/hera/DarkModeToggle";
import { Dialog } from "@ui/hera/Dialog";
import { FieldSet, Legend } from "@ui/hera/Fieldset";
import { Heading } from "@ui/hera/Heading";
import { Input } from "@ui/hera/Input";
import { Label } from "@ui/hera/Label";
import { Radio, RadioField, RadioGroup } from "@ui/hera/Radio";
import { Option, Select } from "@ui/hera/Select";
import { Code, Strong, Text, TextLink } from "@ui/hera/Text";
import { TextArea } from "@ui/hera/TextArea";

export default function Page() {
  return (
    <main className="ml-4">
      <DarkModeToggle />
      <Avatar className="size-10" sizes="40px" src="https://avatars.githubusercontent.com/u/10660468?v=4" />
      <Badge color="red">admin</Badge>

      <Heading>Dashboard</Heading>
      <Heading level={2}>Example</Heading>
      <Heading level={3}>Button colors</Heading>
      <Text>
        This feature is only available to users on the <Strong>Business Plan</Strong>. To upgrade your plan, visit your{" "}
        <TextLink href="/settings">billing settings</TextLink>.
      </Text>
      <Text>
        Your new API token is <Code>BaVrRKpRMS_ndKU</Code>. Store this token somewhere safe as it will only be displayed
        once.
      </Text>

      <Dialog>
        <Heading level={2}>Hello world</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nostrum ratione quia reprehenderit totam
          dicta reiciendis ab quibusdam optio libero dolores itaque ipsam ipsa, nobis accusantium unde adipisci
          veritatis quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, repudiandae minima maiores sed
          aperiam velit possimus. Debitis tenetur, asperiores molestiae eveniet eos facilis repellat quisquam id nostrum
          aliquam voluptatibus nihil.
        </Text>
      </Dialog>

      <form action={signInCredentials} className="flex w-1/2 flex-col gap-y-3">
        <FieldSet>
          <Label>Name</Label>
          <Input name="test" />
          <Text as="description">This is a description</Text>
        </FieldSet>

        <FieldSet>
          <Label>Textarea</Label>
          <TextArea name="test" />
        </FieldSet>

        <FieldSet>
          <Label>Selection</Label>
          <Select>
            <Option>Active</Option>
            <Option>Paused</Option>
          </Select>
        </FieldSet>

        <FieldSet>
          <Legend>Discoverability</Legend>
          <Text>Decide where your events can be found across the web.</Text>
          <CheckboxGroup>
            <CheckboxField>
              <Checkbox name="discoverability" value="show_on_events_page" />
              <Label>Show on events page</Label>
              <Text as="description">Make this event visible on your profile.</Text>
            </CheckboxField>
            <CheckboxField isDisabled>
              <Checkbox name="discoverability" value="allow_embedding" />
              <Label>Allow embedding</Label>
              <Text as="description">Allow others to embed your event details on their own site.</Text>
            </CheckboxField>
          </CheckboxGroup>
        </FieldSet>

        <FieldSet>
          <Legend>Resale and transfers</Legend>
          <Text>Decide if people buy tickets from you or from scalpers.</Text>
          <RadioGroup name="resale">
            <RadioField>
              <Radio value="permit" />
              <Label>Allow tickets to be resold</Label>
              <Text as="description">
                Customers can resell or transfer their tickets if they can’t make it to the event.
              </Text>
            </RadioField>
            <RadioField>
              <Radio value="forbid" />
              <Label>Don’t allow tickets to be resold</Label>
              <Text as="description">Tickets cannot be resold or transferred to another person.</Text>
            </RadioField>
          </RadioGroup>
        </FieldSet>

        <Button type="submit">Submit</Button>
      </form>
    </main>
  );
}
