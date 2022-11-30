import { useContext } from "react";
import { Link } from "react-router-dom";
import TitleScreen from "../../components/TitleScreen/TitleScreen";
import { GameContext } from "../../context/GameContextProvider";
import "./HomepageStyle.scss";

const Homepage = () => {
  const { setGame } = useContext(GameContext);
  return (
    <div className="homepage">
      <TitleScreen />
      <div className="flex_space my-50">
        <Link
          to="/newgame"
          className="btn blue flex_center"
          onClick={() => setGame(undefined)}
        >
          <p className="mx-10">Start a game</p>
        </Link>
        <Link
          to="/games"
          className="btn light flex_center"
          onClick={() => setGame(undefined)}
        >
          <p className="mx-10">Join a game</p>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
