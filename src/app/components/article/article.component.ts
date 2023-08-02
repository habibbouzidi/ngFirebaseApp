import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit{

  articles: Article[]=[];
  article!: Article;
  saveAction="";
  constructor(private articleService: ArticleService){}

  ngOnInit() {
    this.getAllArticles();
  }

  getAllArticles(){
    this.articleService.getAllArticles().then(res=>{
      res.forEach((doc) => {
        let article: Article= doc.data();
        article.id = doc.id;
        this.articles.push(article);
      });
    }).catch(err=>{
      alert(err.message);
    })
  }

  newArticle(){
    this.article={
      title: "",
      subtitle: "",
      description: "",
      shortDescription: "",
      bases: "",
      stackLink: "",
      frontImage: "",
      technologies: "",
    }
    this.saveAction="create";
  }

  editArticle(article: Article){
    this.article = article;
    this.saveAction="update";
  }

  deleteArticle(article: Article){
    if(window.confirm("You really want to delete "+article?.title+" article?")){
      this.articleService.deleteArticle(article.id || "").then(res=>{
        const index = this.articles.findIndex(a=>a.id === article.id);
        this.articles.splice(index, 1);
        alert("Article successfully deleted.");
      }).catch(err=>{
        alert(err.message);
      })
    }
  }

  saveArticle(){
    if(this.saveAction=="update"){
      this.articleService.updateArticle(this.article, this.article.id || "").then(res=>{
        alert("Article successfully updated.")
      }).catch(err=>{
        alert(err.message);
      })
    }
    if(this.saveAction=="create"){
      this.articleService.addArticle(this.article).then(res=>{
        console.log("id article: "+res)
        this.article.id = res;
        this.articles.push(this.article);
        alert("Article successfully created.");
      }).catch(err=>{
        alert(err.message)
      })
    }
  }

}
