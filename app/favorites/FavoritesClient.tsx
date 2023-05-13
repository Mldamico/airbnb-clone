"use client";
import React from "react";
import { SafeListing, SafeUser } from "../types/index";
import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";

interface FavoritesClientProps {
  favorites: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavoritesClient = ({ favorites, currentUser }: FavoritesClientProps) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you have favorited" />
      <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {favorites.map((favorite) => (
          <ListingCard
            key={favorite.id}
            currentUser={currentUser}
            data={favorite}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesClient;
