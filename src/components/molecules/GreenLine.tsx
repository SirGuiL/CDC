import { GreenLineSpan } from "../atoms/GreenLineSpan";

export const GreenLine = () => {
  return (
    <div className="bg-primary md:flex w-full h-28 justify-center gap-24 hidden">
      <div className="flex items-center lg:w-256 w-full justify-between">
        <GreenLineSpan text="Identidade Visual" />
        <GreenLineSpan text="Fotografia" />
        <GreenLineSpan text="Criação de Sites" />
      </div>
    </div>
  );
};
