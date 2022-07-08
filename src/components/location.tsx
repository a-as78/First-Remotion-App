import {
    spring, 
    useCurrentFrame, 
    useVideoConfig,
	Img, 
	staticFile
} from 'remotion';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        fontSize: '2rem',
        alignItems: 'center',
        justifyContent: '5center',
        color: 'white',
    },
    visitText: {
        fontWeight: 'bold',
        fontSize: '2.8rem',
        marginBottom: '30px',
        textAlign: 'center' as 'center',
    },
    locationMap: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
    },
    mapWrapper: {
        position: 'relative' as 'relative',
    },
    locationMapWrapper: {
        width: '90px',
        height: '90px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#26a465',
        position: 'absolute' as 'absolute', 
        top: '75px',
        left: '75px',
    },
    locationContainer: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        padding: '10px',
    },
    orderText: {
        marginTop: '10px',
        fontSize: '1.4rem',
    }
}

const Location : React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const foodPicTop = spring({ frame, fps, from: -100, to: 75  }); 
    const mapScale = spring({ frame, fps, from: 0, to: 1 });

    const locationMapWrapper = {
        width: '90px',
        height: '90px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#26a465',
        position: 'absolute' as 'absolute', 
        top: `${foodPicTop}px`,
        left: '75px',
    }
    const map = {
        width: '230px',
        height: '230px',
        borderRadius: '25px',
        boxShadow: '1px 1px 5px #525252', 
        transform:  `scale(${mapScale})`,
    }
    
    const pinImage = {
        width: '40px',
        margin: '0px 10px',
        transform: `rotate(90deg) scale(${mapScale})`
    }

    return (
        <>
            <div style={styles.container}>
                <div style={styles.visitText}>{'Fancy a visit?'.split(' ').map((x, i) =><span style={{
                    display: 'inline-block',
                    marginLeft: 10,
                    transform: `scale(${mapScale})`,
                    transition: `transform .${i}s`,
                }}>{x}</span>)}</div>
                <div style={styles.mapWrapper}>
                    <div>
                        <Img style={map} src={staticFile("map.png")} />
                    </div>
                    <div style={locationMapWrapper}>
                        <Img style={styles.locationMap} src={staticFile("preview.png")} />
                    </div>
                </div>
                <div style={styles.locationContainer}>
                    <div>
                        <Img style={pinImage} src={staticFile("pin.png")} />
                    </div>
                    <div style={styles.visitText}>{'125 Market Street, St Andrews'.split(' ').map((x, i) =><span style={{
                        display: 'inline-block',
                        marginLeft: 10,
                        transform: `scale(${mapScale})`,
                        transition: `transform .0${i}s`,
                    }}>{x}</span>)}</div>
                </div>
                <div style={styles.orderText}>{'Or order through ecoeats!'.split(' ').map((x, i) =><span style={{
                    display: 'inline-block',
                    marginLeft: 5,
                    transform: `scale(${mapScale})`,
                    transition: `transform .0${i}s`,
                }}>{x}</span>)}</div>
            </div>
        </>
    )
}

export default Location;