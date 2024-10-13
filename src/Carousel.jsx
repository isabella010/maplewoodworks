import "./Carousel.css";
import Carousel from 'react-bootstrap/Carousel';

function MyCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.etsystatic.com/15160125/r/il/ef007a/5095635972/il_570xN.5095635972_11h5.jpg"
            alt="Charcuterie Board"
          />
          <Carousel.Caption>
            <h3>Charcuterie Board</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://scaramangashop.co.uk/cdn/shop/files/set-of-4-cement-and-wood-coasters-2.jpg?v=1697725200"
            alt="Coasters"
          />
          <Carousel.Caption>
            <h3>Coasters</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://colormecrafty.net/wp-content/uploads/2022/12/Layer-HTV-4-720x405.jpg"
            alt="Wood Sign"
          />
          <Carousel.Caption>
            <h3>Wood Sign</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default MyCarousel;