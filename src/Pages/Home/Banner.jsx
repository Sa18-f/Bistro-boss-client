import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src="https://i.ibb.co/Cb5DbDs/01.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/VCpChD8/02.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/G0MRGj7/03.png" />
            </div>
            <div>
                <img src="https://i.ibb.co/kBFrscG/04.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/wRmDbM9/05.png" />
            </div>
            <div>
                <img src="https://i.ibb.co/nkYDJPZ/06.png" />
            </div>
        </Carousel>
    );
};

export default Banner;