/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.seeElement('.fav-restaurant');
  I.see('Favorite restaurant still empty', '.empty-favorite-tag');

  I.amOnPage('/');
  I.seeElement('.catalogue-card a');
  const firstRestaurant = locate('.card-content-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.catalogue-card');
  const likedRestaurantTitle = await I.grabTextFrom('.card-content-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.catalogue-card a');
  I.click(locate('.card-content-title').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.catalogue-card a');
  const firstLikedRestaurant = locate('.card-content-title').first();
  const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);
  I.click(firstLikedRestaurant);

  I.seeElement('.detail-title');
  const likedRestaurantTitle = await I.grabTextFrom('.detail-title');
  assert.strictEqual(firstLikedRestaurantTitle, likedRestaurantTitle);

  I.seeElement('[aria-label="unlike restaurant"]');
  I.click('[aria-label="unlike restaurant"]');

  I.amOnPage('/#/favorite');
  I.see('Favorite restaurant still empty', '.empty-favorite-tag');
});
