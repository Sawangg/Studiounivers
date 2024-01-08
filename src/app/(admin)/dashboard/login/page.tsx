import { signInCredentials } from "@actions/signInCredentials";
import { Avatar } from "@ui/hera/Avatar";
import { Badge } from "@ui/hera/Badge";
import { Button } from "@ui/hera/Button";
// import { Checkbox } from "@ui/hera/Checkbox";
import { DarkModeToggle } from "@ui/hera/DarkModeToggle";
import { Field } from "@ui/hera/FieldSet";
import { Heading } from "@ui/hera/Heading";
import { Input } from "@ui/hera/Input";
import { Label } from "@ui/hera/Label";
import { Radio, RadioGroup } from "@ui/hera/Radio";
import { Code, Strong, Text, TextLink } from "@ui/hera/Text";
import { TextArea } from "@ui/hera/TextArea";

export default function Page() {
  return (
    <>
      <DarkModeToggle />
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
      <Badge color="red">admin</Badge>
      <Avatar className="size-10" sizes="40px" src="https://avatars.githubusercontent.com/u/10660468?v=4" />
      <form action={signInCredentials}>
        <Field>
          <Label>Name</Label>
          <Input name="test" />
          <Text as="description">This is a description</Text>
        </Field>
        <Field>
          <Label>Textarea</Label>
          <TextArea name="test" />
        </Field>
        {/* <Checkbox name="rememberMe">Test</Checkbox> */}
        <RadioGroup name="lol">
          <Radio value="test" />
          <Radio value="test2" />
        </RadioGroup>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
