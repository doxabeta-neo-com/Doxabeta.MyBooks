import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-my-books-author-l');
  this.route('i-i-s-my-books-author-e',
  { path: 'i-i-s-my-books-author-e/:id' });
  this.route('i-i-s-my-books-author-e.new',
  { path: 'i-i-s-my-books-author-e/new' });
  this.route('i-i-s-my-books-book-l');
  this.route('i-i-s-my-books-book-e',
  { path: 'i-i-s-my-books-book-e/:id' });
  this.route('i-i-s-my-books-book-e.new',
  { path: 'i-i-s-my-books-book-e/new' });
});

export default Router;
