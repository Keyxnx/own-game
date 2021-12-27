import { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Fields from '../Fields/Fields';
import { questions } from '../../utils/constants';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, [])

    function getCategories() {
        let listOfCategories = [];
        for (let key in questions) {
            listOfCategories.push(key);
        }
        setCategories([...listOfCategories])
    }

    return (
        <div className="categories" >
            { categories.map((item, index) => {
               for (let key in questions) {
                return (
                    <div style={{display: 'flex'}} key={index}>
                        <Category title={item}/>
                        <Fields amountOfFields={categories}/>
                    </div>
                )
               }})
            }
        </div>
    );
}

export default Categories;


