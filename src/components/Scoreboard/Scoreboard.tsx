import { FC, useContext, useState } from "react";
import { GameContext } from "../../context/GameContextProvider";
import { AvatarSvg } from "../../types/AvatarType/AvatarType";
import { freeAvatars, AllAvatars } from "../../utils/ImagesUtils";
import Loading from "../Loading/Loading";
import ScoreLine from "./ScoreLine";

interface Props {
  winner: string | undefined;
}

const Scoreboard: FC<Props> = ({ winner }) => {
  const { game } = useContext(GameContext);
  const [freeAvatar, setFreeAvatars] = useState<AvatarSvg[]>(
    freeAvatars(game?.avatar || "")
  );

  const nParticipants = game ? parseInt(game.nPartecipants, 10) : 0;

  if (nParticipants && game) {
    const imgForCreator: string =
      AllAvatars.find((avatar: AvatarSvg) => avatar.name === game.avatar)
        ?.img || "image not found";

    return (
      <section className="scoreboard_container">
        <ScoreLine
          avatar={game.avatar}
          img={imgForCreator}
          join={game.listGamers?.at(0)?.avatar === game.avatar}
          winner={winner}
        />
        {[...Array(nParticipants - 1)].map((i, index) => {
          const freeAvatarUser: AvatarSvg | undefined = freeAvatar.at(index);
          return (
            <ScoreLine
              avatar={freeAvatarUser?.name || "avatar not found"}
              img={freeAvatarUser?.img || "image not found"}
              join={
                !!game.listGamers?.find(
                  (gamer) => gamer.avatar === freeAvatarUser?.name
                )
              }
              key={freeAvatarUser?.name}
              winner={winner}
            />
          );
        })}
      </section>
    );
  }
  return <Loading />;
};
export default Scoreboard;
