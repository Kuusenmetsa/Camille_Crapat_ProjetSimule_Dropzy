import { useState } from 'react';
import PropTypes from 'prop-types';

import './index.css';

import ChevronDownSolid from '../../assets/icons/chevron-down-solid.svg';
import XmarkSolid from '../../assets/icons/xmark-solid.svg';

import Option from '../Option';

export default function Dropzy(props) {
	const [open, setOpen] = useState(false);
	const {
		value,
		setValue,
		options,
		animate = true,
		searchInput = true,
		color = '#0486c2',
		selectHeight = '30px',
		optionsHeight = '150px',
	} = props;

	const [search, setSearch] = useState('');

	const resetSearchInput = () => {
		setSearch('');
	};

	return (
		<div
			className='dropdown'
			tabIndex={0}
			onClick={() => setOpen(!open)}
			onKeyDown={(e) => {
				if (e.keyCode === 13) {
					setOpen(!open);
				}
			}}
		>
			<div className='dropdown__select' style={{ height: selectHeight }}>
				<div className='dropdown__select__value'>{value === '' ? `--Please choose an option--` : value}</div>
				<img
					src={ChevronDownSolid}
					alt=''
					className={`dropdown__select__icone ${
						open
							? animate
								? `dropdown__select__icone--rotate`
								: `dropdown__select__icone--rotate--noAnimation`
							: animate
							? `dropdown__select__icone--initial`
							: `dropdown__select__icone--initial--noAnimation`
					}`}
				/>
			</div>
			{open && (
				<div className='dropdown__open' style={{ height: optionsHeight }}>
					{searchInput && (
						<div className='dropdown__open__search'>
							<input
								type='text'
								name='search'
								id='search'
								className='dropdown__open__search--input'
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								tabIndex={0}
							/>
							<div className='dropdown__open__search--reset'>
								<img
									src={XmarkSolid}
									alt=''
									onClick={() => resetSearchInput()}
									onKeyDown={(e) => {
										if (e.keyCode === 13) {
											resetSearchInput();
										}
									}}
									tabIndex={0}
								/>
							</div>
						</div>
					)}
					<ul
						className={`dropdown__open__options ${
							searchInput ? `dropdown__open__options--withSearch` : `dropdown__open__options--withoutSearch`
						}`}
					>
						{options.map(
							(option) =>
								option.toLowerCase().includes(search.toLowerCase()) && (
									<Option key={option} option={option} setValue={setValue} setOpen={setOpen} color={color}></Option>
								)
						)}
					</ul>
				</div>
			)}
		</div>
	);
}
Dropzy.propTypes = {
	value: PropTypes.string,
	setValue: PropTypes.func,
	options: PropTypes.array,
	animate: PropTypes.bool,
	searchInput: PropTypes.bool,
	color: PropTypes.string,
	selectHeight: PropTypes.string,
	optionsHeight: PropTypes.string,
};
