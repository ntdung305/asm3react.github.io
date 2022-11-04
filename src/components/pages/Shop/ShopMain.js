import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ShopList from "./ShopList";

const ShopMain = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [dataRender, setDataRender] = useState(dataProducts);
  const fetchData = async () => {
    const data = await axios.get(
      `https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74`
    );
    setDataProducts(data.data);
    setDataRender(dataProducts);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const ResultListIphone = dataProducts.filter((items) => {
    return items.category === "iphone";
  });

  const ResultListIpad = dataProducts.filter((items) => {
    return items.category === "ipad";
  });

  const ResultListWatch = dataProducts.filter((items) => {
    return items.category === "watch";
  });

  const ResultListAirpod = dataProducts.filter((items) => {
    return items.category === "airpod";
  });

  const RenderIphone = () => {
    setDataRender(ResultListIphone);
  };

  const RenderAirpod = () => {
    setDataRender(ResultListIpad);
  };
  const RenderWatch = () => {
    setDataRender(ResultListWatch);
  };
  const RenderIpad = () => {
    setDataRender(ResultListAirpod);
  };

  const RenderOther = () => {
    setDataRender([]);
  };
  return (
    <div className="shopMain-search12">
      <div>
        <ul className="shopnav-ul">
          <li
            onClick={() => {
              setDataRender(dataProducts);
            }}
            className="shopnav-ul1"
          >
            CATEGORIES
          </li>
          <li className="shopnav-ul__1">Iphone & Mac</li>
          <li onClick={RenderIphone} className="shopnav-ul__2">
            Iphone
          </li>
          <li onClick={RenderIpad} className="shopnav-ul__2">
            ipad
          </li>
          <li onClick={RenderOther} className="shopnav-ul__2">
            Macbook
          </li>
          <li className="shopnav-ul__1">Wireless</li>
          <li onClick={RenderAirpod} className="shopnav-ul__2">
            airpod
          </li>
          <li onClick={RenderWatch} className="shopnav-ul__2">
            Watch
          </li>
          <li className="shopnav-ul__1">Other</li>
          <li onClick={RenderOther} className="shopnav-ul__2">
            Mouse
          </li>
          <li onClick={RenderOther} className="shopnav-ul__2">
            Keyboard
          </li>
          <li onClick={RenderOther} className="shopnav-ul__2">
            Other
          </li>
        </ul>
      </div>
      <div>
        <div className="shopMain-search">
          <input className="shopMain-search__input" placeholder="Search" />
          <select className="shopMain-search__option">
            <option className="shopMain-search" value="Default">
              Default
            </option>
            <option value="high">high to low price</option>
            <option value="low">low to high price</option>
          </select>
        </div>
        {<ShopList data={dataRender} />}
        <div className="search__pagi">
          <div className="shopMain-search__pagi">
            <a className="shopMain-search__pagi1">&lt;</a>
            <a className="shopMain-search__pagi2">1</a>
            <a className="shopMain-search__pagi1">&gt;</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopMain;
