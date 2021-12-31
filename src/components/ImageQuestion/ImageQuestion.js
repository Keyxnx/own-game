import './styles.css';

const ImageQuestion = ({url}) => {

    const style = {
        height: 'auto',
        width: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div style={style}>
            <img src={require(`${url}`)} className="img-question"></img>
        </div>
    );
}

export default ImageQuestion;
