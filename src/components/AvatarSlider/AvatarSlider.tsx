import { useState } from "react";
import { AllAvatars } from "../../utils/ImagesUtils";
import Avatar from "./Avatar";
import "./AvatarSliderStyle.scss";

const AvatarSlider = () => {
  const [selected, setSelected] = useState("lion");
  return (
    <section className="avatarSlider my-50">
      <h2 className="my-20">Choose your avatar</h2>
      <div className="slider">
        {[...Array(4)].map((i, index) => {
          return (
            <Avatar
              avatar={AllAvatars.at(index)?.name}
              img={AllAvatars.at(index)?.img}
              selected={selected}
              setSelected={setSelected}
              key={AllAvatars.at(index)?.name}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AvatarSlider;
