const Radio = () => {

    const embedUrl = "https://live2ssl.rcast.net/stream/69143/"
 
    return (

<audio

src={embedUrl}
// type={mp3}
// className="iframe"
frameBorder="0" 
wmode="transparent" 
audio controls={true}
// audio="true"
preload="none"
style= {{position: 'relative', border: '0', width: '100%', height: '65px', color: 'white'}}


/>
    );
}

export default Radio