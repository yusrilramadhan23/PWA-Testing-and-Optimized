/* eslint-disable linebreak-style */
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantsItemTemplate,
} from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
    <section class="content">
      <div class="latest">
          <h1 tabindex="0" class="HomeTitle" id="RestoUO">Restaurant Terbaik Untukmu</h1>
          <div class="list" id="explore-restaurant"></div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.RestaurantData();
    const restaurantContainer = document.querySelector('#explore-restaurant');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantsItemTemplate(restaurant);
    });
  },
};

export default ListRestaurant;
