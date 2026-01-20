import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./project/index.jsx";
import './index.css';
import GithubUsers from "./GithubUsers";


//react components:function
/*rules of creating components:
1. must start with capital letter 
2. must return a single element or null
3. must be exported if used in other files 
4. if you want to return multiple elements, wrap them in a parent element or use React fragments
*/

/*
Execise rules 1 and 2
-Create a component with name Aboutme
-Have it return a single element or null
-Render a component:just like html 
-Have you component return <div>{name}</div>
-Render a component:just like html 
1.rename the component with small letter: break rules observe
2.break rule 2 by not returning anything 
3.return invalid jxs eg garbage
4.return multiple html elements

function Aboutme() {
  return <div>Asumpta</div>;
}
  //<Aboutme></Aboutme>
*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GithubUsers />
  </StrictMode>,
)

export default App;