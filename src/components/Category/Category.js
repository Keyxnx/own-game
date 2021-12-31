import './styles.css';

const Category = ({ title }) => {

    const style = {
        width: '200px',
        height: 'calc(650px  / 10)',
        fontSize: '18px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div className="category" style={style}>
            {title}
        </div>
    );
}

export default Category;
