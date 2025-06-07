import DetailedBrain from "./DetailedBrain";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
  onInteraction?: () => void;
  active?: boolean
}
export default function InteractiveBrain({
  className,
  onInteraction,
  active,
}: Props) {
  return (
    <div
      className={cn(
        "w-32 h-32 mx-auto relative",
        className,
        active && "animate-brain-spin"
      )}
      onClick={() => onInteraction?.()}
    >
      <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 animate-pulse-soft" />
      <div className="absolute inset-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
        <DetailedBrain className="w-20 h-20 text-white" aria-hidden="true" />
      </div>
    </div>
  );
}
