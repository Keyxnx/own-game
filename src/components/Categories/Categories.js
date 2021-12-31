import Category from '../Category/Category';
import Fields from '../Fields/Fields';
import { questions } from '../../utils/constants';

import './styles.css';

const Categories = (props) => {
    const categories = Object.keys(questions);

    return (
        <div className="categories" >
            {categories.map((category) => {
                const categoryRow = questions[category];
                return (
                    <div className='category-group' style={{ display: 'flex' }} key={category}>
                        <Category title={category} />
                        <Fields categoryQuestions={categoryRow} {...props} />
                    </div>
                )
            })}
        </div>
    );
}

export default Categories;


