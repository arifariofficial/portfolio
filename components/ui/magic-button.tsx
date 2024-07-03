import { cn } from "@/lib/utils";

interface MagicButtonProps {
  className?: string;
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
}

const MagicButton = ({
  className,
  title,
  icon,
  position,
  handleClick,
}: MagicButtonProps) => {
  return (
    <div>
      <button
        type="button"
        className={cn(
          className,
          "md:mt10 relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] md:w-60",
        )}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl">
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </button>
    </div>
  );
};
export default MagicButton;
