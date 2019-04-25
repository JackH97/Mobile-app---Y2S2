import { Component } from '@angular/core';
import { MovieProvider } from '../../providers/movies/movies';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
  movies: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider: MovieProvider) {
  }

  ionViewDidLoad() {
    this.movieProvider.getMovies().subscribe((data) => {
      this.movies = data.Search;
    });
  }

}
