import { useState } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default function Option(props) {
	const { option, setValue, setOpen, index, color } = props;

	const [mouse, setMouse] = useState(false);

	const handleMouseEnter = () => {
		setMouse(true);
	};
	const handleMouseLeave = () => {
		setMouse(false);
	};

	const mouseStyle = mouse
		? {
				backgroundColor: `${color}`,
		  }
		: {};

	return (
		<li
			className='dropdown__open__options__option'
			tabIndex={3 + index}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={mouseStyle}
			onClick={() => {
				setValue(option);
				setOpen(!open);
			}}
			onKeyDown={(e) => {
				if (e.keyCode === 13) {
					setValue(option);
					setOpen(!open);
				}
			}}
		>
			{option}
		</li>
	);
}

Option.propTypes = {
	option: PropTypes.string,
	setValue: PropTypes.func,
	setOpen: PropTypes.func,
	index: PropTypes.number,
	color: PropTypes.string,
};
