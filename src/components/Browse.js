import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import Footer from './Footer';

const Browse = () => {

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        <div>
            <Header />
            {showGptSearch ? (<GptSearch />) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )}
            <Footer />
            {/* <MainContainer />
            <SecondaryContainer /> */}
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