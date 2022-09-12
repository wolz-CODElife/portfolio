import {useRoutes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Articles from './pages/Articles';
import Tools from './pages/Tools';
import Contacts from './pages/Contacts';

function App() {
  
  let routes = useRoutes([
    { 
      path: '', 
      element: <Home />,
      children: [
        { 
          path: '/', 
          element: <h4>Welcome</h4>
        },
        { 
          path: 'about', 
          element: <About />
        },
        { 
          path: 'works', 
          element: <Works />
        },
        { 
          path: 'articles', 
          element: <Articles />
        },
        { 
          path: 'skills', 
          element: <Tools />
        },
        { 
          path: 'contact', 
          element: <Contacts />
        }
      ]
    }
  ]);

  return routes;

}

export default App;
