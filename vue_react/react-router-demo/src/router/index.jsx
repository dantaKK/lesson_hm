import { BrowserRouter as Router,
     Routes,
     Route,
     Link } from 'react-router-dom';
import App from "../App"
import About from "../pages/About"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import {postRoutes} from '../pages/post/post.routes'
const AppRouter = () => {
    return (
        <Router>
            <Routes>
               
                <Route path="/" element={<App></App>} > 
                 <Route index element={<Home></Home>} />
                <Route path="about" element={<About></About>} />
                {postRoutes}
                <Route path="*" element={<NotFound></NotFound>} />
              
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;