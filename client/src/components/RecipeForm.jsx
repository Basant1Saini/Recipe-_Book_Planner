import { useState, useEffect } from 'react';

const RecipeForm = ({ recipe, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: [''],
    steps: ['']
  });

  useEffect(() => {
    if (recipe) {
      setFormData(recipe);
    }
  }, [recipe]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleArrayChange = (index, value, field) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({
      ...formData,
      [field]: newArray
    });
  };

  const addArrayItem = (field) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], '']
    });
  };

  const removeArrayItem = (index, field) => {
    const newArray = formData[field].filter((_, i) => i !== index);
    setFormData({
      ...formData,
      [field]: newArray
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredData = {
      ...formData,
      ingredients: formData.ingredients.filter(item => item.trim() !== ''),
      steps: formData.steps.filter(item => item.trim() !== '')
    };
    onSubmit(filteredData);
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <h2>{recipe ? 'Edit Recipe' : 'Add New Recipe'}</h2>
      
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Ingredients:</label>
        {formData.ingredients.map((ingredient, index) => (
          <div key={index} className="array-input">
            <input
              type="text"
              value={ingredient}
              onChange={(e) => handleArrayChange(index, e.target.value, 'ingredients')}
              placeholder={`Ingredient ${index + 1}`}
            />
            {formData.ingredients.length > 1 && (
              <button
                type="button"
                onClick={() => removeArrayItem(index, 'ingredients')}
                className="remove-btn"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('ingredients')}
          className="add-btn"
        >
          Add Ingredient
        </button>
      </div>

      <div className="form-group">
        <label>Steps:</label>
        {formData.steps.map((step, index) => (
          <div key={index} className="array-input">
            <textarea
              value={step}
              onChange={(e) => handleArrayChange(index, e.target.value, 'steps')}
              placeholder={`Step ${index + 1}`}
              rows="2"
            />
            {formData.steps.length > 1 && (
              <button
                type="button"
                onClick={() => removeArrayItem(index, 'steps')}
                className="remove-btn"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('steps')}
          className="add-btn"
        >
          Add Step
        </button>
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-btn">
          {recipe ? 'Update Recipe' : 'Add Recipe'}
        </button>
        <button type="button" onClick={onCancel} className="cancel-btn">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;