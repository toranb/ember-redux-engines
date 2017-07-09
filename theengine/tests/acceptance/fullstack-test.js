import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | fullstack');

test('visiting /people', function(assert) {
  visit('/people');

  andThen(function() {
    assert.equal(currentURL(), '/people');
    assert.equal(find('button').length, 2);
    assert.equal(find('.foo').text().trim(), 'start');
    assert.equal(find('.people').text().trim(), 'people');
  });

  click('button:eq(0)');

  andThen(function() {
    assert.equal(find('.foo').text().trim(), 'engine');
    assert.equal(find('.people').text().trim(), 'people');
  });

  click('button:eq(1)');

  andThen(function() {
    assert.equal(find('.foo').text().trim(), 'engine');
    assert.equal(find('.people').text().trim(), 'works!');
  });
});
