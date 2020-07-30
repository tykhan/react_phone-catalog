/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './App.scss';

const App = () => (
  <div className="App">
    <header className="header">
      <a href="#">
        <img
          src="../img/icons/logo.svg"
          alt="logo"
          className="header__logo"
        />
      </a>

      <ul className="header__nav">
        <li className="header__nav-item">
          <a href="#" className="header__link header__link_active">Home</a>
        </li>
        <li className="header__nav-item">
          <a href="#" className="header__link">Phones</a>
        </li>
        <li className="header__nav-item">
          <a href="#" className="header__link">Tablets</a>
        </li>
        <li className="header__nav-item">
          <a href="#" className="header__link">Accessories</a>
        </li>
      </ul>

      <div className="header__shopping">
        <a href="#" className="header__favourites">
          <img src="../img/icons/liked-items.svg" alt="favourites"/>
        </a>
        <a href="#" className="header__basket">
          <img src="../img/icons/basket.svg" alt="basket"/>
        </a>
      </div>
    </header>

    <main>
      <section className="hero container">
        <div className="hero__slider">
          <button className="hero__switch switch">
            <div className="switch_left"></div>
          </button>

          <div className="hero__carrousel"></div>

          <button className="hero__switch switch">
            <div className="switch_right"></div>
          </button>
        </div>
      </section>

      <section className="hot-price container">
        <div className="hot-price__top">
          <h2 className="hot-price__title title">Hot prices</h2>
          <div className="hot-price__switcher">
            <button className="hot-price__switcher_left switch switch_left"></button>
            <button className="hot-price__switcher_right switch switch_right"></button>
          </div>
        </div>

        <div className="hot-price__cards card__row">
          <div className="card">
            <img
              className="card__photo"
              src="./img/phones/nexus-s.0.jpg"
              alt=""
            />
            <div className="card__name">Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</div>

            <div className="card__price">
              <div className="card__new-price">$799</div>
              <div className="card__old-price">$899</div>
            </div>

            <div className="card__line"></div>

            <div className="card__screen card__property-block">
              <div className="card__screen_text card__property-name">Screen</div>
              <div className="card__screen_property card__property">5.8” OLED</div>
            </div>

            <div className="card__capacity card__property-block">
              <div className="card__capacity_text card__property-name">Capacity</div>
              <div className="card__capacity_property card__property">64 GB</div>
            </div>

            <div className="card__ram card__property-block">
              <div className="card__ram_text card__property-name">RAM</div>
              <div className="card__ram_property card__property">4 GB</div>
            </div>

            <div className="card__action">
              <button className="card__btn">Add to cart</button>
              <button className="card__like"></button>
            </div>
          </div>

          <div className="card">
            <img
              className="card__photo"
              src="./img/phones/samsung-gem.0.jpg"
              alt=""
            />
            
            <div className="card__name">Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</div>

            <div className="card__price">
              <div className="card__new-price">$1099</div>
              <div className="card__old-price">$1199</div>
            </div>

            <div className="card__line"></div>

            <div className="card__screen card__property-block">
              <div className="card__screen_text card__property-name">Screen</div>
              <div className="card__screen_property card__property">6.5” OLED</div>
            </div>

            <div className="card__capacity card__property-block">
              <div className="card__capacity_text card__property-name">Capacity</div>
              <div className="card__capacity_property card__property">64 GB</div>
            </div>

            <div className="card__ram card__property-block">
              <div className="card__ram_text card__property-name">RAM</div>
              <div className="card__ram_property card__property">4 GB</div>
            </div>

            <div className="card__action">
              <button className="card__btn">Add to cart</button>
              <button className="card__like"></button>
            </div>
          </div>

          <div className="card">
            <img
              className="card__photo"
              src="./img/phones/samsung-transform.0.jpg"
              alt=""
            />
            <div className="card__name">Apple iPhone 11 128GB Purple (iMT9G2FS/A)</div>

            <div className="card__price">
              <div className="card__new-price">$799</div>
              <div className="card__old-price">$899</div>
            </div>

            <div className="card__line"></div>

            <div className="card__screen card__property-block">
              <div className="card__screen_text card__property-name">Screen</div>
              <div className="card__screen_property card__property">6.2” IPS</div>
            </div>

            <div className="card__capacity card__property-block">
              <div className="card__capacity_text card__property-name">Capacity</div>
              <div className="card__capacity_property card__property">128 GB</div>
            </div>

            <div className="card__ram card__property-block">
              <div className="card__ram_text card__property-name">RAM</div>
              <div className="card__ram_property card__property">4 GB</div>
            </div>

            <div className="card__action">
              <button className="card__btn">Add to cart</button>
              <button className="card__like"></button>
            </div>
          </div>

          <div className="card">
            <img
              className="card__photo"
              src="./img/phones/t-mobile-g2.0.jpg"
              alt=""
            />
            <div className="card__name">Apple iPhone X 256GB Silver (iMT9G2FS/A)</div>

            <div className="card__price">
              <div className="card__new-price">$859</div>
              <div className="card__old-price">$899</div>
            </div>

            <div className="card__line"></div>

            <div className="card__screen card__property-block">
              <div className="card__screen_text card__property-name">Screen</div>
              <div className="card__screen_property card__property">5.8” OLED</div>
            </div>

            <div className="card__capacity card__property-block">
              <div className="card__capacity_text card__property-name">Capacity</div>
              <div className="card__capacity_property card__property">256 GB</div>
            </div>

            <div className="card__ram card__property-block">
              <div className="card__ram_text card__property-name">RAM</div>
              <div className="card__ram_property card__property">3 GB</div>
            </div>

            <div className="card__action">
              <button className="card__btn">Add to cart</button>
              <button className="card__like"></button>
            </div>
          </div>
        </div>
      </section>

      <section className="category container">
        <h2 className="category__title title">Shop by category</h2>

        <div className="category__row">
          <div className="category__phones category-item">
            <div className="category-item__photo category-item__photo_phones">
              <img
                className="category-item__photo_item"
                src="./img/category/phones.png"
                alt=""
              />
            </div>
            <a href="#" className="category-item__title">Mobile phones</a>
            <div className="category-item__models">95 models</div>
          </div>

          <div className="category__tablets category-item">
            <div className="category-item__photo category-item__photo_tablets">
              <img
                className="category-item__photo_item"
                src="./img/category/tablets.png"
                alt=""
              />
            </div>
            <a href="#" className="category-item__title">Tablets</a>
            <div className="category-item__models">24 models</div>
          </div>

          <div className="category__accessories category-item">
            <div className="category-item__photo category-item__photo_accessories">
              <img
                className="category-item__photo_item"
                src="./img/category/accessories.png"
                alt=""
              />
            </div>
            <a href="#" className="category-item__title">Accessories</a>
            <div className="category-item__models">100 models</div>
          </div>
        </div>
      </section>
    
      <section className="new-model container">
        <div className="new-model__top">
          <h2 className="new-model__title title">New brand models</h2>
          <div className="new-model__switcher">
            <button className="new-model__switcher_left switch switch_left"></button>
            <button className="new-model__switcher_right switch switch_right"></button>
          </div>
        </div>

        <div className="new-model__cards card__row">
          <div className="card">
            <img
              className="card__photo"
              src="./img/phones/nexus-s.0.jpg"
              alt=""
            />
            <div className="card__name">Apple iPhone 11 Pro Max 512GB Midnight Green (iMT9G2FS/A)</div>

            <div className="card__price">
              <div className="card__new-price">$1299</div>
            </div>

            <div className="card__line"></div>

            <div className="card__screen card__property-block">
              <div className="card__screen_text card__property-name">Screen</div>
              <div className="card__screen_property card__property">6.5” OLED</div>
            </div>

            <div className="card__capacity card__property-block">
              <div className="card__capacity_text card__property-name">Capacity</div>
              <div className="card__capacity_property card__property">512 GB</div>
            </div>

            <div className="card__ram card__property-block">
              <div className="card__ram_text card__property-name">RAM</div>
              <div className="card__ram_property card__property">4 GB</div>
            </div>

            <div className="card__action">
              <button className="card__btn">Add to cart</button>
              <button className="card__like"></button>
            </div>
          </div>

          <div className="card">
            <img
              className="card__photo"
              src="./img/phones/samsung-gem.0.jpg"
              alt=""
            />
            
            <div className="card__name">Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</div>

            <div className="card__price">
              <div className="card__new-price">$1099</div>
            </div>

            <div className="card__line"></div>

            <div className="card__screen card__property-block">
              <div className="card__screen_text card__property-name">Screen</div>
              <div className="card__screen_property card__property">6.5” OLED</div>
            </div>

            <div className="card__capacity card__property-block">
              <div className="card__capacity_text card__property-name">Capacity</div>
              <div className="card__capacity_property card__property">64 GB</div>
            </div>

            <div className="card__ram card__property-block">
              <div className="card__ram_text card__property-name">RAM</div>
              <div className="card__ram_property card__property">4 GB</div>
            </div>

            <div className="card__action">
              <button className="card__btn">Add to cart</button>
              <button className="card__like"></button>
            </div>
          </div>

          <div className="card">
            <img
              className="card__photo"
              src="./img/phones/samsung-transform.0.jpg"
              alt=""
            />
            <div className="card__name">Apple iPhone 11 256GB Purple (iMT9G2FS/A)</div>

            <div className="card__price">
              <div className="card__new-price">$999</div>
            </div>

            <div className="card__line"></div>

            <div className="card__screen card__property-block">
              <div className="card__screen_text card__property-name">Screen</div>
              <div className="card__screen_property card__property">6.2” IPS</div>
            </div>

            <div className="card__capacity card__property-block">
              <div className="card__capacity_text card__property-name">Capacity</div>
              <div className="card__capacity_property card__property">256 GB</div>
            </div>

            <div className="card__ram card__property-block">
              <div className="card__ram_text card__property-name">RAM</div>
              <div className="card__ram_property card__property">4 GB</div>
            </div>

            <div className="card__action">
              <button className="card__btn">Add to cart</button>
              <button className="card__like"></button>
            </div>
          </div>

          <div className="card">
            <img
              className="card__photo"
              src="./img/phones/t-mobile-g2.0.jpg"
              alt=""
            />
            <div className="card__name">Apple iPhone 11 128GB (Product) Red (iMT9G2FS/A)</div>

            <div className="card__price">
              <div className="card__new-price">$999</div>
            </div>

            <div className="card__line"></div>

            <div className="card__screen card__property-block">
              <div className="card__screen_text card__property-name">Screen</div>
              <div className="card__screen_property card__property">6.2” IPS</div>
            </div>

            <div className="card__capacity card__property-block">
              <div className="card__capacity_text card__property-name">Capacity</div>
              <div className="card__capacity_property card__property">128 GB</div>
            </div>

            <div className="card__ram card__property-block">
              <div className="card__ram_text card__property-name">RAM</div>
              <div className="card__ram_property card__property">3 GB</div>
            </div>

            <div className="card__action">
              <button className="card__btn">Add to cart</button>
              <button className="card__like"></button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="footer__container container">
        <a href="#">
          <img
            src="../img/icons/logo.svg"
            alt="logo"
            className="footer__logo"
          />
        </a>

        <div className="footer__info">
          <a href="#" className="footer__gihub">Github</a>
          <a href="#" className="footer__contacts">Contacts</a>
          <a href="#" className="footer__rights">Rights</a>
        </div>

        <div className="footer__to-top">
          <a href="#" className="footer__back-top">Back to top</a>
          <div className="footer__btn-top switch"></div>
        </div>
      </div>
    </footer>

  </div>
);

export default App;
