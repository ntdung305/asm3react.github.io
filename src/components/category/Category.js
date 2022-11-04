import "./Category.css";
const Category = () => {
  return (
    <div className="Category">
      <div className="Category-title">
        <div className="Category-1">CAREFULLY CREATED COLLECTIONS</div>
        <div className="Category-2">BROWSE OUT CATEGORIES</div>
      </div>

      <div className="Category-img__1">
        <div className="a1">
          <img className="Category-img1" src="/Picture/product_1.png" alt="1" />
        </div>
        <div className="a2">
          <img className="Category-img1" src="/Picture/product_2.png" alt="2" />
        </div>
      </div>
      <div className="Category-img__2">
        <div className="a3">
          <img className="Category-img2" src="/Picture/product_3.png" alt="3" />
        </div>
        <div className="a4">
          <img className="Category-img2" src="/Picture/product_4.png" alt="4" />
        </div>
        <div className="a5">
          <img className="Category-img2" src="/Picture/product_5.png" alt="5" />
        </div>
      </div>
    </div>
  );
};
export default Category;
