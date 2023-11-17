import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import MusicBlock from "./MusiqueBlock";
import "./Home.css"

interface MusicData {
    attributes : {
      singer: {
        data : {
          attributes : {
            Name : string
          }
        }
      };
      Song: string;
      Color: string;
      Fav: boolean;
      ReleaseDate: string;
      YoutubeLink : string;
    }

  }

const Home = () => {
  const [tabMusiquesDataAlphabetic, setTabMusiquesDataAlphabetic] = useState<MusicData[]>([]);
  const [tabMusiquesDataByFav, setTabMusiquesDataByFav] = useState<MusicData[]>([]);

  
  const navigate = useNavigate();


  useEffect(() => {
    const fetchDataByAlphabetic = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/musiques?populate=*&sort=Song:desc", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
          const data = await response.json();
          console.log("music data " , data.data);
          
          // Ensure that data is an array before updating the state
          if (Array.isArray(data.data)) {
            setTabMusiquesDataAlphabetic(data.data);
          } else {
            console.error("Fetched data is not an array:", data);
          }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    const fetchDataByFav = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/musiques?populate=*&filters[Fav][$eq]=true", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
          const data = await response.json();
          console.log("music data " , data.data);
          
          // Ensure that data is an array before updating the state
          if (Array.isArray(data.data)) {
            setTabMusiquesDataByFav(data.data);
          } else {
            console.error("Fetched data is not an array:", data);
          }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchDataByAlphabetic(); // Call the async function immediately
    fetchDataByFav();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      We are in Home
      <Link to="/About"> Go to about</Link>
      <Link to="/connection"> Go to connection</Link>
      <br></br>
      <br></br>
      <button style={{backgroundColor : "green"}} onClick={()=>navigate("/Adding")}>+</button>
      <br />
      <br />
      <h1>My musics ,sorted by alphabetic order</h1>
      <div id="blocksContainer">
        {tabMusiquesDataAlphabetic.map((e, i) => (
          <MusicBlock
            key={i}
            Song={e.attributes.Song}
            Color={e.attributes.Color}
            Fav={e.attributes.Fav}
            ReleaseDate={e.attributes.ReleaseDate}
            YoutubeLink = {e.attributes.YoutubeLink}
            Author = {e.attributes.singer.data.attributes.Name}
          />
        ))}
      </div>
      <br />
      <br />
      <h1>My musics ,sorted by Favorites</h1>
      <div id="blocksContainer">
        {tabMusiquesDataByFav.map((e, i) => (
          <MusicBlock
            key={i}
            Song={e.attributes.Song}
            Color={e.attributes.Color}
            Fav={e.attributes.Fav}
            ReleaseDate={e.attributes.ReleaseDate}
            YoutubeLink = {e.attributes.YoutubeLink}
            Author = {e.attributes.singer.data.attributes.Name}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
