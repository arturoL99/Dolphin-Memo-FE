import { FC } from "react";
import logo from "../../images/logo.svg";
import "./TitleScreenStyle.scss";

const TitleScreen: FC = () => {
  return (
    <div className="titleScreen my-50">
      <img src={logo} alt="logo" />
      <h1>Dolphin M3M0 game</h1>
      <p>Challenge your friends and random gamers in this card memory game!</p>
      <p>Please mind that this game can cause addiction.</p>
    </div>
  );
};
export default TitleScreen;
