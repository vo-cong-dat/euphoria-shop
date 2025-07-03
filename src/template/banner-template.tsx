import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  banner: string;
  titlePage: string;
  description?: string;
}

export default function BannerTemplate({
  children,
  banner,
  titlePage,
  description,
}: IProps) {
  return (
    <div className="flex flex-1 bg-white">
      <div className="max-w-1/2">
        <img src={banner} alt="banner" className="h-full w-auto object-cover" />
      </div>
      <div className="mt-[60px] mr-[78px] mb-[88px] ml-[102px] max-w-[568px] flex-1 space-y-[50px]">
        <div className="space-y-2.5">
          <h2 className="text-[32px] font-semibold">{titlePage}</h2>
          {Boolean(description) && <span>{description}</span>}
        </div>
        {children}
      </div>
    </div>
  );
}
