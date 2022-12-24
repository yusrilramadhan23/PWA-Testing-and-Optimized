/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import RestaurantIdb from '../src/scripts/data/restaurant-idb';
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
    RestaurantIdb.putRestaurant({ id: 1 });
  });

  it('should show an unlike button', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should successfully hit the unlike button', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await RestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
