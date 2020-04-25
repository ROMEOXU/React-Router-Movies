import React from 'react';

const MovieCard = props => {
  console.log('card',props);
  return(
    <div>
      {props.item.stars}
      {/* {props.stars.map(e=>(<div key={e}>{e}</div>))} */}
    </div>
  );
};

export default MovieCard;
