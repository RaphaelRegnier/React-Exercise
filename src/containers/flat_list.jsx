import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Flat from '../containers/flat';


class FlatList extends Component {

  // TEMPORARY CODE TO INTEGRATE HTML
  // static defaultProps = {
  //   flats: [{
  //     "name": "Charm at the Steps of Montmartre",
  //     "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
  //     "price": 164,
  //     "priceCurrency": "EUR"
  //   }]
  // }

  componentWillMount() {
    this.props.setFlats();
  }

  render () {
    return(
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) =>  <Flat flat={flat} key={flat.name} /> )}
      </div>
    );
  }
}

// function to wire the action to the props of the component
import { setFlats } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

// actually mapREDUXstatetoprops
function mapReduxStateToProps(reduxState) {
  return {
    flats: reduxState.flats
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(FlatList);
