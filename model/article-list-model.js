(function(exports){
  var ArticleList = function() {
    this.articles = [];
  };

  ArticleList.prototype.addArticle = function(article){
      this.articles.push(article);
  };

  ArticleList.prototype.createAndAddArticle = function(headline){
    article = new Article(headline);
    this.addArticle(article);
  };

exports.ArticleList = ArticleList;
})(this);
