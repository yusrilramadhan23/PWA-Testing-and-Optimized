/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async RestaurantData() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurantData(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async searchRestaurant(value) {
    const response = await fetch(API_ENDPOINT.SEARCH(value));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async reviewRestaurant() {
    const response = await fetch(API_ENDPOINT.REVIEW);
    const responseJson = response.json();
    return responseJson;
  }
}

export default RestaurantSource;
