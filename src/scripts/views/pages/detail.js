/* eslint-disable linebreak-style */
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestaurantsDetailTemplate } from '../templates/template-creator';

const DetailRestaurant = {
  async render() {
    return `
            <h2 tabindex="0" class="titleDetail">Detail Restaurant</h2>
            <section class="content"></section>
            <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurantData(url.id);
    const restaurantContainer = document.querySelector('.content');

    restaurantContainer.classList.add('detail-page');
    restaurantContainer.innerHTML += createRestaurantsDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default DetailRestaurant;
