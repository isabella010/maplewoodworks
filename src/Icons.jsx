import "./Icons.css";

function Icons() {
  return (
    <>
      <div className="main">
        <div className="item-one">
            <img
            className="d-block w-100"
            src="./craft.svg"
            alt="ruler and pencil"
            />
            <h3>
                Craftsmanship
            </h3>
        </div>
        <div className="item-one">
            <img
            className="d-block w-100"
            src="./pencil.svg"
            alt="writing"
            />
            <h3>
                Personalization 
            </h3>
        </div>
        <div className="item-one" id="last">
            <img
            className="d-block w-100"
            src="./check.svg"
            alt="checkmark badge"
            />
            <h3>
                Excellence 
            </h3>
        </div>
      </div>
    </>
  );
}

export default Icons;
