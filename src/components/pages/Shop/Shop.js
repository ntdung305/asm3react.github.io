import MainNav from "../../LayOut/MainNav";
import ShopBanner from "./ShopBanner";
import "./Shop.css";
import ShopMain from "./ShopMain";

const Shop = () => {
  return (
    <div className="shop">
      <MainNav />
      <ShopBanner />
      <main className="shop-main">
        <ShopMain />
      </main>
    </div>
  );
};
export default Shop;
