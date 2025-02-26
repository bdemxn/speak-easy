import { Avatar, AvatarFallback } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export function AvatarApp() {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarFallback>KB</AvatarFallback>
        </Avatar>
      </PopoverTrigger>

      <PopoverContent>
        <span>Hola mundo</span>
      </PopoverContent>
    </Popover>
  );
}
