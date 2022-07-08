import {
    interpolate, 
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
        padding: '100px',
    },
    headerText: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center' as 'center',
        padding: '0px 30px',
        fontSize: '2.5rem',
        color: 'white',
    },
    headerImage: {
        borderRadius: '20px',
        backgroundColor: 'red',
        width: '150px',
        height: '150px',
    },
    footerText: {
        fontSize: '1rem',
    }
}

const Preview : React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const rotate = spring({ frame, fps: 0.001, from: -180, to: 0 });
    const scale = spring({ frame, fps: fps/100, from: 0.2, to: 1 });
    const header = {
        display: 'flex',
        flexDirection: 'row' as 'row',
        marginBottom: '150px',
        transform: `rotate(${rotate}deg) scale(${scale})`
    }
    const footer = {
        display: 'flex',
        flexDirection: 'column' as 'column',
        marginBottom: '250px',
        transform: `scale(${scale})`,
        color: 'white',
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center',
    }

    return (
        <>
            <div style={styles.container}>
                <div style={header}>
                    <div style={styles.headerImage}>
                     <Img style={styles.headerImage} src={staticFile("preview.png")} />
                    </div>
                    <div style={styles.headerText}>
                        <div>Raw</div>
                        <div>Pressed</div>
                    </div>
                </div>
                <div style={footer}>
                    <div style={styles.footerText}>available on</div>
                    <div style={styles.headerText}>ecoeats</div>
                </div>
            </div>
        </>
    )
}

export default Preview;