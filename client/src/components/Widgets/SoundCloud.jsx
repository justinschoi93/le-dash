import Draggable from 'react-draggable';

export default function SoundCloudWidget (){
    return (
        <Draggable
              key={SoundCloudWidget}
              position={null}
              grid={[25, 25]}
              scale={1}
              bounds="body"
            >
            <div className="widget">
            <div className="widget-navbar">
                <button className="widget-maximize-btn widget-btn" onClick={()=>{}}> + </button> 
                <button className="widget-minimize-btn widget-btn" onClick={()=>{}}> - </button> 
                <button className="widget-delete-btn widget-btn" onClick={() => deleteWidgetHandler(widgetName)}> x </button> 
            </div>
            <div className="widget-content">
                <iframe scrolling="no" frameBorder="no" allow="autoplay" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1175646880&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                </iframe>
                <div style={style1}>
                    <a href="https://soundcloud.com/boxofcatsmusic" title="Box Of Cats" className="font" style={style2}>Box Of Cats</a>
                    · 
                    <a href="https://soundcloud.com/boxofcatsmusic/bluri-daaayyy-boc130" className="font" title="Bluri - Daaayyy (BOC130)"  style={style2}>
                        Bluri - Daaayyy (BOC130)
                    </a>
                </div>
            </div>
            </div>
        </Draggable>
)}


const style1 = {

    fontSize: 10, 
    color: "#cccccc",
    lineBreak: "anywhere",
    wordBreak: "normal",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontWeight: 100

};

const style2 = {
    
    color: "#cccccc",
    textDecoration: "none"
}


