"use client";

import { BlockMovies } from "@/components/shared/BlockMovies";
import { ListMoviesProps } from "./ListMovies.types";
import { useLovedFilms } from "@/hooks/use-loved-films";
import { UserCurrentNetflixUser } from "@/hooks/use-current-user";

export function ListMovies(props: ListMoviesProps) {
  const { movies } = props
  const { lovedFilmsByUser } = useLovedFilms();
  const { currentUser } = UserCurrentNetflixUser();
  const userNetflix = currentUser?.id;

  const lovedFilms = userNetflix ? lovedFilmsByUser[userNetflix] : [];




  return (
    <div>
      <BlockMovies
        title="peliculas favoritas"
        movies={lovedFilms}
        isMyList={true}
      />
      <BlockMovies
        title="peliculas  mas recientes"
        movies={movies}
        isMyList={false} />

    </div>
  );
}
