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
				durationInFrames={2000}
				fps={90}
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
				durationInFrames={210}>
				<Preview />
			</Sequence>
			<Series.Sequence
				offset={210}
				layout="none"
				durationInFrames={450}>
				<FoodCards />
			</Series.Sequence>
			<Sequence
				from={660}
				durationInFrames={450}>
				<Location />
			</Sequence>
			<Sequence
				from={1110}
				durationInFrames={990}>
				<Join />
			</Sequence>
			<Sequence from={0} durationInFrames={durationInFrames}>
				<Audio src={audio} />
			</Sequence>
		</div>
	)
}
