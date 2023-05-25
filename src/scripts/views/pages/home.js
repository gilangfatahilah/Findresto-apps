/* eslint-disable import/named */
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItem } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <hero-component></hero-component>
       <section class="catalogue-section" id="catalogue-section">
            <h1>Our <span>Catalogue</span></h1>
            <div id="card" class="card"></div>
        </section>
    `;
  },

  async afterRender() {
    const data = await RestaurantDbSource.listRestaurant();
    const restaurantContainer = document.querySelector('#card');
    data.restaurants.forEach((resto) => {
      restaurantContainer.innerHTML += createRestaurantItem(resto);
    });
  },
};

export default Home;
