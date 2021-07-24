const Recipe = ({ recipe }) => {
  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <img
            className='recipe_img'
            src={recipe['recipe']['image']}
            alt='recipe'
          />
          <p className='recipe_label'>{recipe['recipe']['label']}</p>
        </div>
        <div className='flip-card-back'>
          <span className='recipe_ingredients'>
            <h5 className='recipe_title'>Ingredients</h5>
            <ul className='recipe_ingredient'>
              {recipe['recipe']['ingredientLines'].map((ingredient, key) => (
                <li key={key}>{ingredient}</li>
              ))}
            </ul>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Recipe
