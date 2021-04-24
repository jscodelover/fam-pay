import './App.scss';
import Header from './components/Header';
import Spinner from './components/Spinner';
import ArrowLeft from './assets/images/arrow-left.svg';

function App() {
	return (
		<main>
			<Header />
			<section className="game-wrapper">
				<button className="show-rewards-btn">
					<img src={ArrowLeft} alt="arrow-left.svg" />
					Your rewards
				</button>
				<Spinner />
				<div className="info">
					<p>Spin the wheel now to get rewarded</p>
					<p>
						Tap on Spin or rotate the wheel anti-clockwise and release to start
						spinning
					</p>
				</div>
				<a href="#" className="help_btn">
					Have a question? <span>Get help</span>
				</a>
			</section>
		</main>
	);
}

export default App;
