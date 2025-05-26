import React from 'react';
import Image from "next/image";

export const HeroAdvantagesCards = () => {
    return (
        <div className="self-stretch flex flex-col items-center justify-start max-w-full text-left text-[1.5rem] mq450:gap-[1.25rem] mq800:gap-[2.438rem]">
            <div className="self-stretch shadow-[0px_1px_4px_rgba(255,_255,_255,_0.15)] rounded-lg bg-darkslategray-200 flex flex-row items-center justify-center py-[2.5rem] px-[3rem] box-border gap-[4rem] max-w-full mq450:gap-[1rem] mq800:gap-[2rem]">
                <div className="border-lightgray border-solid border-r-[1px] border-l-[1px] box-border flex flex-row items-center justify-center py-[0rem] px-[2.937rem] gap-[1.5rem] max-w-full mq450:flex-wrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                    <div className="h-[4rem] w-[4rem] relative shrink-0 overflow-hidden flex items-center justify-center">
                        <Image
                            className="h-full w-full overflow-hidden shrink-0 object-cover absolute left-[0rem] top-[0rem] [transform:scale(1)]"
                            loading="lazy"
                            fill
                            alt=""
                            src="/icontractor.svg"
                        />
                    </div>
                    <div className="w-[12.813rem] flex flex-col items-start justify-center">
                        <h3 className="m-0 self-stretch h-[1.75rem] relative text-[length:inherit] uppercase font-bold font-[inherit] flex items-center mq450:text-[1.188rem]">
                            100% автономність
                        </h3>
                        <div className="w-[13.5rem] relative text-[1rem] leading-[160%] font-roboto text-gray-100 flex items-center">
                            Закритий цикл виробництва
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[1.5rem]">
                    <div className="h-[4rem] w-[4rem] relative overflow-hidden flex items-center justify-center">
                        <Image
                            className="h-full w-full object-cover absolute left-[0rem] top-[0rem] [transform:scale(1)]"
                            loading="lazy"
                            fill
                            alt=""
                            src="/iconshop.svg"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <h3 className="m-0 self-stretch h-[1.75rem] relative text-[length:inherit] uppercase font-bold font-[inherit] flex items-center mq450:text-[1.188rem]">
                            Фірмові магазини
                        </h3>
                        <div className="self-stretch relative text-[1rem] leading-[160%] font-roboto text-gray-100 flex items-center">
                            8 магазини з продукцією
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
