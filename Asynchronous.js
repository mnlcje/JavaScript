//Implementing Async with Callback function
function getRecipeUsingCallBack() 
{
    setTimeout(() => {
        //Get Ids
        const recipeId = [1,2,3]; //IDs hardcoded
        console.log(recipeId);
        //Get the recipe Details for the given ID
        setTimeout(id => {
            const recipe = {title:'Noodles',publisher:'Mainak'};
            console.log(`Recipe ID : ${id}, Recipe : ${recipe.title}, Publisher : ${recipe.publisher}`);
        },1000,recipeId[1]);
      },1500);

    console.log('End');
}   
getRecipeUsingCallBack();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Implementing Async with Promises
//Create First Promise - Get Ids
const getRecipeIds = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([1,3,7,90]);
    },1500);
});
//Create Second Promise - Get Recipe Name for the given Id
const getRecipe = (recipeID) => {
    return new Promise((resolve,reject)=>{
        setTimeout(ID => {
            const recipe = {title:'Noodles'};
            resolve(`Recipe ID : ${ID} Recipe : ${recipe.title}`);
        },1500,recipeID);
    }); 
};
//Create third Promise - Get publisher of the receipe
const getPublisher = (recipeID) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(ID => {
            const recipe = {title:'Noodles',publisher:'Mainak'};
            resolve(`Recipe ID : ${ID} Recipe : ${recipe.title}, Publisher : ${recipe.publisher}`);
        },1500,recipeID);
    });

};
//Consume the Promises
getRecipeIds
.then(Ids => {
    console.log(Ids);
    return getRecipe(Ids[1]);//this will invoke next then
})
.then(recipe => {
    console.log(recipe);
    return getPublisher('1');
})
.then(recipe=>{
    console.log(recipe);    
})
.catch(error => {
    console.log(error);
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Using Async/Await to consume the Promises. Code for creating the Promises remains the same
async function getRecipeAW(){
const Ids = await getRecipeIds;
let recipe = await getRecipe(Ids[1]);
recipe = await getPublisher('1');
return recipe;
}
getRecipeAW().then(result => console.log(`${result}`));




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Making AJAX call with Fetch and Promises
function getWeather(woeid) {
    fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`)
    .then(result => {
        // console.log(result);
        return result.json();
    })  
    .then(data => {
        // console.log(data);
        const today = data.consolidated_weather[0];
        console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
    })
    .catch(error => console.log(error));
}
getWeather(2487956);
getWeather(44418);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Making AJAX Call with Fetch and Async/Await
async function getWeatherAW(woeid) {
    try {
        const result = await fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);
        return data;
    } catch(error) {
        alert(error);
    }
}

let dataLondon;
getWeatherAW(44418).then(data => {
    dataLondon = data
    console.log(dataLondon);
});








