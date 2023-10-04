import NASAwidget from '../components/Widgets/NASA_apod';
import JokesWidget from '../components/Widgets/JokeAPI';
import CatWidget from '../components/Widgets/CatFact';
import NYTimesWidget from '../components/Widgets/NYTimes';
import SoundcloudWidget from '../components/Widgets/SoundCloud';
import CurrencyConverter from '../components/Widgets/Currency-Converter'

const getWidget = (widgetName) => {
    switch(widgetName) {
        case 'NASA astronomy photo of the day':
            return NASAwidget
        case 'Jokes':
            return JokesWidget
        case 'Cat':
            return CatWidget
        case 'New York Times':
            return NYTimesWidget
        case 'Soundcloud':
            return SoundcloudWidget
        case 'Currency Converter':
            return CurrencyConverter
    }
}

export default getWidget;