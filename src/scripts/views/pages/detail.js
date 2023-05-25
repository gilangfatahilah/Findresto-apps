/* eslint-disable import/named */
import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetail } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
    <div id="detail" class="detail"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantById = await RestaurantDbSource.restaurantDetailById(url.id);
    const detailContainer = document.querySelector('#detail');
    detailContainer.innerHTML = createRestaurantDetail(restaurantById);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurantById.restaurant.id,
        name: restaurantById.restaurant.name,
        pictureId: restaurantById.restaurant.pictureId,
        description: restaurantById.restaurant.description,
        city: restaurantById.restaurant.city,
        rating: restaurantById.restaurant.rating,
      },
    });
  },

};

export default Detail;
