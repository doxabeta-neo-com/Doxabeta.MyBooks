import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISMy_BooksAuthorLForm from './forms/i-i-s-my-books-author-l';
import IISMy_BooksBookLForm from './forms/i-i-s-my-books-book-l';
import IISMy_BooksAuthorEForm from './forms/i-i-s-my-books-author-e';
import IISMy_BooksBookEForm from './forms/i-i-s-my-books-book-e';
import IISMy_BooksAuthorModel from './models/i-i-s-my-books-author';
import IISMy_BooksBookModel from './models/i-i-s-my-books-book';
import IISMy_BooksTagModel from './models/i-i-s-my-books-tag';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-my-books-author': IISMy_BooksAuthorModel,
    'i-i-s-my-books-book': IISMy_BooksBookModel,
    'i-i-s-my-books-tag': IISMy_BooksTagModel
  },

  'application-name': 'My_ books',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'My_ books',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'My_ books',
          title: 'My_ books'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'my-books': {
          caption: 'My books',
          title: 'My books',
          'i-i-s-my-books-author-l': {
            caption: 'Authors',
            title: ''
          },
          'i-i-s-my-books-book-l': {
            caption: 'Books',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-my-books-author-l': IISMy_BooksAuthorLForm,
    'i-i-s-my-books-book-l': IISMy_BooksBookLForm,
    'i-i-s-my-books-author-e': IISMy_BooksAuthorEForm,
    'i-i-s-my-books-book-e': IISMy_BooksBookEForm
  },

});

export default translations;
