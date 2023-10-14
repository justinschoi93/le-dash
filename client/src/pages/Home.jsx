import NASAwidget from '../components/Widgets/NASA';
import Draggable from 'react-draggable';
const Home = () => {
    return (
        <div className="body">
        <div className="dashboard">
            <Draggable
                key={NASAwidget}
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
                    <NASAwidget/>
                </div>
                </div>
            </Draggable>
        </div>
        </div>
    )
};

export default Home;
