import React from 'react';

const Flat = (props) => {
    // background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://kitt.lewagon.com/placeholder/cities/shanghai');
    const style = {
      backgroundImage: `url(${props.flat.imageUrl})`
    };

    return(
      <div className="flat card" style={style}>
        <div className="card-description">
          <h2>{props.flat.name}</h2>
          <p>{props.flat.price} {props.flat.priceCurrency}</p>
        </div>
        <a className="card-link" href="#" ></a>
      </div>
    );
};

export default Flat;
