import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  book: DS.belongsTo('i-i-s-my-books-book', { inverse: 'tag', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-my-books-tag.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  book: {
    descriptionKey: 'models.i-i-s-my-books-tag.validations.book.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('TagE', 'i-i-s-my-books-tag', {
    name: attr('Name', { index: 0 })
  });
};
