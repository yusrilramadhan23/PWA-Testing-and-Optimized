/* eslint-disable linebreak-style */
import DetailRestaurant from '../views/pages/detail';
import FavoriteRestaurant from '../views/pages/favorite';
import ListRestaurant from '../views/pages/list';

const routes = {
  '/': ListRestaurant,
  '/list': ListRestaurant,
  '/detail/:id': DetailRestaurant,
  '/favorite': FavoriteRestaurant,
};

export default routes;
