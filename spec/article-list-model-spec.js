function testListArray(){
  var articlelist = new ArticleList();
  assert.isTrue(articlelist.articles.length === 0, 'Has no headlines when created');
};

testListArray();

function testAddArticleList(){
  var articlelist = new ArticleList();
  var article = new Article("First Headline")
  articlelist.addArticle(article)
  articlelist.createAndAddArticle("Second Headline")
  assert.isTrue(Array.isArray(articlelist.articles))
  assert.isTrue(articlelist.articles[0].displayHeadline() === "First Headline", "Add articles to an array" )
  // assert.isTrue(JSON.stringify(articlelist.articles) === JSON.stringify(["First Headline", "Second Headline"]))
};

testAddArticleList();


function testReturnHeadlines(){
  var articlelist = new ArticleList();
  var article = new Article();
  articlelist.addArticle(article);
  assert.isTrue(articlelist.returnAllHeadlines() === articlelist.articles, 'Can return all the articles')
};

testReturnHeadlines();

function testCreateAndAddingArticles(){
  var articlelist = new ArticleList();
  articlelist.createAndAddArticle("Article")
  assert.isTrue(articlelist.articles[0].displayHeadline() === "Article", "Can create and add a note function")
};

testCreateAndAddingArticles();
