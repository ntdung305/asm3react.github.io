import "./Banner.css";
const Banner = () => {
  const btnBannerHandler = () => {
    window.location.replace("/Shop");
  };
  return (
    <div className="banner">
      <img className="Banner-img" src="/Picture/banner1.jpg" alt="" />
      <div className="banner-title">
        <div className="banner-title__1">NEW INSPIRATION 2020</div>
        <div className="banner-title__2">20% OFF ON NEW SEASON</div>
        <button onClick={btnBannerHandler} className="banner-title__btn">
          Browse collections
        </button>
      </div>
    </div>
  );
};

export default Banner;
