(function(exports){
  function Article(headline, url, body) {
    this.headline = headline;
    this.url = url;
    this.body = body;
  };

  Article.prototype.displayHeadline = function(headline){
    return this.headline
  };

  Article.prototype.displayUrl = function(url){
    return this.url
  };

  Article.prototype.displayBody = function(body){
    return this.body
  };

  exports.Article = Article;
})(this);
