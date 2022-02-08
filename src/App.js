import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [carousel, setCarousel] = useState([
    {
      src: "https://wallpaper.dog/large/20493164.jpg",
      id: 1
    },
    {
      src: "http://wallpaperstock.net/animals_wallpapers_17750_1280x720.jpg",
      id: 2
    },
    {
      src: "https://wallpaper.dog/large/20493249.jpg",
      id: 3
    },
    {
      src: "https://cdn.wallpapersafari.com/22/32/57RTVk.jpg",
      id: 4
    },
    {
      src:
        "https://images.hdqwalls.com/download/super-cute-animals-1280x720.jpg",
      id: 5
    }
  ]);
  const [reverse, setReverse] = useState(true);
  useEffect(() => {
    reverse
      ? setReverse(true) &&
        setCarousel([
          {
            ...carousel[4],
            src: carousel[0].src
          },
          {
            ...carousel[0],
            src: carousel[1].src
          },
          {
            ...carousel[1],
            src: carousel[2].src
          },
          {
            ...carousel[2],
            src: carousel[3].src
          },
          {
            ...carousel[3],
            src: carousel[4].src
          }
        ])
      : setReverse(false) &&
        setCarousel([
          {
            ...carousel[1],
            src: carousel[0].src
          },
          {
            ...carousel[2],
            src: carousel[1].src
          },
          {
            ...carousel[3],
            src: carousel[2].src
          },
          {
            ...carousel[4],
            src: carousel[3].src
          },
          {
            ...carousel[0],
            src: carousel[4].src
          }
        ]);
  }, [reverse]);
  return (
    <div className="root">
      <div className="controlls">
        <div
          onClick={() => {
            !reverse
              ? setReverse(true)
              : setCarousel([
                  carousel[4],
                  carousel[0],
                  carousel[1],
                  carousel[2],
                  carousel[3]
                ]);
          }}
        ></div>
        <div
          onClick={() => {
            reverse
              ? setReverse(false)
              : setCarousel([
                  carousel[1],
                  carousel[2],
                  carousel[3],
                  carousel[4],
                  carousel[0]
                ]);
          }}
        ></div>
      </div>
      <div className={`carousel ${reverse && "carousel--reverse"}`}>
        {carousel.map((img) => {
          return <img className="carousel_img" src={img.src} key={img.id} />;
        })}
      </div>
    </div>
  );
}
