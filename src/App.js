// import './categories.styles.scss'
// import CategoryItem from './components/category_item/category_item.component'
import { Route, Routes, Outlet } from 'react-router-dom';

import Home from './routes/home/home.component';

import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const Shop = () => {
  return (
    <div>I am shoppping.</div>
  )
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
      
    </Routes>
  );
    // <div className="categories-container">

    //   {categories.map((category) => (
    //     <CategoryItem key={category.id} category={category}></CategoryItem>
    //   )
    //   )}
    //   Hello World!!
    // </div>
  
};

export default App;
