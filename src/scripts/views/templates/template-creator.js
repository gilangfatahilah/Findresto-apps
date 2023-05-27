/* eslint-disable implicit-arrow-linebreak */
import CONFIG from '../../globals/config';

const createRestaurantItem = (restaurant) =>
  // eslint-disable-next-line no-unused-expressions
  `<div class="catalogue-card">
        <a href="#/detail/${restaurant.id}" class="card-a-tag">
            <div class="img-container">
            <img tabindex="0" class="lazyload" alt="${restaurant.name}" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" crossorigin="anonymous"/>
            </div>

            <div tabindex="0" class="card-rating">
                <p>⭐️
                <span>${restaurant.rating}</span>
                </p>
            </div>
            
            <div tabindex="0" class="card-content">
            <p class="card-content-title">${restaurant.name}</p> <span> - ${restaurant.city}</span>
            </div>
        </a>    
    </div>
    `;

const createRestaurantDetail = (data) => `
  <div class="restaurant-info">
    <img src="${CONFIG.BASE_IMAGE_URL + data.restaurant.pictureId}" class="detail-picture" alt="${data.restaurant.name}">
    <div class="detail-content">
      <h1 class="detail-title">${data.restaurant.name}</h1>
        <div class="detail-category-container">
           ${data.restaurant.categories.map((category) => `<span class="detail-category">${category.name}</span>`).join('')}
        </div>
        <p class="detail-location">${data.restaurant.address}, ${data.restaurant.city}</p>
        <p class="detail-description">${data.restaurant.description}</p>
    </div>
    <h1>Menu</h1>
  </div>

  <div class="restaurant-menu">
    <div class="detail-menu">
      <div class="menu-title-container">
        <h2 class="menu-title">Food</h2>
      </div>
        <ul class="menu-list">
          ${data.restaurant.menus.foods.map((food) => `<li class="menu-item">${food.name}</li>`).join(' ')}
        <ul>
      </div>
      <div class="detail-menu">
        <div class="menu-title-container">
          <h2 class="menu-title">Drinks</h2>
        </div>
        <ul class="menu-list">
          ${data.restaurant.menus.drinks.map((drink) => `<li class="menu-item">${drink.name}</li>`).join(' ')}
        </ul>
    </div>
  </div>

  <div class="restaurant-review">
  <h2 class="review-title">Customer Reviews</h2>
    <div id="review-container">
      ${data.restaurant.customerReviews.map((review) => `
          <div class="review-body">
            <h3 class="review-customer-name">${review.name}</h3>
            <small class="review-date-post">${review.date}</small>
            <p class="review-content">${review.review}</p>
          </div>
      `).join('')}
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like restaurant" id="likeButton" class="like">
    <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createRestaurantItem,
  createRestaurantDetail,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
