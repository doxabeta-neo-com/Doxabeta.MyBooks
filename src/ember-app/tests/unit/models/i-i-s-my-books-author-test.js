import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-my-books-author', 'Unit | Model | i-i-s-my-books-author', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-my-books-author',
    'model:i-i-s-my-books-book',
    'model:i-i-s-my-books-tag',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
