import config from "@/config";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center w-screen h-screen bg-background text-foreground">
      <h1 className="-mb-3 text-4xl font-bold">{config.name}</h1>
      <p>{config.jobTitle}</p>
      {config.description && (
        <p className="mt-2 max-w-[80%] font-sans leading-relaxed text-center sm:max-w-md">
          {config.description}
        </p>
      )}
      {config.email && (
        <Link
          href={`mailto:${config.email}`}
          className="hover:underline text-primary"
        >
          {config.email}
        </Link>
      )}
      {config.phoneNumber && (
        <nav className="flex fixed bottom-5 left-1/2 flex-col gap-3 justify-center items-center font-mono text-sm tabular-nums -translate-x-1/2 sm:flex-row">
          {" "}
          {typeof config.phoneNumber === "string" ? (
            <Link
              href={`tel:${config.phoneNumber}`}
              className="hover:underline hover:opacity-80"
            >
              {config.phoneNumber}
            </Link>
          ) : (
            config.phoneNumber.map((number, idx) => (
              <React.Fragment key={idx}>
                <Link
                  href={`tel:${number}`}
                  className="hover:underline hover:opacity-80"
                >
                  {number}
                </Link>
                {idx !== (config.phoneNumber?.length ?? 0) - 1 && (
                  <span className="hidden opacity-50 sm:inline-block">/</span>
                )}
              </React.Fragment>
            ))
          )}
        </nav>
      )}
    </div>
  );
}
