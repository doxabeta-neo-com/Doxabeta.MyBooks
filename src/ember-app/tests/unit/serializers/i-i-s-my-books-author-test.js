import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-my-books-author', 'Unit | Serializer | i-i-s-my-books-author', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-my-books-author',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-my-books-author',
    'model:i-i-s-my-books-book',
    'model:i-i-s-my-books-tag',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
