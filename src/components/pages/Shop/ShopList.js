import { useState } from "react";
import { useHistory } from "react-router-dom";
import Detail from "../Detail/Detail";
import "./ShopList.css";
const ShopList = (props) => {
  const dataProducts = props.data;
  const [dataShopList, setDataShopList] = useState();

  const history = useHistory();

  const clickDetailShopList = (x) => {
    // history.push("/detail");
    console.log(x);
    setDataShopList(x);
    <Detail detailData={dataShopList} />;
  };
  console.log(dataShopList);

  return (
    <div className="trendingList">
      {dataProducts.map((data, i) => {
        return (
          <div key={i}>
            <div className="trendingList1">
              <img
                onClick={() => {
                  clickDetailShopList(data);
                }}
                className="trendingList-img ShopList-img"
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
      ;
    </div>
  );
};
export default ShopList;
