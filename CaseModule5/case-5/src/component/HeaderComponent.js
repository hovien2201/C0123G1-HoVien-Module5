import 'bootstrap/dist/css/bootstrap.min.css';
// import './component/header-footer.css'
import { NavLink } from "react-router-dom";
export function HeaderComponent() {
  return (
    <>
    <header className="header">
      <div className="header-mobile-info">
        <div className="header-mobile-slide info1">
          <div className="inside">
            <div className="row">
              <div className="col-sm">
                <p>
                  <i className="icon-viber" />
                  <a href="#">+842363845555</a>
                </p>
              </div>
              <div className="col-sm mt-15 mt-sm-0">
                <p>
                  <i className="icon-closed-envelope" />
                  <a href="#">hehe@furamavietnam.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="header-mobile-slide info2">
          <div id="googleMapHeader" className="google-map" />
        </div>
        <div className="header-mobile-slide info3">
          <div className="inside">
            <div className="visible-xs visible-sm hidden-lg hidden-md">
              <form
                action="#"
                className="form-inline row"
                role="search"
                method="get"
              >
                <div className="col pr-0">
                  <input
                    type="text"
                    name="s"
                    defaultValue=""
                    placeholder="Search"
                    className="form-control w-100"
                  />
                </div>
                <div className="col-auto pl-0">
                  <button className="btn btn-primary" type="submit">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="header-mobile-slide info4">
          <div className="inside">
            <div className="row">
              <div className="col-sm">
                <p>
                  <a href="#">English</a>
                </p>
                <p>
                  <a href="#">German</a>
                </p>
              </div>
              <div className="col-sm">
                <p>
                  <a href="#">France</a>
                </p>
                <p>
                  <a href="#">Italian</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-content">
        <div className="container">
          <div className="row">
            <div className="col-auto col-sm-5 col-lg-3 d-flex align-items-center bestel-logo">
              <a href="content-home.html" className="header-logo">
                <img
                  src="https://furamavietnam.com/wp-content/uploads/2018/08/logo.png"
                  alt="logo "
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col col-md-auto col-lg-3 d-flex">
              <div className="catalog-widget d-none d-sm-block">
                <div className="onloader">
                  <img src="https://furamavietnam.com/wp-content/themes/bestel/images/ajax-loader.gif" />
                </div>
                <div className="catalog-widget-inside">
                  <a
                    href="https://www.tripadvisor.com/Hotel_Review-g298085-d302750-Reviews-Furama_Resort_Danang-Da_Nang_Quang_Nam_Province.html"
                    target="_blank"
                  >
                    <div className="widget-tripadvisor">
                      <div className="inside">
                        <div className="widget-tripadvisor-logo">
                          <img
                            src="https://smartdata.tonytemplates.com/bestel/wp-content/uploads/2018/05/widget-tripadvisor-logo.png"
                            alt=""
                          />
                        </div>
                        <div className="widget-tripadvisor-rating">
                          <img
                            src="https://furamavietnam.com/wp-content/uploads/2018/08/widget-tripadvisor-rating.png"
                            alt=""
                          />
                        </div>
                        <div className="widget-tripadvisor-text">2,746 Reviews</div>
                      </div>
                    </div>
                  </a>
                  <span className="catalog-widget-toggle js-catalog-widget-toggle" />
                </div>
              </div>
              <div className="catalog-widget-mobile d-flex d-sm-none align-items-center mx-auto" />
            </div>
            <div className="col-sm-3 d-none d-lg-block">
              <div className="header-contact d-flex">
                <div className="header-contact-icon">
                  <i className="icon-placeholder" />
                </div>
                <div className="header-contact-txt">
                  <p>
                    103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son
                    District, Danang City, Vietnam
                  </p>
                  <p className="txt-sm">
                    <span>7,0 km</span> from Danang Airport
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 d-none d-lg-block">
              <div className="header-contact d-flex">
                <div className="header-contact-icon">
                  <i className="icon-telephone" />
                </div>
                <div className="header-contact-txt">
                  <p className="txt-lg">84-236-3847 333/888</p>
                </div>
              </div>
              <div className="header-contact d-flex">
                <div className="header-contact-icon">
                  <i className="icon-closed-envelope" />
                </div>
                <div className="header-contact-txt">
                  <a href="mailto:reservation@furamavietnam.com">
                    reservation@furamavietnam.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-auto ml-auto d-flex d-lg-none">
              <button
                className="navbar-btn"
                data-target="#modalNavigation"
                data-toggle="modal"
              >
                <i className="icon-menu" />
              </button>
              <div
                className="modal fade modal-fullscreen-menu"
                id="modalNavigation"
              >
                <button aria-label="Close" className="close" data-dismiss="modal">
                  <i className="icon-close" />
                  CLOSE
                </button>
                <div className="modal-dialog" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-nav js-header-nav sticky">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="navbar-collapse">
              <ul
                id="menu-furama-resort"
                className="menu navbar-nav w-100 js-main-menu"
              >
                <li
                  id="nav-menu-item-2197"
                  className="nav-item menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                >
                  <NavLink to="/" className="nav-link main-menu-link">
                    Home
                  </NavLink>
                </li>
                <li
                  id="nav-menu-item-2197"
                  className="nav-item menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                >
                  <a href="#" className="nav-link main-menu-link">
                    The Resort
                  </a>
                </li>
                <li
                  id="nav-menu-item-1445"
                  className="nav-item menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                >
                  <a href="#" className="nav-link main-menu-link">
                    Rooms &amp; Suites
                  </a>
                </li>
                <li
                  id="nav-menu-item-1519"
                  className="nav-item menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                >
                  <a href="#" className="nav-link main-menu-link">
                    Culinary
                  </a>
                </li>
                <li
                  id="nav-menu-item-1564"
                  className="nav-item menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                >
                  <a href="#" className="nav-link main-menu-link">
                    Meeting &amp; Events
                  </a>
                </li>
                <li
                  id="nav-menu-item-1855"
                  className="nav-item menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                >
                  <a href="#" className="nav-link main-menu-link">
                    Spa &amp; Fitness
                  </a>
                </li>
                <li
                  id="nav-menu-item-1729"
                  className="nav-item menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                >
                  <NavLink to="/contact" className="nav-link main-menu-link">
                    Contact 
                  </NavLink>
                </li>
                <li
                  id="nav-menu-item-1806"
                  className="nav-item menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                >
                  <NavLink to="/customer" className="nav-link main-menu-link">
                    CustomerList
                  </NavLink>
                </li>
                {/* <li
                  id="nav-menu-item-2167"
                  className="nav-item menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                >
                  <NavLink to="/editService" className="nav-link main-menu-link">
                    Edit Service
                  </NavLink>
                </li> */}
                <li
                  id="nav-menu-item-2167"
                  className="nav-item menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                >
                  <NavLink to="/createService" className="nav-link main-menu-link">
                    Add Service
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

    </header>
    
    </>
  )
}