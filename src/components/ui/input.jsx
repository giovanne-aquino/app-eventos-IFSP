"use client";

import * as React from "react";
import IMask from "imask";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ width, className, type, label, maskOptions, ...props }, ref) => {
    const inputRef = React.useRef(null);

    React.useEffect(() => {
      if (maskOptions && inputRef.current) {
        const mask = IMask(inputRef.current, maskOptions);

        return () => {
          mask.destroy();
        };
      }
    }, [maskOptions]);

    return (
      <div className={width}>
        <label
          htmlFor={props.id}
          className="text-base text-FI_input_label font-semibold"
        >
          {label}
        </label>
        <input
          ref={(el) => {
            inputRef.current = el;
            if (typeof ref === "function") ref(el);
            else if (ref) ref.current = el;
          }}
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
