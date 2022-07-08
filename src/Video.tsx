import { 
	Composition,
	Sequence, 
	useVideoConfig, 
	Series,
	Audio
} from 'remotion';
import audio from "../public/audio.mp3";
import FoodCards from './components/FoodMainContainer';
import Preview from './components/preview';
import Location from './components/location';
import Join from './components/join';

const styles = {
	container: {
		backgroundColor: '#26a465',
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column' as 'column',
	},
}

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={603}
				fps={30}
				width={540}
				height={540}
			/>
		</>
	);
};

const Main = () => {
	const {durationInFrames} = useVideoConfig();
	return (
		<div style={styles.container}>
			<Sequence
				from={0}
				durationInFrames={60}>
				<Preview />
			</Sequence>
			<Series.Sequence
				offset={60}
				layout="none"
				durationInFrames={180}>
				<FoodCards />
			</Series.Sequence>
			<Sequence
				from={240}
				durationInFrames={60}>
				<Location />
			</Sequence>
			<Sequence
				from={300}
				durationInFrames={303}>
				<Join />
			</Sequence>
			<Sequence from={0} durationInFrames={durationInFrames}>
				<Audio src={audio} />
			</Sequence>
		</div>
	)
}
