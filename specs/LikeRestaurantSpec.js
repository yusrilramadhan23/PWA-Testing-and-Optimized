/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import RestaurantIdb from '../src/scripts/data/restaurant-idb';
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('Liking a Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('the like button should not be displayed', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should successfully hit the like button', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await RestaurantIdb.getRestaurantData(1);

    expect(resto).toEqual({ id: 1 });

    RestaurantIdb.delRestaurant(1);
  });

  it('You should not be able to like a restaurant you already like again', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    await RestaurantIdb.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await RestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
    RestaurantIdb.delRestaurant(1);
  });
});
