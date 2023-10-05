import NASAwidget from '../components/Widgets/NASAwidget';

const Home = () => {
    return (
        <div className="display-home">
            <div className="alert alert-primary" role="alert">
                Sign up to create your own dashboard with more widgets!
            </div>
            <NASAwidget />
        </div>
    )
};

export default Home;
