import Tempmap from '../components/Tempmap';
import Dustmap from '../components/Dustmap';

const Home = () => {
    return (
        <div>
            <div class="block"></div>
            <div class="container">
                <div class="columns">
                    <div class="column mx-5">
                        <div>
                            <div class="box">
                                <p class="title is-1"><i class="has-text-link"><i class="fa-solid fa-gears"></i></i> PM 2.5 Detector</p>
                                <p class="subtitle is-4">010123120 Embedded System Design Lab 2/2565</p>
                            </div>
                            <Dustmap/>
                            <Tempmap/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default Home;