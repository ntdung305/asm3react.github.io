import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./TrendingList.css";

const TrendingList = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [show, setShow] = useState();
  const [dataImg, setDataImg] = useState();

  //getdataAPI
  const fetchData = async () => {
    const data = await axios.get(
      `https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74`
    );
    setDataProducts(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //BTN click
  const clickImgHandler = (x) => {
    console.log(x);
    setDataImg(x);
    setShow(true);
  };
  console.log(dataImg);
  const clickXHandler = () => {
    setShow(false);
  };

  // render detail
  let detail;
  if (show) {
    detail = (
      <div className="detailProducts">
        <div className="detailProducts1">
          <div>
            <img className="detailProducts-img" src={dataImg.img1} alt="" />
          </div>

          <div className="detailProducts2">
            <div className="detailProducts-name">{dataImg.name}</div>
            <div className="detailProducts-price">{dataImg.price} VND</div>
            <div className="detailProducts-overview">{dataImg.short_desc}</div>
            <button className="detailProducts-btn">BUY</button>
            <div onClick={clickXHandler} className="detailProducts-x">
              &times;
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="trendingList">
      {dataProducts.map((data, i) => {
        return (
          <div key={i}>
            <div className="trendingList1">
              <img
                onClick={() => {
                  clickImgHandler(data);
                }}
                className="trendingList-img"
                src={data.img1}
                alt=""
              />
            </div>
            <div>
              <div className="trendingList__name">{data.name}</div>
              <div className="trendingList__price">{data.price} VND</div>
            </div>
          </div>
        );
      })}
      <div>{show && detail}</div>
    </div>
  );
};
export default TrendingList;
