import { useInView } from "react-intersection-observer";
import "./movie-tile.scss";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../../helpers/helpers";
import { useLocation } from "react-router-dom";
import { movieDetails } from "../overview";

type MovieTitleProps = {
  data: movieDetails;
  onRemove?: () => void;
};
export default function MovieTile(props: MovieTitleProps) {
  const [ref, inView] = useInView();
  const location = useLocation();

  const addToWatchList = () => {
    const watchlist = getLocalStorageItem("watchlist");

    setLocalStorageItem("watchlist", {
      ...watchlist,
      [props.data.id]: props.data,
    });
  };

  const removeFromWatchList = () => {
    const watchlist = getLocalStorageItem("watchlist");
    delete watchlist[props.data.id];
    setLocalStorageItem("watchlist", watchlist);
    if (props.onRemove) props.onRemove();
  };

  return (
    <article className="movie-tile" ref={ref}>
      {inView && (
        <>
          <div className="poster-container">
            <img src={props.data.imgUrl} alt="" />
          </div>
          <div className="rating-and-watchlist">
            {props.data.rating && (
              <div className="rating-container">
                <img src="src/assets/icons/star.svg" alt="" />
                {props.data.rating}
              </div>
            )}
            <span>{props.data.year}</span>
            <div className="add-to-watchlist">
              {location.pathname === "/overview" ? (
                <img
                  src="src/assets/icons/add-to-watchlist.svg"
                  alt=""
                  onClick={addToWatchList}
                />
              ) : (
                <img
                  src="src/assets/icons/remove-from-watchlist.svg"
                  alt=""
                  onClick={removeFromWatchList}
                />
              )}
            </div>
          </div>
          <div className=" title marquee">
            <span>{props.data.title}</span>
          </div>
        </>
      )}
    </article>
  );
}
