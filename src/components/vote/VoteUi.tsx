"use client";

import { numberFormatter } from "@/config";
import { cn } from "@/lib/utils";
import { VoteType } from "@prisma/client";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

interface VoteUiProps {
  className?: string;
  userVote: VoteType | null;
  rating: number;
  updateVote: any;
  isLoading: boolean;
}

const VoteUi: React.FC<VoteUiProps> = ({
  userVote,
  rating,
  updateVote,
  className,
  isLoading,
}) => {
  return (
    <div
      className={cn(
        "flex w-fit items-center gap-1 rounded-md bg-slate-50",
        className,
      )}
    >
      <Button
        disabled={isLoading}
        size={"xs"}
        variant={"secondary"}
        className="bg-transparent"
      >
        <ArrowBigUp
          className={`${
            userVote === "UP"
              ? "fill-emerald-400 stroke-emerald-400"
              : "stroke-slate-700"
          }`}
          onClick={() => updateVote("UP")}
          size={24}
        />
      </Button>
      <span className="text-sm">{numberFormatter.format(rating)}</span>
      <Button
        disabled={isLoading}
        size={"xs"}
        variant={"secondary"}
        className="bg-transparent"
      >
        <ArrowBigDown
          className={`${
            userVote === "DOWN"
              ? "fill-rose-400 stroke-rose-400"
              : "stroke-slate-700"
          }`}
          onClick={() => updateVote("DOWN")}
          size={24}
        />
      </Button>
    </div>
  );
};

export default VoteUi;
