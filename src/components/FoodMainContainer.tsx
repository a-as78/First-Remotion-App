import { 
	Composition, 
	interpolate, 
	Sequence, 
	useCurrentFrame, 
	useVideoConfig,
	spring,
} from 'remotion';
import FoodCards from './foodCards';

const styles = {
	foodWrapper: {
		display: 'flex',
		flexDirection: 'row' as 'row',
		position: 'relative' as 'relative',
		width: '100%',
	}
}

const Main: React.FC = () => {
	const frame = useCurrentFrame() - 60;
	const { fps, durationInFrames, width, height } = useVideoConfig();
	const foodsInfo = [
		{
			name: '1. Greek Yogurt with Fresh Berries & Raspberry Compote',
			description: '0% Fat Greek Yogurt, blueburries, raspberries, honey, coconut, granloa, and raspberry puree.'
		},
		{
			name: '2. Greek Yogurt with Fresh Berries & Raspberry Compote',
			description: '0% Fat Greek Yogurt, blueburries, raspberries, honey, coconut, granloa, and raspberry puree.'
		},
		{
			name: '3. Greek Yogurt with Fresh Berries & Raspberry Compote',
			description: '0% Fat Greek Yogurt, blueburries, raspberries, honey, coconut, granloa, and raspberry puree.'
		},
		{
			name: '4. Greek Yogurt with Fresh Berries & Raspberry Compote',
			description: '0% Fat Greek Yogurt, blueburries, raspberries, honey, coconut, granloa, and raspberry puree.'
		},
		{
			name: '5. Greek Yogurt with Fresh Berries & Raspberry Compote',
			description: '0% Fat Greek Yogurt, blueburries, raspberries, honey, coconut, granloa, and raspberry puree.'
		},
	]
	const x =  spring({ frame: frame, fps: frame > 120 ? fps * 40 - (frame - 120)*10 : fps *  40 , from: 0 , to: - 1000 })
    const visible = frame > 0 && frame < 180 ? 'flex': 'none'

	const mainContainer = {
		top: `${x}px`,
		backgroundColor: '#26a465',
		width: '100%',
		height: '100%',
		display: visible,
		position: 'absolute' as 'absolute',
		flexDirection: 'column' as 'column',
	}
	return (
        <div style={mainContainer}>
            {foodsInfo.map((food, index) => 
                <div style={styles.foodWrapper}>
                    <Sequence
                        from={60 + index * 20}
                        durationInFrames={180 - index * 20}>
                        <FoodCards name={food.name} description={food.description} cardIndex={index}/>
                    </Sequence>
                </div>
			)}
        </div>
	)
}

export default Main;