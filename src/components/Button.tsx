import React from "react";

export const Button = ({
   title,
   icon,
   variant = "default",
   onClick,
   className,
}: {
   title: string;
   className?: string;
   icon?: React.ReactNode;
   variant?: "default" | "outline" | "ghost";
   onClick?: () => void;
}) => {
   return (
      <button
         onClick={onClick}
         className={`${
            variant === "outline"
               ? "bg-transparent border border-neutral-400 hover:bg-neutral-100 text-neutral-800"
               : variant === "ghost"
               ? "bg-transparent hover:bg-neutral-200 text-neutral-800"
               : "bg-rose-500 hover:bg-rose-600 text-white border-0"
         } ${className} h-14 w-full text-sm lg:text-lg flex items-center justify-center gap-2 font-semibold py-2 px-8 rounded-lg duration-300 cursor-pointer`}
      >
         {icon && icon}
         {title}
      </button>
   );
};
