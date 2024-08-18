import { useEffect, useState } from "react";
import "./overview.scss";
import MovieTile from "./movie-tile/movie-tile";
import { getTop100Movies, serachMovieByTitle } from "./overview-service";

export type movieDetails = {
  id: string;
  title: string;
  rating?: number;
  year: number;
  imgUrl: string;
};

export default function Overview() {
  const [movieList, setMovieList] = useState<movieDetails[]>([]);
  const [searchText, setSearchText] = useState("");

  const getTop100MoviesData = () => {
    getTop100Movies({
      payload: {},
      successCb: (data: any) => {
        const movieData: movieDetails[] = data.data.list.map((item: any) => {
          return {
            id: item.title.id,
            title: item.title.titleText.text,
            rating: item.title.ratingsSummary.aggregateRating,
            year: item.title.releaseYear.year,
            imgUrl: item.title.primaryImage.imageUrl,
          };
        });
        setMovieList(movieData);
      },
      errorCb: () => {},
    });
  };

  const getSearchData = () => {
    serachMovieByTitle({
      payload: {
        query: searchText,
      },
      successCb(data) {
        const searchData: movieDetails[] = data.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          year: item.year,
          imgUrl: item.image,
        }));
        setMovieList(searchData);
      },
      errorCb(error) {
        console.log(error);
      },
    });
  };

  useEffect(() => {
    let timeoutId: any;
    if (searchText) {
      timeoutId = setTimeout(() => {
        getSearchData();
        console.log("hi");
      }, 500);
    } else {
      getTop100MoviesData();
    }

    return () => {
      if (searchText) clearTimeout(timeoutId);
    };
  }, [searchText]);

  return (
    <div className="overview">
      <section className="input-comp">
        <label>Search :</label>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </section>
      <section className="movie-list">
        {movieList.map((item: any) => {
          return <MovieTile key={item.id} data={item} />;
        })}
      </section>
    </div>
  );
}
