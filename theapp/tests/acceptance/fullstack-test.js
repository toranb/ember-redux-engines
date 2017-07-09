import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | fullstack');

test('visiting /people', function(assert) {
  visit('/people');

  andThen(function() {
    assert.equal(currentURL(), '/people');
    assert.equal(find('button').length, 3);
    assert.equal(find('.appfoo').text().trim(), 'start');
    assert.equal(find('.foo').text().trim(), 'start');
    assert.equal(find('.people').text().trim(), 'people');
  });

  click('button:eq(0)');

  andThen(function() {
    assert.equal(find('.appfoo').text().trim(), 'app');
    assert.equal(find('.foo').text().trim(), 'app');
    assert.equal(find('.people').text().trim(), 'people');
  });

  click('button:eq(1)');

  andThen(function() {
    assert.equal(find('.appfoo').text().trim(), 'engine');
    assert.equal(find('.foo').text().trim(), 'engine');
    assert.equal(find('.people').text().trim(), 'people');
  });

  click('button:eq(2)');

  andThen(function() {
    assert.equal(find('.appfoo').text().trim(), 'engine');
    assert.equal(find('.foo').text().trim(), 'engine');
    assert.equal(find('.people').text().trim(), 'works!');
  });
});
