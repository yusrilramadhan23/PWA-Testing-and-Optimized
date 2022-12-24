/* eslint-disable no-undef */
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Liking and Unliking Restaurant', ({ I }) => {
  I.see('Restaurant Terbaik Untukmu', 'h1');

  I.seeElement('.list_item_title a');
  I.click(locate('.list_item_title a').first());

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list_item');

  I.seeElement('.list_item_title a');
  I.click(locate('.list_item_title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.waitForElement('.restaurants-item__not__found');
  I.seeElement('.restaurants-item__not__found');
});
