import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.my-books.caption'),
          title: i18n.t('forms.application.sitemap.my-books.title'),
          children: [{
            link: 'i-i-s-my-books-author-l',
            caption: i18n.t('forms.application.sitemap.my-books.i-i-s-my-books-author-l.caption'),
            title: i18n.t('forms.application.sitemap.my-books.i-i-s-my-books-author-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-my-books-book-l',
            caption: i18n.t('forms.application.sitemap.my-books.i-i-s-my-books-book-l.caption'),
            title: i18n.t('forms.application.sitemap.my-books.i-i-s-my-books-book-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})