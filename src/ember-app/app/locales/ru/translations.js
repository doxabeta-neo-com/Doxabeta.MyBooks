import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'My_ books',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'My_ books',
          title: 'My_ books'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-my-books-author-l': IISMy_BooksAuthorLForm,
    'i-i-s-my-books-book-l': IISMy_BooksBookLForm,
    'i-i-s-my-books-author-e': IISMy_BooksAuthorEForm,
    'i-i-s-my-books-book-e': IISMy_BooksBookEForm
  },

});

export default translations;
