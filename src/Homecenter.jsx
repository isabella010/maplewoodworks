import "./Homecenter.css";
import Button from 'react-bootstrap/Button';

function Homecenter() {
    return (
      <>
        <div className="main-image">
            <Button href="products" className="view-products-btn" variant="primary" size="lg">
                See Our Products
            </Button>     
        </div>
      </>
    );
  }
  
  export default Homecenter;