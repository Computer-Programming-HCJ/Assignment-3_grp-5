function searchRecipes() {
  const takeUserInput = document.getElementById('searchInput').value;
  const recipesApiKey = 'cb6b6a6ad915266a36bf867aa947cfec'; 
  const appId = '4295fbb8'; 
  const recipesApiUrl = `https://api.edamam.com/search?q=${takeUserInput}&app_id=${appId}&app_key=${recipesApiKey}`;

  fetch(recipesApiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network isn't responding.');
          }
          return response.json();
      })
      .then(data => {
          const recipes = data.hits;
          const recipeResults = document.getElementById('recipeResults');
          recipeResults.innerHTML = '';

          recipes.forEach(recipe => {
              const recipeName = recipe.recipe.label;
              const recipeUrl = recipe.recipe.url;

              const recipeElement = document.createElement('div');
              recipeElement.innerHTML = `<a href="${recipeUrl}" target="_blank">${recipeName}</a>`;
              recipeResults.appendChild(recipeElement);
          });
      })
      .catch(error => console.error('Error finding recipes=', error));
}
