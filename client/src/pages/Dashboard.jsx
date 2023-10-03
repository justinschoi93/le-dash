import { ADD_WIDGET, DELETE_WIDGET } from '../utils/mutations'
import { GET_ME } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import Draggable from 'react-draggable';

import nasaLogo from '.././images/nasa_official.png'
import soundcloudLogo from '.././images/soundcloud.jpg'
import nytLogo from '.././images/nyt.jpg'
import randomcatfactLogo from '.././images/store-cat-img.png'
import jokeLogo from '.././images/jokes.jpeg'
import currencyLogo from '.././images/currency.jpg'
// import webcamLogo from '.././images/webcam.jpg'

import getWidget from '../utils/widgets';


const Dashboard = () => {
  const {loading, data} = useQuery(GET_ME)

  const userWidgets = data?.me?.widgets || [];

  const [ addWidget ] = useMutation(ADD_WIDGET);
  const [ deleteWidget ] = useMutation(DELETE_WIDGET);

  const addWidgetHandler = (widgetName) => {
    addWidget({
      variables: {
        widgetName
      }
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

  return (
    <div className="body">
      {/*  */}
      <div className="dashboard">
        {userWidgets.map((widgetName) =>{
          const Widget = getWidget(widgetName);

          return  (
            <Draggable
              key={widgetName}
              // axis="both" // Allow both horizontal and vertical dragging
              // defaultPosition={{ x: 0, y: 0 }}
              position={null}
              grid={[25, 25]}
              scale={1}
              bounds="body" // restrict every draggable div to the root of the page
            >
              <div className="widget">
                <div className="widget-navbar">
                  <button className="widget-maximize-btn" onClick={()=>{}}> + </button> 
                  <button className="widget-minimize-btn" onClick={()=>{}}> - </button> 
                  <button className="widget-delete-btn" onClick={() => deleteWidgetHandler(widgetName)}> x </button> 
                </div>
                <div className="widget-content">
                  <Widget/>
                </div>
              </div>
            </Draggable>
  )
        })}
      </div>
    </div>
  );
};

export default Dashboard;


{/* <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle add-btn"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Add Widget
        </button>
        <ul className="dropdown-menu">
        <li
            onClick={() => {
              addWidgetHandler('APODWidget');
            }}
          >
            <div className="widget-option">
                <a className="dropdown-item" href="#">
                Astronomy Picture of the Day!
                </a>
                <img className="nasalogo" src={nasaLogo} alt="NASA Logo" />
            </div>
          </li>
          <li
            onClick={() => {
              addWidgetHandler('CurrencyConverter');
            }}
          >
            <div className="widget-option">
                <a className="dropdown-item" href="#">
                Currency Widget!
                </a>
                <img className="currencylogo" src={currencyLogo} alt="Currency Logo" />
            </div>
          </li>
          <li
            onClick={() => {
              addWidgetHandler('JokeAPIWidget');
            }}
          >
            <div className="widget-option">
                <a className="dropdown-item" href="#">
                Joke Widget!
                </a>
                <img className="jokelogo" src={jokeLogo} alt="Joke Logo" />
            </div>
          </li>
          <li
            onClick={() => {
              addWidgetHandler('NYTimesWidget');
            }}
          >
            <div className="widget-option">
                <a className="dropdown-item" href="#">
                New York Times!
                </a>
                <img className="nytlogo" src={nytLogo} alt="NBA Logo" />
            </div>
          </li>
          <li
            onClick={() => {
              addWidgetHandler('CatFactWidget');
            }}
          >
            <div className="widget-option">
                <a className="dropdown-item" href="#">
                Random Cat Fact!
                </a>
                <img className="catlogo" src={randomcatfactLogo} alt="Brewery Logo" />
            </div>
          </li>
          <li
            onClick={() => {
              addWidgetHandler('SoundCloudWidget');
            }}
          >
            <div className="widget-option">
                <a className="dropdown-item" href="#">
                Soundcloud!
                </a>
                <img className="catlogo" src={soundcloudLogo} alt="Brewery Logo" />
            </div>
          </li>
        </ul>
      </div> */}