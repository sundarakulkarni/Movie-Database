import React, { useEffect } from "react";
import { useState } from "react";
import MovieTile from "../overview/movie-tile/movie-tile";
import { getLocalStorageItem } from "../../helpers/helpers";
import "./watchlist.scss";

export default function WatchList() {
  const [movieList, setMovieList] = useState<any>({});

  useEffect(() => {
    getWatchlist();
  }, []);

  const getWatchlist = () => {
    const watchlist = getLocalStorageItem("watchlist");
    setMovieList(watchlist);
  };

  return (
    <div className="watchlist-page">
      <div className="movie-list">
        {Object.keys(movieList).length ? (
          Object.keys(movieList).map((item) => {
            return (
              <React.Fragment key={item}>
                <MovieTile data={movieList[item]} onRemove={getWatchlist} />
              </React.Fragment>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
