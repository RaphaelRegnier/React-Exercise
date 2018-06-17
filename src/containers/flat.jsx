import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Flat extends Component {
    // background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://kitt.lewagon.com/placeholder/cities/shanghai');
  handleClick = () => {
    //REDUX ACTION
    this.props.selectFlat(this.props.flat);
  }

  render () {
    const style = {
      backgroundImage: `url(${props.flat.imageUrl})`
    };

    let classes = "flat card";
    if(this.props.flat === this.props.selectFlat) {
      classes += " selected"
    }

    return (
      <div className={classes} style={style} onClick={this.handleClick}>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
          <p>{this.props.flat.price} {this.props.flat.priceCurrency}</p>
        </div>
      </div>
    );
  }
};

function mapReduxStateToProps(reduxState) {
  return {
    selectedFlat: reduxState.selectedFlat
  };
}

import { selectFlat } from '../actions';

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Flat);
