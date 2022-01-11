var main = function () {
    var searchElement = document.querySelector("#searchElement");
    var buttonSearchElement = document.querySelector("#searchButtonElement");
    var cocktailListElement = document.querySelector("#cocktailList");

    var onButtonSearchClicked = function () {
        var dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchCocktail(searchElement.value);
    };

    var renderResult = function (results) {
        cocktailListElement.innerHTML = "";
        results.forEach(function (cocktail) {
            var name = cocktail.name;
            var imgCocktail = cocktail.imgCocktail;
            var description = cocktail.description;

            var cocktailElement = document.createElement("div");
            cocktailElement.setAttribute("class", "card");

            cocktailElement.innerHTML = '<img class="card-img-top" src="' + imgCocktail + '" alt="Card image cap">\n' +
                '<div class="card-body">\n' +
                '<h5 class="card-title">' + name + '</h5>\n' +
                '<p class="card-text">' + description + '</p>' +
                '</div>';
            cocktailListElement.appendChild(cocktailElement);
        })
    };

    var fallbackResult = function (message) {
        cocktailListElement.innerHTML = "";
        cocktailListElement.innerHTML += '<div class="alert alert-light" role="alert">' + message + '</div>'
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};