import NASAwidget from '../components/Widgets/NASA';
import NYTimesWidget from '../components/Widgets/NYTimes';
import SoundcloudWidget from '../components/Widgets/SoundCloud';

const getWidget = (widgetName) => {
    switch(widgetName) {
        case 'NASA astronomy photo of the day':
            return NASAwidget
        case 'New York Times':
            return NYTimesWidget
        case 'Soundcloud':
            return SoundcloudWidget
    }
}

export default getWidget;