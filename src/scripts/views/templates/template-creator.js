/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantsItemTemplate = (restaurant) => `
  <div tabindex="0" class="list_item">
    <img tabindex="0" class="list_item_thumb lazyload" data-src="${CONFIG.BASE_IMAGE + restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
    <div tabindex="0" class="list_item_city">${restaurant.city}</div>
    <div tabindex="0" class="list_item_content">
        <p class="list_item_rating">
            Rating : 
            <a href="#" class="list_item_rating_value">${restaurant.rating}</a>
        </p>
        <h1 class="list_item_title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
        <div class="list_item_desc">${restaurant.description.slice(0, 150)}...</div>
    </div>
  </div>
`;

const createRestaurantsDetailTemplate = (restaurant) => `
  <article class="detail">
    <center><img src=${CONFIG.BASE_IMAGE + restaurant.pictureId} class="detail-img" alt="Gambar ${restaurant.name}"></center>
      <div class="detail-body">
          <h3 class="restaurant-name">${restaurant.name}</h3>
          <h4 class="rating-detail">Rating : <span>${restaurant.rating}</span></h4>
          <h5 class="city-detail">Kota : ${restaurant.city}</h5>
          <div class="adress">
            <h6>Alamat Restaurant</h6>
            <p>${restaurant.address}</p>
          </div>
          <div class="categories">
            <h6>Kategori Restaurant</h6>
            <p>${restaurant.categories
    .map((item) => item.name)
    .join(' - ')}</p>
          </div>
          <div class="menu-foods">
            <h6>Menu Makanan</h6>
            <p>${restaurant.menus.foods
    .map((item) => item.name)
    .join(', ')}</p>
          </div>
          <div class="menu-drinks">
            <h6>Menu Minuman</h6>
            <p class="drinks">${restaurant.menus.drinks
    .map((item) => `<small>${item.name}</small>`)
    .join(', ')}</p>
          </div>
          <div class="description">
            <h6>Description</h6>
            <p>${restaurant.description}</p>
          </div>
        </div>
          <div class="customer-reviews">
            <h6 class="customer-name">Customer Reviews</h6>
            ${restaurant.customerReviews.map((customer) => `
                <h6>${customer.name}</h6>
                <p>${customer.review}</p>
                <small>${customer.date}</small>
            `)}
          </div>
  </article>
`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantsItemTemplate,
  createRestaurantsDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
