import { useState } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default function Option(props) {
	const { option, setValue, setOpen, color } = props;

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
			tabIndex={0}
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
	color: PropTypes.string,
};
