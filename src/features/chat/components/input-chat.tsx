import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import { useChat } from "~/features/chat/hooks/use-chat";

const languages = [
  { lang: "English", tier: "free" },
  { lang: "Spanish", tier: "free" },
  { lang: "French", tier: "free" },
  { lang: "Korean", tier: "pro" },
  { lang: "Chinese", tier: "pro" },
  { lang: "Japanese", tier: "pro" },
  { lang: "Russian", tier: "pro" },
];

const accurancy = [
  { level: "Begineer", tier: "free" },
  { level: "Intermediate", tier: "free" },
  { level: "Advanced", tier: "pro" },
  { level: "Native", tier: "pro" },
];

export function InputChat() {
  const { inputForm, onSubmit } = useChat();

  return (
    <Form {...inputForm}>
      <form onSubmit={inputForm.handleSubmit(onSubmit)} className="w-full">
        <FormField
          name="message"
          control={inputForm.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Input</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Hoy es un gran día..." />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex w-full gap-x-1 mt-1">
          <FormField
            name="accurancy"
            control={inputForm.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Accurancy level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {accurancy.map(({ level, tier }, index) => (
                      <SelectItem
                        key={index}
                        value={level}
                        disabled={tier === "pro"}
                      >
                        <span>{level}</span>
                        <span className="text-xs border border-neutral-200 px-1 rounded">
                          {tier}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            name="lang"
            control={inputForm.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Translate to" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {languages.map(({ lang, tier }, index) => (
                      <SelectItem
                        key={index}
                        value={lang}
                        disabled={tier === "pro"}
                      >
                        <span>{lang}</span>
                        <span className="text-xs border border-neutral-200 px-1 rounded">
                          {tier}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <Button type="submit">Translate</Button>
        </div>
      </form>
    </Form>
  );
}
