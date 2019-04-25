import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { RugbyPlayerDietPage } from '../rugby-player-diet/rugby-player-diet';
import { MoviesPage } from '../movies/movies';
import { Top5playersPage } from '../top5players/top5players';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RugbyPlayerDietPage;
  tab3Root = MoviesPage;
  tab4Root = Top5playersPage;
  tab5Root = AboutPage;

  constructor() {

  }
}
