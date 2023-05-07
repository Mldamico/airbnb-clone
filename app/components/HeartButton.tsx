"use client";

import React from "react";
import { SafeUser } from "../types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeartButtonProps {
  currentUser?: SafeUser | null;
  listingId: string;
}

const HeartButton = ({ currentUser, listingId }: HeartButtonProps) => {
  const hasFavorited = false;
  const toggleFavorite = () => {};
  return (
    <div
      onClick={toggleFavorite}
      className="relative transition cursor-pointer hover:opacity-80"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />

      <AiFillHeart
        size={24}
        className={hasFavorited ? "fill-rose-500" : "fillneutral500/70"}
      />
    </div>
  );
};

export default HeartButton;
