const AlbumThree= () => {

    const embedUrl = "https://bandcamp.com/EmbeddedPlayer/track=2721583563/size=large/bgcol=ffffff/linkcol=f171a2/tracklist=false/artwork=none/transparent=true/"
    return (

<iframe

src={embedUrl}
className="iframe"
frameBorder="0" 
wmode="transparent" 
ratio='3:3'
style= {{position: 'relative', border: '0', width: '100%', height: '150px'}}


/>
    );
}

export default AlbumThree