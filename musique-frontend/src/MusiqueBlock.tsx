import { Link, useNavigate } from "react-router-dom";
import "./MusiqueBlock.css"

const MusicBlock = (props:{Song : string , Color : string , Fav : boolean , ReleaseDate : string , YoutubeLink: string , Author : string} ) => {
    const navigate = useNavigate();
  
    return (
      <div className="blockOut" style={{ backgroundColor: props.Color }}>
        <div className="title">{props.Song}</div>
        <div className="author">{props.Author}</div>
        {/* <div className="author"> {}</div> */}
        <div className="releaseDate">{props.ReleaseDate}</div>
        <a href={props.YoutubeLink} target="_blank">Lien vers la vidéo.</a>
        <div>
          Fav:
          <input type="checkbox" className="fav" checked={props.Fav}/>
        </div>
      </div>
    );
  };

  export default MusicBlock;