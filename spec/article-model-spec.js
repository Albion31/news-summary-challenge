function create_headline(){
  var article = new Article("New headline");
  assert.isTrue(article.headline === "New headline", "Instantiate a new article with a headline")
};

create_headline();

function return_headline(){
  var article = new Article("New headline");
  assert.isTrue(article.displayHeadline() === "New headline", "Will return the headline of an article")
};

return_headline();
