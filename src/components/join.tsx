import {
    Sequence,
    interpolate,
    spring, 
    useCurrentFrame, 
    useVideoConfig,
	Img, 
	staticFile
} from 'remotion';

const styles = {
    container: {
        width: '100%',
        height: '100%',
        position: 'relative' as 'relative',
    },
    textContainer: {
        width: '100%',
        height: '100%',
        position: 'relative' as 'relative',
        zIndex: '10',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column' as 'column',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    joinContainer: {
        display: 'flex',
        flexDirection: 'row' as 'row',
    },
    download: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

const Join: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const bgScale = interpolate(frame, [0, 300], [0.15, 15], {
        extrapolateRight: "clamp",
      });
    const scale = spring({ frame: frame / 2, fps, from: 0, to: 1 });
    const storeScale = interpolate(frame, [165, 300], [0.5, 1], {
        extrapolateRight: "clamp",
      });
    const getAppScale = interpolate(frame, [165, 180], [0, 0.85], {
        extrapolateRight: "clamp",
    });
    const backgroundContainer = {
        width: '80px',
        height: '80px',
        position: 'absolute' as 'absolute',
        top: 'calc(50% - 40px)',
        left: 'calc(50% - 40px)',
        zIndex: 1,
        transform: `scale(${bgScale})`
    }
    const glove = {
        width: '50px',
        height: '50px',
        marginTop: '60px',
        transform:  `scale(${scale})`,
    }
    const rockHand = {
        width: '30px',
        margin: '0px 0px 60px 20px ',
        transform:  `scale(${scale})`,
    }
    const orderText = {
        width: '80%',
        fontSize: '3.1rem',
        textAlign: 'center' as 'center',
        fontWeight: 'bold',
        margin: '60px 0px ',
        transform:  `scale(${scale})`,
    }
    const name = {
        fontSize: '8rem',
        fontWeight: 'bold',
        transform:  `scale(${scale})`,
    }
    const getApp = {
        width: '80%',
        fontSize: '3.1rem',
        textAlign: 'center' as 'center',
        fontWeight: 'bold',
        marginBottom: '30px'
    }
    const store = {
        width: '300px',
        margin: '10px',
        transform:  `scale(${storeScale})`,
    }
    const secondContainer = {
        width: '100%',
        height: '100%',
        position: 'relative' as 'relative',
        zIndex: '10',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column' as 'column',
    }

    return (
        <>
            <div style={styles.container}>
                <div style={backgroundContainer}>
                    <Img style={styles.backgroundImage} src={staticFile("background.png")} />
                </div>
                <div style={styles.textContainer}>
                    <div>
                        <div style={name}>ecoeats</div>
                    </div>
                    {frame < 165 ? (
                        <>
                            <div style={styles.joinContainer}>
                                <div>
                                    <Img style={glove} src={staticFile("boxingGlove.png")} />
                                </div>
                                <div style={orderText}>
                                    {'Join Raw Pressed in saving the Planet'.split(' ').map((x, i) =><span style={{
                                        display: 'inline-block',
                                        marginLeft: 10,
                                        transform: `scale(${scale})`,
                                        transition: `transform .${i}s`,
                                    }}>{x}</span>)}
                                </div>
                            </div>
                            <div style={orderText}>
                                {'Order with Ecoeats'.split(' ').map((x, i) =><span style={{
                                    display: 'inline-block',
                                    marginLeft: 10,
                                    transform: `scale(${scale})`,
                                    transition: `transform .${i}s`,
                                }}>{x}</span>)}
                            </div>
                        </>
                    ) : (
                        <>
                            <div style={secondContainer}>
                                <div style={styles.download}>
                                    <div>
                                        <Img style={store} src={staticFile("googlePlay.png")} />
                                    </div>
                                    <div>
                                        <Img style={store} src={staticFile("appStore.png")} />
                                    </div>
                                </div>
                                <div style={styles.joinContainer}>
                                    <div>
                                        <Img style={rockHand} src={staticFile("rockHand.png")} />
                                    </div>
                                    <div style={getApp}>
                                        {'Join Raw Pressed in saving the Planet'.split(' ').map((x, i) =><span style={{
                                            display: 'inline-block',
                                            marginLeft: 10,
                                            transform: `scale(${getAppScale})`,
                                            transition: `transform .${i}s`,
                                        }}>{x}</span>)}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    
                </div>
            </div>
        </>
    )
}

export default Join;