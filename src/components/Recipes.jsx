import { useState } from "react";

const elvenShieldRecipe = {
   leatherStrips: 2,
   ironIngot: 1,
   refinedMoonstone: 4
}

const elvenGauntletsRecipe = {
   elvenShieldRecipe: 2,
   leather: 1,
   refinedMoonstone: 4
}

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);

const Recipes = () => {
   const [recipe, setRecipe] = useState({})
   return (
      <div>
         <h3>Current recipe:</h3>
         <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shield Recipe</button>
         <button onClick={() => setRecipe(elvenGauntletsRecipe)}>Elven Shield Recipe</button>

         <ul>
            {Object.keys(recipe).map((material) => (
               <li key={material}>
                  {material}: {recipe[material]}
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Recipes