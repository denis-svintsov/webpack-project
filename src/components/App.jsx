import "../styles/style.scss";
import Recipes from "./Recipes";
import image02 from "../img/02.jpg";

const App = () => {
   return (
      <>
         <section className="hero"></section>
         <main>
            <section>
               <h1>Oh hai, React</h1>
            </section>
            <img src={image02} alt="image02" width="350" />
            <Recipes />
         </main>
      </>
   )
}

export default App