import React, { useState, useEffect } from "react";
import { useDebounce } from "react-use";
import Search from "./components/Search";
import Card from "./components/Card";
import Skeleton from "./components/Skeleton";
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [movieList, setMovieList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");

  useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchMovies = async (query = "") => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${query}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("failed to fetch movies..");
      }

      const data = await response.json();
      if (data.response == "False") {
        setErrorMessage(data.Error || "failed to fetch movies...");
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);
    } catch (e) {
      console.log(`error while fetching the movie ${e}`);
      setErrorMessage("error fetching movies. try again later...");
    } finally {
      setIsLoading(false);
    }
  };

  // this made every letter become an api request overloading the servers
  // useEffect(() => {
  //   fetchMovies(searchTerm);
  // }, [searchTerm]);

  // using debounce hoook that lets user continue typing without making request. in this case only makes requests every stop of half a second
  useEffect(() => {
    fetchMovies(debounceSearchTerm);
  }, [debounceSearchTerm]);
  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="" />
          <h1>
            Find the <span className="text-gradient">Movies</span> that you'll
            love
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="all-movies">
          <h2 className="mt-[40px]">ALL MOVIES</h2>
          {isLoading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
              {[...Array(3)].map((_, index) => (
                <Skeleton key={index} />
              ))}
            </div>
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
