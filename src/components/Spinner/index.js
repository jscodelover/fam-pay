import * as React from 'react';
import './style.scss';

const PRIZELIST = [
	'Better luck next time!',
	'2X Savings',
	'₹100 Cashback',
	'₹20 💸',
	'₹50 💸',
	'1.5X Savings',
	'2X Savings',
	'₹50 💸'
];

const ZONE_SIZE = 45; // deg
const DEGREE = 1800;

function Spinner() {
	const [deg, setDeg] = React.useState(0);
	const [clicks, setClick] = React.useState(1); // used for rotating the spinner in clockwise direction
	const [spinning, handleSpinning] = React.useState(false);

	function handleSpin() {
		// spin only when spinner is in rest mode
		if (!spinning) {
			handleSpinning(true);
			// calculate the spinning degree in clockwise direction
			const newDegree = DEGREE * clicks;
			const extraDegree = Math.ceil(Math.random() * (360 - 1 + 1)) + 1;
			const totalDegree = newDegree + extraDegree;

			// update the degree hook value for rotation
			setDeg(totalDegree);

			// get the sector at which the pointer is pointing
			const actualDeg = totalDegree % 360;
			const prizeValue = Math.round(actualDeg / ZONE_SIZE);

			// update the click value and spinning
			setTimeout(() => {
				console.log([...PRIZELIST].reverse()[prizeValue ? prizeValue - 1 : 0]);
				setClick(state => state + 1);
				handleSpinning(false);
			}, 6000);
		}
	}

	return (
		<section className="spinner-wrapper">
			<div className="pointer">
				<div className="bar" />
				<div className="mark" />
			</div>
			<div className="wheel-shadow">
				<div className="wheel">
					<ul
						className="inner-wheel"
						style={{
							transition: 'all 6s cubic-bezier(0, 0.99, 0.44, 0.99)',
							transform: `rotate(${deg}deg)`
						}}
					>
						{PRIZELIST.map((item, index) => (
							<li className="sec" key={`${item}${index}`}>
								<div className="dots">
									<span className="dot dot-1" />
									<span className="dot dot-2" />
								</div>
								<span className="text">{item}</span>
							</li>
						))}
					</ul>
					<button onClick={handleSpin} className="spin-holder">
						<span className="label">Spin</span>
					</button>
				</div>
			</div>
		</section>
	);
}

export default Spinner;
