import { Button } from "@/components/ui/button";

export const MainButton = ({ text }: { text: string }) => {
  return (
    <Button className="bg-main text-white uppercase font-medium text-base py-6 px-3.5">
      {text}
    </Button>
  );
};
