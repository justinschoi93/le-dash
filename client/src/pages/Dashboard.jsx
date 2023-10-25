import { ADD_WIDGET, DELETE_WIDGET } from '../utils/mutations'
import { GET_ME } from '../utils/queries';
import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
// import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import nasaLogo from '.././images/nasa_official.png'
import soundcloudLogo from '.././images/soundcloud.jpg'
import nytLogo from '.././images/nyt.jpg'
import getWidget from '../utils/widgets';


const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(true);
  const {loading, data} = useQuery(GET_ME)

  const userWidgets = data?.me?.widgets || [];
  
  const [ addWidget ] = useMutation(ADD_WIDGET);
  const [ deleteWidget ] = useMutation(DELETE_WIDGET);

  const addWidgetHandler = (widgetName) => {
    addWidget({
      variables: {
        widgetName
      },
      refetchQueries: [GET_ME]
    });
  };

  const deleteWidgetHandler = (widgetName) => {
    deleteWidget({
      variables: {
        widgetName
      }, 
      refetchQueries: [GET_ME]
    });
  };

  if(loading) {
    return (<h1>LOADING</h1>)
  }


  const widgets = [
    'NASA astronomy photo of the day',
    'New York Times',
    'Soundcloud',
  ];

  return (
    <div className="body">
      <div className="add-widget-bar">
        <button onClick={()=>setShowMenu(false)}>Add Widget</button>
        <select className="widgets-list" hidden={showMenu} onChange={(e)=>addWidgetHandler(e.target.value)}>
          { widgets.map((widgetName, i) => 
            <option 
              value={widgetName} 
              key={i} 
            >
              {widgetName}
            </option>
          )}
        </select>
      </div>
      <div className="dashboard">
        {userWidgets.map((widgetName) => {
          const Widget = getWidget(widgetName);

          return (
            // <Draggable
            //   key={widgetName}
            //   position={null}
            //   grid={[25, 25]}
            //   scale={1}
            //   bounds="body"
            //   handle=".widget-navbar"
            //   cancel=".widget-content"
            // >
                <ResizableBox className="widget">
                  <div className="widget-navbar">
                    <button className="widget-maximize-btn widget-btn" onClick={()=>{}}> + </button> 
                    <button className="widget-minimize-btn widget-btn" onClick={()=>{}}> - </button> 
                    <button className="widget-delete-btn widget-btn" onClick={() => deleteWidgetHandler(widgetName)}> x </button> 
                  </div>
                  <div className="widget-content">
                    <Widget/>
                  </div>
                </ResizableBox>
            // </Draggable>
          )
        })}
      </div>
    </div>
  );
};

export default Dashboard;

