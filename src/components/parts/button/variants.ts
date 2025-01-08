import { tv } from "tailwind-variants";

export const button = tv({
  base: "text-center",
  variants: {
    size: {
      small: "text-sm p-2 rounded",
      medium: "text-base p-4 rounded-lg",
      large: "text-xl p-6 rounded-xl",
    },
    disabled: {
      true: "bg-gray-300 text-gray-400",
      false: "bg-gray-800 text-white",
    }
  },
  defaultVariants: {
    size: "medium",
    disabled: false,
  }
})
