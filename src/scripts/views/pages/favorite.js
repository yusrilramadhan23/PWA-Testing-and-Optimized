/* eslint-disable linebreak-style */
import RestaurantIdb from '../../data/restaurant-idb';
import { createRestaurantsItemTemplate } from '../templates/template-creator';

const FavoriteRestaurant = {
  async render() {
    return `
        <section class="content">
            <div class="latest">
                <h1 tabindex="0" class="favoriteTitle">Restaurant Favorite</h1>
                <div class="list" id="explore-restaurant"></div>
                <div class="restaurants-item__not__found"></div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#explore-restaurant');
    if (restaurants.length === 0) {
      document.querySelector('.restaurants-item__not__found').innerHTML = 'Tidak ada Restoran Favorite untuk ditampilkan';
    } else {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantsItemTemplate(restaurant);
      });
    }
  },
};

export default FavoriteRestaurant;
