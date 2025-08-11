import { StaticImageData } from "next/image";
import photo1 from "./photos/1.png";
import photo2 from "./photos/2.png";
import photo3 from "./photos/3.png";
import photo4 from "./photos/4.png";
import photo5 from "./photos/5.png";

export type WonderImage = {
  id: number;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: 1,
    name: "Wonder image 1",
    src: photo1,
    photographer: "photographer 1",
    location: "Location 1",
  },
  {
    id: 2,
    name: "Wonder image 2",
    src: photo2,
    photographer: "photographer 2",
    location: "Location 2",
  },
  {
    id: 3,
    name: "Wonder image 3",
    src: photo3,
    photographer: "photographer 3",
    location: "Location 3",
  },
  {
    id: 4,
    name: "Wonder image 4",
    src: photo4,
    photographer: "photographer 4",
    location: "Location 4",
  },
  {
    id: 5,
    name: "Wonder image 5",
    src: photo5,
    photographer: "photographer 5",
    location: "Location 5",
  },
];

export default wondersImages;
