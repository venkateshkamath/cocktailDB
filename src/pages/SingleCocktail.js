import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [cocktail, setCocktail] = React.useState(null);
  useEffect(() => {
    setLoading(true);
    //all the loading
    //setup fetch here
    const getDrinks = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          setLoading(false);
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newDrink = {
            name,
            image,
            instructions,
            ingredients,
            info,
            category,
            glass,
          };
          setCocktail(newDrink);
        }
      } catch (e) {
        setLoading(false);
        console.log(e);
      }
    };
    getDrinks();
    //or there is re render or id change
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  // no cocktail
  if (!cocktail) {
    return <h2 className="section-title">No cocktail to display</h2>;
  }
  const { name, image, glass, instructions, ingredients, category, info } =
    cocktail;
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {ingredients.map((item, index) => {
              return item && <span key={index}>{item}</span>;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
