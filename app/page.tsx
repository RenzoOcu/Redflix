import { Navbar } from "@/components/shared/Navbar";
import { SliderVideo } from "./(routes)/(home)/components/SliderVideo";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { TrendingMovies } from "./(routes)/(home)/components/TrendingMovies";
import { ListMovies } from "./(routes)/(home)/components/ListMovies";


export default async function Home() {
  const session = await  auth();


  if(!session || !session.user ||  !session.user.id){
    return redirect("/login")
  }


  const usersNetflix = await  db.userNetflix.findMany({
    where:{
      userId:session.user.id,

    },
  });

  const movies= await  db.movie.findMany()
  const  trendingMovies = await db.popularMovie.findMany({
    orderBy:{ranking:"asc"},

  });
  console.log( {movies });
  console.log({trendingMovies});

  return (
   <div className="relative bg-zinc-900">
    <Navbar user ={usersNetflix} />
    <SliderVideo />
    <TrendingMovies movies={trendingMovies}/>
    <ListMovies  movies={movies}/>
   </div>
  );
}
