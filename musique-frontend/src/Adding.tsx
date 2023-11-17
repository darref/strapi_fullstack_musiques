import { ChangeEvent, useCallback, useState } from "react";



function Adding(){

    const [titleVal,setTitleVal] = useState("")
    const [authorVal,setAuthorVal] = useState(0)
    const [colorVal,setColorVal] = useState("green")
    const [youtubeLinkVal,setyoutubeLinkVal] = useState("")
    const [favVal,setFavVal] = useState("false")
    const [releaseDateVal,setReleaseDate] = useState(false)

    const handleChangeTitle = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
        setTitleVal(e.target.value);
    },[])
    const handleChangeAuthor = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
        setAuthorVal(parseInt(e.target.value));
    },[])
    const handleChangeColor = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
        setColorVal(e.target.value);
    },[])
    const handleChangeYoutubeLink = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
        setyoutubeLinkVal(e.target.value);
    },[])
    const handleChangeFav = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
        setFavVal(e.target.value);
    },[])
    const handleChangeReleaseDate = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
        setReleaseDate(e.target.checked);
    },[])
    

    const handleClickAjouter = useCallback(()=>{
        const postData = {
            data: {
              singer: {authorVal},
              Song: {titleVal},
              YoutubeLink: {youtubeLinkVal},
              RealeaseDate: {releaseDateVal},
              Color: {colorVal},
              Fav: {favVal},
            },
          };
          
          fetch("http://localhost:1337/api/musiques", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Response data:", data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
          
    },[])


    return (
        <>
            <label >Title</label>
            <input type="text" id="inputTitle" onChange={handleChangeTitle}/>
            <br />
            <label >Author</label>
            <input type="text" id="inputAuthor" onChange={handleChangeAuthor}/>
            <br />
            <label >Color</label>
            <input type="color" id="inputColor" onChange={handleChangeColor}/>
            <br />
            <label >Youtube link</label>
            <input type="text" id="inputYoutube" onChange={handleChangeYoutubeLink}/>
            <br />
            <label >Fav:</label>
            <input type="checkbox" id="inputFav" onChange={handleChangeFav}/>
            <br />
            <br />
            <label >Release Date:</label>
            <input type="date" id="inputReleaseDate" onChange={handleChangeReleaseDate}/>
            <br />
            <br />
            <button onClick={handleClickAjouter}>Ajouter.</button>
        </>
    );



}













export default Adding;