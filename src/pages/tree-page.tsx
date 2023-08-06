import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./tree-page.module.css";
const GroupComponent: FunctionComponent = () => {
  const navigate = useNavigate();

  const onUserIconClick = useCallback(() => {
    navigate("/dashboard-login");
  }, [navigate]);

  return (
    <div className={styles.treePage}>
      <div className={styles.main} id="plant-card">
        <div className={styles.plantCardParent} id="card-list">
          <div className={styles.plantCard} id="plant-card">
            <div className={styles.rectangleParent}>
              <div className={styles.componentChild} />
              <img
                className={styles.componentItem}
                alt=""
                src="/ellipse-3@2x.png"
              />
              <div className={styles.indoor}>Indoor</div>
              <div className={styles.leavesLights}>Leaves Lights</div>
            </div>
            <div className={styles.buyNowButton}>
              <img
                className={styles.addCartRectangle}
                alt=""
                src="/add-cart-rectangle.svg"
              />
              <div className={styles.addToCartContainer}>
                <p className={styles.buyNow}>Buy Now</p>
              </div>
              <img
                className={styles.buyNowIcon}
                alt=""
                src="/buy-now-icon.svg"
              />
            </div>
            <div className={styles.addCartButton}>
              <img
                className={styles.addCartRectangle}
                alt=""
                src="/add-cart-rectangle.svg"
              />
              <img
                className={styles.shoppingCartIcon}
                alt=""
                src="/shoppingcart-icon.svg"
              />
              <div className={styles.addToCartContainer}>Add to cart</div>
            </div>
          </div>
          <div className={styles.plantCard1}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <img
                className={styles.groupItem}
                alt=""
                src="/ellipse-31@2x.png"
              />
              <div className={styles.indoor1}>Indoor</div>
              <div className={styles.leavesLights1}>Leaves Lights</div>
            </div>
            <div className={styles.buyNowButton}>
              <img
                className={styles.addCartRectangle}
                alt=""
                src="/add-cart-rectangle.svg"
              />
              <div className={styles.addToCartContainer}>
                <p className={styles.buyNow}>Buy Now</p>
              </div>
              <img
                className={styles.buyNowIcon}
                alt=""
                src="/buy-now-icon.svg"
              />
            </div>
            <div className={styles.addCartButton1}>
              <img
                className={styles.addCartRectangle}
                alt=""
                src="/add-cart-rectangle.svg"
              />
              <img
                className={styles.shoppingCartIcon}
                alt=""
                src="/shoppingcart-icon1.svg"
              />
              <div className={styles.addToCartContainer}>Add to cart</div>
            </div>
          </div>
          <div className={styles.plantCard2}>
            <div className={styles.rectangleContainer}>
              <div className={styles.groupChild} />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="/ellipse-32@2x.png"
              />
              <div className={styles.frameDiv} />
              <div className={styles.indoor1}>Indoor</div>
              <div className={styles.leavesLights1}>Leaves Lights</div>
            </div>
            <div className={styles.buyNowButton2}>
              <img
                className={styles.addCartRectangle}
                alt=""
                src="/add-cart-rectangle.svg"
              />
              <div className={styles.addToCartContainer}>
                <p className={styles.buyNow}>Buy Now</p>
              </div>
              <img
                className={styles.buyNowIcon}
                alt=""
                src="/buy-now-icon.svg"
              />
            </div>
            <div className={styles.addCartButton2}>
              <img
                className={styles.addCartRectangle}
                alt=""
                src="/add-cart-rectangle.svg"
              />
              <img
                className={styles.shoppingCartIcon}
                alt=""
                src="/shoppingcart-icon.svg"
              />
              <div className={styles.addToCartContainer}>Add to cart</div>
            </div>
          </div>
          <img
            className={styles.arrowRightCircleIcon}
            alt=""
            src="/arrowrightcircle.svg"
          />
        </div>
        <div className={styles.rect1Parent}>
          <img className={styles.rect1Icon} alt="" src="/rect-1@2x.png" />
          <div className={styles.frame}>
            <div className={styles.loremIpsumDolorContainer}>
              <p className={styles.buyNow}>Lorem ipsum dolor sit amet,aliqua</p>
              <p className={styles.buyNow}>
                consectetur adipiscing elit ut ...
              </p>
            </div>
            <div className={styles.discoverNewWayContainer}>
              <p className={styles.buyNow}>Discover new</p>
              <p className={styles.buyNow}>way to</p>
              <p className={styles.buyNow}>{`decorate `}</p>
              <p className={styles.buyNow}>your home .</p>
            </div>
            <div className={styles.blog}>Blog</div>
            <img className={styles.frameChild} alt="" src="/vector-1.svg" />
            <div className={styles.frame1}>
              <img className={styles.frameItem} alt="" src="/group-5.svg" />
              <div className={styles.bySouha}>{`By Souha . H `}</div>
            </div>
          </div>
        </div>
      </div>
      <nav className={styles.navs}>
        <div className={styles.frame2}>
          <div className={styles.logo}>
            <img className={styles.logoChild} alt="" src="/star-1.svg" />
            <div className={styles.tree}>Tree</div>
          </div>
          <div className={styles.navLinks}>
            <div className={styles.home}>Home</div>
            <div className={styles.productsParent}>
              <div className={styles.home}>Products</div>
              <img
                className={styles.akarIconschevronDown}
                alt=""
                src="/akariconschevrondown.svg"
              />
            </div>
            <div className={styles.home}>About</div>
            <div className={styles.home}>Pricing</div>
          </div>
        </div>
        <div className={styles.frame3}>
          <div className={styles.searchBox}>
            <img className={styles.icon} alt="" src="/-.svg" />
            <div className={styles.searchForAnythingContainer}>
              <span className={styles.search}>{`Search `}</span>
              <span className={styles.forAnything}>for anything</span>
            </div>
          </div>
          <img
            className={styles.userIcon}
            alt=""
            src="/user.svg"
            onClick={onUserIconClick}
          />
          <img
            className={styles.shoppingCartIcon3}
            alt=""
            src="/shoppingcart.svg"
          />
        </div>
      </nav>
      <div className={styles.footers}>
        <div className={styles.row}>
          <div className={styles.left}>
            <div className={styles.link01}>
              <img
                className={styles.containerIcon}
                alt=""
                src="/container2.svg"
              />
              <div className={styles.label}>Link</div>
              <img
                className={styles.containerIcon}
                alt=""
                src="/container2.svg"
              />
            </div>
            <div className={styles.link01}>
              <img
                className={styles.containerIcon}
                alt=""
                src="/container2.svg"
              />
              <div className={styles.label}>Link</div>
              <img
                className={styles.containerIcon}
                alt=""
                src="/container2.svg"
              />
            </div>
            <div className={styles.link01}>
              <img
                className={styles.containerIcon}
                alt=""
                src="/container2.svg"
              />
              <div className={styles.label}>Link</div>
              <img
                className={styles.containerIcon}
                alt=""
                src="/container2.svg"
              />
            </div>
          </div>
          <div className={styles.logo1}>
            <div className={styles.mark}>
              <img className={styles.blurIcon} alt="" src="/blur2@2x.png" />
            </div>
            <img className={styles.zeroIcon} alt="" src="/zero2.svg" />
          </div>
          <div className={styles.left}>
            <div className={styles.link01}>
              <img
                className={styles.containerIcon}
                alt=""
                src="/container2.svg"
              />
              <div className={styles.label}>Link</div>
              <img
                className={styles.containerIcon}
                alt=""
                src="/container2.svg"
              />
            </div>
            <div className={styles.link01}>
              <img
                className={styles.containerIcon}
                alt=""
                src="/container2.svg"
              />
              <div className={styles.label}>Link</div>
              <img
                className={styles.containerIcon}
                alt=""
                src="/container2.svg"
              />
            </div>
            <div className={styles.link01}>
              <img
                className={styles.containerIcon}
                alt=""
                src="/container2.svg"
              />
              <div className={styles.label}>Link</div>
              <img
                className={styles.containerIcon}
                alt=""
                src="/container2.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.divider}>
          <div className={styles.divider1} />
        </div>
        <div className={styles.text}>
          ©2023 madeofzero. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
