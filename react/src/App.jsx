
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import CakeShop from "./pages/CakeShop"
import Shop from "./pages/Shop"
import ShopDetails from "./pages/ShopDetails"
import About from "./pages/About"
import Faq from "./pages/Faq"
import Wishlist from "./pages/Wishlist"
import Cart from "./pages/Cart"
import Account from "./pages/Account"
import Checkout from "./pages/Checkout"
import Blog from "./pages/Blog"
import BlogDetails from "./pages/BlogDetails"
import Contact from "./pages/Contact"
import Error from "./pages/Error"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="" element={<CakeShop/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/shopDetails" element={<ShopDetails/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blogDetails" element={<BlogDetails/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  )
}

export default App
