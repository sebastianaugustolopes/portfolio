import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground border-border",
        glow: "border-primary/50 bg-primary/10 text-primary shadow-[0_0_10px_hsl(var(--primary)/0.3)]",
        tech: "border-border/50 bg-secondary/50 text-foreground hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)]",
        gradient: "border-transparent bg-gradient-to-r from-primary/20 to-accent/20 text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
