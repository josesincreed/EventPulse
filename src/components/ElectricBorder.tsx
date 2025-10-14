import { ReactNode, CSSProperties } from "react";

interface ElectricBorderProps {
  children: ReactNode;
  color?: string;
  speed?: number;
  chaos?: number;
  thickness?: number;
  style?: CSSProperties;
}

export default function ElectricBorder({
  children,
  color = "#7df9ff",
  speed = 1,
  chaos = 0.5,
  thickness = 2,
  style = {},
}: ElectricBorderProps) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: style.borderRadius || 0,
        padding: thickness,
        ...style,
      }}
      className="relative"
    >
      <div
        className="absolute inset-0"
        style={{
          border: `${thickness}px solid ${color}`,
          borderRadius: style.borderRadius || 0,
          animation: `electric-border ${speed}s infinite`,
        }}
      />
      <div style={{ position: "relative" }}>{children}</div>
      <style>
        {`
          @keyframes electric-border {
            0% { box-shadow: 0 0 2px ${color}, 0 0 5px ${color}; }
            50% { box-shadow: 0 0 4px ${color}, 0 0 10px ${color}; }
            100% { box-shadow: 0 0 2px ${color}, 0 0 5px ${color}; }
          }
        `}
      </style>
    </div>
  );
}
