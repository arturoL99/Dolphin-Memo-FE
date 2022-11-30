import { useContext } from "react";
import { GameContext } from "../../context/GameContextProvider";
import ImageSelector from "../ImageSelector/ImageSelector";

const NewGameInputs = () => {
  const { setNewGame } = useContext(GameContext);
  const handleChange = (e: any): void => {
    setNewGame(e);
  };

  return (
    <section className="my-50">
      <label htmlFor="gameName">
        <h2>Name your game</h2>
        <input
          type="text"
          name="gameName"
          id="gameName"
          required
          placeholder="Game name"
          className="text_input mb-50"
          onChange={handleChange}
        />
      </label>
      <h2 className="my-10">Choose an image for your game</h2>
      <ImageSelector setNewGame={setNewGame} />
      {/* </label> */}
    </section>
  );
};

export default NewGameInputs;
