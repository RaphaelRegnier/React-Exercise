import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Flat extends Component {
    // background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://kitt.lewagon.com/placeholder/cities/shanghai');
  handleClick = () => {
    //REDUX ACTION
    this.props.selectFlat(this.props.flat);
  }
  // the re-rendering is triggered by Redux when there is a change in the selectedFlat prop, when the re-rendering is done, we check if this instance of the flat is the same as the selectedFlat instance. If it is, we add the class 'selected'
  render () {
    const style = {
      backgroundImage: `url(${this.props.flat.imageUrl})`
    };

    let classes = "flat card";
    if(this.props.flat === this.props.selectedFlat) {
      classes += " selected";
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

//When you click a flat, Redux checks if the selectedFlat is different from the one you're passing as an argument to the action. If it's the same, nothing is rendered again. If it's different, all the flats are re-rendered and the change in props is made.
