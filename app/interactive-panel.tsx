"use client";

import type { PointerEvent as ReactPointerEvent, PropsWithChildren } from "react";
import { useRef } from "react";

type InteractivePanelProps = PropsWithChildren<{
  className?: string;
}>;

export default function InteractivePanel({
  children,
  className = "",
}: InteractivePanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const element = panelRef.current;

    if (!element) {
      return;
    }

    const bounds = element.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const rotateX = (0.5 - y) * 12;
    const rotateY = (x - 0.5) * 16;

    element.style.setProperty("--panel-rotate-x", `${rotateX.toFixed(2)}deg`);
    element.style.setProperty("--panel-rotate-y", `${rotateY.toFixed(2)}deg`);
    element.style.setProperty("--panel-glow-x", `${(x * 100).toFixed(2)}%`);
    element.style.setProperty("--panel-glow-y", `${(y * 100).toFixed(2)}%`);
  }

  function resetPanel() {
    const element = panelRef.current;

    if (!element) {
      return;
    }

    element.style.setProperty("--panel-rotate-x", "0deg");
    element.style.setProperty("--panel-rotate-y", "0deg");
    element.style.setProperty("--panel-glow-x", "50%");
    element.style.setProperty("--panel-glow-y", "50%");
  }

  return (
    <div
      ref={panelRef}
      className={`interactivePanel ${className}`.trim()}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPanel}
    >
      {children}
    </div>
  );
}
