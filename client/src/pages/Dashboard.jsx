import { ADD_WIDGET, DELETE_WIDGET } from '../utils/mutations'
import { GET_ME } from '../utils/queries';
import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Draggable from 'react-draggable';
import nasaLogo from '.././images/nasa_official.png'
import soundcloudLogo from '.././images/soundcloud.jpg'
import nytLogo from '.././images/nyt.jpg'
import randomcatfactLogo from '.././images/store-cat-img.png'
import jokeLogo from '.././images/jokes.jpeg'
import currencyLogo from '.././images/currency.jpg'

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
    'NASA',
    'New York Times',
    'Soundcloud',
    'Cat',
    'Jokes',
    'Currency Converter'
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
            <Widget/>
          )
        })}
      </div>
    </div>
  );
};

export default Dashboard;

