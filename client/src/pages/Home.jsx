import NASAwidget from '../components/Widgets/NASA';
import Draggable from 'react-draggable';
import {ResizableBox} from 'react-resizable';
import 'react-resizable/css/styles.css';
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
                handle=".widget-navbar"
            >
                <ResizableBox width={300} height={300}>
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
                </ResizableBox>
            </Draggable>
        </div>
        </div>
    )
};

export default Home;
