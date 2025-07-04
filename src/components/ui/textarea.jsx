import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ width, label, className, ...props }, ref) => {
  return (
    <div className={width}>
      <label
        htmlFor={props.id}
        className="text-base text-FI_input_label font-semibold"
      >
        {label}
      </label>
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props} />
    </div>
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
