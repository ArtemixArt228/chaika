import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface IMainButtonProps extends ComponentProps<typeof Button> {
  text: string;
}

export const MainButton = ({ text, className, ...props }: IMainButtonProps) => {
  return (
    <Button
      className={cn(
        "bg-main text-white uppercase font-medium text-base py-6 px-3.5",
        className,
      )}
      {...props}
    >
      {text}
    </Button>
  );
};
