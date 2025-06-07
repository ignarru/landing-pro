import { useRef } from "react";
import Tilt from "react-parallax-tilt";
import DetailedBrain from "./DetailedBrain";

interface Props {
  className?: string;
  onInteraction?: () => void;
}

export default function InteractiveBrain({ className, onInteraction }: Props) {
  const tiltRef = useRef<Tilt | null>(null);

  return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.45}
      glareColor="#ffffff"
      glareBorderRadius="9999px"
      scale={1.1}
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      trackOnWindow
      className={className}
      onEnter={() => onInteraction?.()}
      ref={tiltRef}
    >
      <div className="w-32 h-32 mx-auto relative">
        <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 animate-pulse-soft" />
        <div className="absolute inset-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
          <DetailedBrain className="w-20 h-20 text-white" aria-hidden="true" />
        </div>
      </div>
    </Tilt>
  );
}
