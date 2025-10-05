
import {ReactNode } from "react";

interface BoxProps {
    children:ReactNode,
    title?:string
}

export default function Box({ children, title }: BoxProps) {
  return (
    <div className="bg-white shadow-md p-6 rounded-3xl mt-2">
      {title && <h2 className="text-lg font-bold mb-4">{title}</h2>}
      <div className="flex items-center justify-center">
        <div className="flex-2">{children}</div>
      </div>
    </div>
  );
}