import dog from "../images/dog.svg";
import dolphin from "../images/dolphin.svg";
import hat from "../images/hat.svg";
import lion from "../images/lion.svg";
import lionBg from "../images/lion-bg.webp";
import dolphinBg from "../images/dolphin-bg.png";
import einsteinBg from "../images/einstein-bg.jpg";
import brainBg from "../images/brain-bg.jpg";
import { AvatarSvg } from "../types/AvatarType/AvatarType";

export const AllAvatars: AvatarSvg[] = [
  { name: "dog", img: dog },
  { name: "dolphin", img: dolphin },
  { name: "lion", img: lion },
  { name: "hat", img: hat },
];

export const bgImgs: AvatarSvg[] = [
  { name: "lionBg", img: lionBg },
  { name: "dolphinBg", img: dolphinBg },
  { name: "einsteinBg", img: einsteinBg },
  { name: "brainBg", img: brainBg },
];

export const freeAvatars = (name: string) => {
  const freeAvatar = [...AllAvatars];
  const userIndex = AllAvatars.findIndex((img) => img.name === name);
  freeAvatar.splice(userIndex, 1);
  return freeAvatar;
};
