"use client";

import { useState } from "react";

import classRoom1 from "@/../public/img/classrom-1.png";
import classRoom2 from "@/../public/img/classrom-2.png";
import classRoom3 from "@/../public/img/classrom-3.png";
import classRoom4 from "@/../public/img/classrom-4.png";

import library1 from "@/../public/img/library-1.png";
import library2 from "@/../public/img/library-2.png";
import library3 from "@/../public/img/library-3.png";
import library4 from "@/../public/img/library-4.png";

import science1 from "@/../public/img/science-1.png";
import science2 from "@/../public/img/science-2.png";
import science3 from "@/../public/img/science-3.png";
import science4 from "@/../public/img/science-4.png";

import computerLab1 from "@/../public/img/computer-lab-1.png";
import computerLab2 from "@/../public/img/computer-lab-2.png";
import computerLab3 from "@/../public/img/computer-lab-3.png";
import computerLab4 from "@/../public/img/computer-lab-4.png";

import garden1 from "@/../public/img/garden-1.png";
import garden2 from "@/../public/img/garden-2.png";
import garden3 from "@/../public/img/garden-3.png";
import garden4 from "@/../public/img/garden-4.png";
import RoomFilters from "./RoomFilters";
import Room from "./Room";

export default function RoomsGallery() {
  const [filterRoom, setFilterRoom] = useState("all");

  function filterRoomsHandler(filter) {
    setFilterRoom(filter.toLowerCase());
  }

  return (
    <div>
      <RoomFilters filterRoomsBy={filterRoomsHandler} />
      <div className="mt-[120px] space-y-[120px] xl:mt-[150px] xl:space-y-[150px] 2xl:space-y-[200px]">
        {rooms
          .filter((room) => {
            if (filterRoom == "all") {
              return true;
            }

            return room.title.toLowerCase() == filterRoom;
          })
          .map((room) => (
            <Room
              key={room.title}
              images={room.images}
              title={room.title}
              description={room.description}
            />
          ))}
      </div>
    </div>
  );
}

const rooms = [
  {
    images: [classRoom1, classRoom2, classRoom3, classRoom4],
    title: "Classrooms",
    description:
      "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
  },
  {
    images: [library1, library2, library3, library4],
    title: "Library",
    description:
      "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
  },
  {
    images: [science1, science2, science3, science4],
    title: "Science Lab",
    description:
      "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
  },
  {
    images: [computerLab1, computerLab2, computerLab3, computerLab4],
    title: "Computer Lab",
    description:
      "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills",
  },
  {
    images: [garden1, garden2, garden3, garden4],
    title: "Garden and Nature Area",
    description:
      "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
  },
];
