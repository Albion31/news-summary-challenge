(function(exports){
  function Article(headline) {
    this.headline = headline;
  };

  Article.prototype.displayHeadline = function(){
    return this.headline
  };

  exports.Article = Article;
})(this);
