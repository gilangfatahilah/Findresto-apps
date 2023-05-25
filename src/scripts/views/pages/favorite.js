import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItem } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="fav-restaurant">
          <h1>Favorites Restaurant</h1>
          <div id="fav-card" class="card"></div>
      </div>
    `;
  },

  async afterRender() {
    const data = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#fav-card');
    console.log(data);

    if (data.length > 0) {
      data.forEach((resto) => {
        restaurantContainer.innerHTML += createRestaurantItem(resto);
      });
    } else {
      document.querySelector('.fav-restaurant').innerHTML += '<empty-favorite></empty-favorite>';
    }
  },
};

export default Favorite;
