function testListArray(){
  var articlelist = new ArticleList();
  assert.isTrue(articlelist.articles.length === 0, 'Has no headlines when created ');
};

testListArray();

function testArticleList(){
  var articlelist = new ArticleList();
  var article = new Article("First Headline")
  articlelist.addArticle(article)
  assert.isTrue(Array.isArray(articlelist.articles))
};

testArticleList();

function testAddArticleList(){
  var articlelist = new ArticleList();
  var article = new Article("First Headline")
  articlelist.addArticle(article)
  articlelist.createAndAddArticle("Second Headline")
  assert.isTrue(articlelist.articles[0].displayHeadline() === "First Headline" )
  // assert.isTrue(JSON.stringify(articlelist.articles) === JSON.stringify(["First Headline", "Second Headline"]))
};

testAddArticleList();
