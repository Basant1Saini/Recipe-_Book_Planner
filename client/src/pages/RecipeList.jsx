import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import RecipeForm from '../components/RecipeForm';

const API_URL = 'http://localhost:5000/api/recipes';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(API_URL);
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddRecipe = async (recipeData) => {
    try {
      const response = await axios.post(API_URL, recipeData);
      setRecipes([response.data, ...recipes]);
      setShowForm(false);
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  const handleEditRecipe = async (recipeData) => {
    try {
      const response = await axios.put(`${API_URL}/${editingRecipe._id}`, recipeData);
      setRecipes(recipes.map(recipe => 
        recipe._id === editingRecipe._id ? response.data : recipe
      ));
      setEditingRecipe(null);
      setShowForm(false);
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  const handleDeleteRecipe = async (id) => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        setRecipes(recipes.filter(recipe => recipe._id !== id));
      } catch (error) {
        console.error('Error deleting recipe:', error);
      }
    }
  };

  const startEdit = (recipe) => {
    setEditingRecipe(recipe);
    setShowForm(true);
  };

  const cancelForm = () => {
    setShowForm(false);
    setEditingRecipe(null);
  };

  if (loading) {
    return <div className="loading">Loading recipes...</div>;
  }

  return (
    <div className="recipe-list">
      <header className="header">
        <h1>Recipe Book Planner</h1>
        <button 
          onClick={() => setShowForm(true)} 
          className="add-recipe-btn"
        >
          Add New Recipe
        </button>
      </header>

      {showForm && (
        <div className="form-overlay">
          <RecipeForm
            recipe={editingRecipe}
            onSubmit={editingRecipe ? handleEditRecipe : handleAddRecipe}
            onCancel={cancelForm}
          />
        </div>
      )}

      <div className="recipes-container">
        {recipes.length === 0 ? (
          <p className="no-recipes">No recipes found. Add your first recipe!</p>
        ) : (
          recipes.map(recipe => (
            <RecipeCard
              key={recipe._id}
              recipe={recipe}
              onEdit={startEdit}
              onDelete={handleDeleteRecipe}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RecipeList;