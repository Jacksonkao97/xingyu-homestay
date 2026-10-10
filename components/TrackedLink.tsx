"use client";

import { sendGAEvent } from "@next/third-parties/google";
import type { ComponentProps } from "react";

type TrackedLinkProps = ComponentProps<"a"> & {
  event: string;
  category: string;
  label: string;
};

/** An external link that reports a Google Analytics event when clicked. */
export default function TrackedLink({
  event,
  category,
  label,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      onClick={(e) => {
        sendGAEvent("event", event, {
          event_category: category,
          event_label: label,
        });
        onClick?.(e);
      }}
    />
  );
}
