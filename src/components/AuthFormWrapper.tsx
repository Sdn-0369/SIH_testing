"use client";
import React from "react";
import { cn } from "@/lib/utils";

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

export const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

interface AuthFormWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  submitButtonText: string;
  socialButtons?: React.ReactNode;
}

export default function AuthFormWrapper({
  children,
  title,
  description,
  onSubmit,
  submitButtonText,
  socialButtons,
}: AuthFormWrapperProps) {
  return (

    <div className="shadow-none mx-auto w-full max-w-md rounded-xl border border-neutral-700 bg-[#1D1D1F] p-8">

      <h2 className="text-3xl font-bold text-white text-center">
        {title}
      </h2>
      <p className="mt-4 max-w-sm text-base text-neutral-400 text-center">
        {description}
      </p>

      <form className="my-8" onSubmit={onSubmit}>
        {children}

        <button
          className="relative block h-10 w-full rounded-lg cursor-pointer bg-neutral-100 text-neutral-900 font-semibold shadow-none hover:bg-neutral-200 transition-colors duration-200 text-base"
          type="submit"
        >
          {submitButtonText}
          <BottomGradient />
        </button>

        {socialButtons && (
          <>
            <div className="relative my-8 h-[1px] w-full bg-neutral-700">
              <div className="absolute inset-x-0 bg-[#1D1D1F] px-4 text-center" style={{ top: '50%', transform: 'translateY(-50%)' }}>
                <span className="text-neutral-400 text-sm">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              {socialButtons}
            </div>
          </>
        )}
      </form>
    </div>
  );
}