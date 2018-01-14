function testCreateHeadline(){
  var article = new Article("New headline");
  assert.isTrue(article.headline === "New headline", "Instantiate a new article with a headline")
};

testCreateHeadline();

function return_headline(){
  var article = new Article("New headline");
  assert.isTrue(article.displayHeadline() === "New headline", "Will return the headline of an article")
};

return_headline();

function testCreatedWithURLs() {

  var headline = "Headline"
  var url = "url"
  var body = "body"
  var article = new Article(headline, url, body)

  assert.isTrue(article.displayHeadline() === "Headline", "Displaying headline")
  assert.isTrue(article.displayUrl() === "url", "Displaying url")
  assert.isTrue(article.displayBody() === "body", "Displaying body")

}

testCreatedWithURLs();
