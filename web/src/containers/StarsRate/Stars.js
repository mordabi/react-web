import React from 'react';
import './Stars.css'

class Rating extends React.PureComponent {
    constructor (props) {
      super(props);
      this.state = {
        rating: props.rating
      };
      
      this.updateRating = this.updateRating.bind(this);
    }
    
    updateRating (rating) {
      if (this.state.rating === rating) {
        this.setState({
          rating: 0
        });
      } else {
        this.setState({
          rating
        });
      }
    }
    
    render () {
      let markup = [];
      
      for (let i=0; i<5; i++) {
        markup.push(
          <RatingStar rating={i+1} isSet={i<this.state.rating} updateRating={this.updateRating} />
        );  
      }
      
      return (
        <div>
          {markup}
        </div>
      );
    }
  }
  
  Rating.defaultProps = {
    rating: 0,
    totalStars: 5
  };
  
  class RatingStar extends React.Component {
    constructor (props) {
      super(props);
      this.state = {};
      this.updateRating = this.updateRating.bind(this);
    }
    
    updateRating () {
      this.props.updateRating(this.props.rating);
    }
    
    render () {
      let cssClasses = 'star';
      if (this.props.isSet) {
        cssClasses += 'set'
      }
      
      return (
        <svg className={cssClasses} width="25" height="25" onClick={this.updateRating}>
          <path d="m55,237 74-228 74,228L9,96h240" transform='scale(0.10)' />
        </svg>
      );
    }
  }
  export default Rating;