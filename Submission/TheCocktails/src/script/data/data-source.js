function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}

DataSource.prototype.searchCocktail = function (keyword) {
    var filteredCocktails = cocktails.filter(function (cocktail) {
        return cocktail.name.toUpperCase().includes(keyword.toUpperCase());
    });

    if (filteredCocktails.length) {
        this.onSuccess(filteredCocktails);
    } else {
        this.onFailed(keyword + " is not found");
    }
};