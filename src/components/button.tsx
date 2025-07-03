import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer rounded-lg justify-center gap-3 whitespace-nowrap text-lg leading-[100%] font-medium transition-all disabled:pointer-events-none [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-100 hover:shadow-button text-white hover:bg-primary-200 focus-visible:bg-primary-200 disabled:bg-grey-100 disabled:text-grey-200",
        secondary:
          "border-secondary-100 text-primary-100 border bg-white hover:bg-primary-100/3 focus-visible:bg-primary-100/3 disabled:bg-grey-100 disabled:text-grey-200 disabled:border-0",
        ghost:
          "bg-transparent text-primary-100 hover:shadow-button hover:bg-primary-200/3 focus-visible:bg-primary-200/3 disabled:bg-transparent disabled:text-grey-200",
        link: "text-primary underline-offset-4 hover:underline",
        elevated:
          "bg-white shadow-button text-primary-100 hover:bg-primary-200/3 focus-visible:bg-primary-200/3 disabled:bg-grey-100 disabled:text-grey-200",
      },
      size: {
        default: "px-5 py-4 h-[54px]",
        icon: "h-11 p-3",
        small: "h-11.5 py-3 px-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  startIcon,
  endIcon,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {startIcon}
      <Slottable>{children}</Slottable>
      {endIcon}
    </Comp>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
