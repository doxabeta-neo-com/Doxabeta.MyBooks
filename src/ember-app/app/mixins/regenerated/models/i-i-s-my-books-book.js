import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  author: DS.belongsTo('i-i-s-my-books-author', { inverse: null, async: false }),
  tag: DS.hasMany('i-i-s-my-books-tag', { inverse: 'book', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-my-books-book.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  author: {
    descriptionKey: 'models.i-i-s-my-books-book.validations.author.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  tag: {
    descriptionKey: 'models.i-i-s-my-books-book.validations.tag.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BookE', 'i-i-s-my-books-book', {
    name: attr('Name', { index: 0 }),
    author: belongsTo('i-i-s-my-books-author', 'Author', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' }),
    tag: hasMany('i-i-s-my-books-tag', 'Tag', {
      name: attr('Name', { index: 0 })
    })
  });

  modelClass.defineProjection('BookL', 'i-i-s-my-books-book', {
    name: attr('Name', { index: 0 }),
    author: belongsTo('i-i-s-my-books-author', 'Name', {
      name: attr('Name', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
