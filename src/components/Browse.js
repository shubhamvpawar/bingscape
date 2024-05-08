import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

    useNowPlayingMovies();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
            {/* 
        Main Section
                playing
                title
        Sec section
        list
            many cards */}
        </div>
    )
}

export default Browse;