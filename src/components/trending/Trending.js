import "./Trending.css";
import TrendingList from "./TrendingList";
const Trending = () => {
  return (
    <div className="Trending">
      <div className="Trending-title">
        <div className="Trending-1">MADE THE HARD WAY</div>
        <div className="Trending-2">TOP TRENDING PRODUCTS</div>
      </div>
      <TrendingList className="Trending-list" />
    </div>
  );
};
export default Trending;
