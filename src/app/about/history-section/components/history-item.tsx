import React from "react";
import Image from "next/image";

type THistoryItemProps = {
  itemImage: string;
  itemDescription: string;
};

export const HistoryItem = ({
  itemImage,
  itemDescription,
}: THistoryItemProps) => {
  return (
    <div className="flex items-center gap-6 bg-black">
      <div className="rounded-full bg-night-rider flex shrink-0 justify-center items-center w-20 h-20">
        <Image width={32} height={32} src={itemImage} alt="history item" />
      </div>

      <p className="text-stone-400 max-w-md text-base md:text-lg">
        {itemDescription}
      </p>
    </div>
  );
};
