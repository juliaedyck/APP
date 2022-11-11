const AlbumTwo= () => {

    const embedUrl = "https://bandcamp.com/EmbeddedPlayer/album=3887560960/size=large/bgcol=ffffff/linkcol=f171a2/artwork=none/transparent=true?wmode=opaque/"
    return (

<iframe

src={embedUrl}
className="iframe"
frameBorder="0" 
wmode="transparent" 
ratio='3:6'
style= {{position: 'relative', border: '0', width: '100%', height: '472px'}}


/>
    );
}

export default AlbumTwo