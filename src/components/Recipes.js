import Recipe from './Recipe'

const Recipes = ({ recipes }) => {
  return (
    <div className='recipeFlex'>
      {recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
      ))}
    </div>
  )
}

export default Recipes
