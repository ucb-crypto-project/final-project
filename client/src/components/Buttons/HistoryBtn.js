import React from 'react';
import './Button.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const HistoryBtn = props => (
	<button className='btn btn-outline-primary history-btn'>
	  <span {...props}>
	    {props.name} Days
	  </span>
	</button>
);

export default HistoryBtn;