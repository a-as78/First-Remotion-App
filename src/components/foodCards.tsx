import {
    interpolate,
    spring, 
    useCurrentFrame, 
    useVideoConfig,
	Img, 
	staticFile
} from 'remotion';

const styles = {
    foodInfo: {
        display:'flex',
        height: '100%',
        width: '60%',
        color: 'grey',
        flexDirection: 'column' as 'column',
        paddingLeft: '10px',
    },
    foodName: {
        color: '#565656',
        fontSize: '1.5rem',
        marginTop: '20px',
    },
    foodDescription: {
        fontSize: '1.2rem',
        marginTop: '20px',
    },
    foodPic: {
        borderRadius: '20px 0px 0px 20px',
        width: '200px',
        height: '200px',
    }
}

const FoodCards : React.FC<{name: string, description: string, cardIndex: number}> =  ({name, description, cardIndex}) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
	const scale = spring({ frame, fps, from: 0, to: 1 })
    const top = `${cardIndex *220}px`
    const containerCard = {
        width: '90%',
        height: '200px',
        backgroundColor: 'white',
        borderRadius: '20px',
        margin: '10px 20px',
        boxShadow: '1px 1px 10px #525252',
        position: 'absolute' as 'absolute',
        top,
        display: 'flex',
        transform: `scale(${scale})`,
    }
    return (
        <>
            <div style={containerCard}>
                <div style={styles.foodPic}>
                    <Img style={styles.foodPic} src={staticFile("food.png")} />
                </div>
                <div style={styles.foodInfo}>
                    <div style={styles.foodName}>{name}</div>
                    <div style={styles.foodDescription}>{description}</div>
                </div>
            </div>
        </>
    )
}

export default FoodCards