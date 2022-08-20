import {useContext, Fragment} from 'react';
import './shop.styles.scss';
import {CategoriesContext} from '../../contexts/categories.context';
// import ProductCard from '../../components/product-card/product-card.component';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import {Route, Routes} from 'react-router-dom';
import CategoriesPreview from '../../routes/categories-preview/categories-preview.component';
import Category from '../../routes/category/category.component';
const Shop = () => {
    //this code was used before creation of categories-preview component
    // const { categoriesMap } = useContext(CategoriesContext);
    // return (
    //     <div className='shop-container'>    
    //         {
    //             Object.keys(categoriesMap).map((title) => {
    //                 const products = categoriesMap[title];
    //                 return <CategoryPreview key={title} title={title} products={products} />
    //             })}
        
    //     </div>
    // )
    // New Code

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} ></Route>
            <Route path=":category" element={<Category />} ></Route>
        </Routes>
    )
}

export default Shop;