const RecipeCard = ({ recipe, onEdit, onDelete }) => {
  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <div className="recipe-content">
        <div className="ingredients">
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="steps">
          <h4>Steps:</h4>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className="recipe-actions">
        <button onClick={() => onEdit(recipe)} className="edit-btn">
          Edit
        </button>
        <button onClick={() => onDelete(recipe._id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;