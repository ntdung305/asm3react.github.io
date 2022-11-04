const Detail = (props) => {
  const dataImg = props;
  console.log(props);
  return (
    <div>
      <div>
        <div className="detailProducts1">
          <div>
            <img className="detailProducts-img" src={props.img1} />
          </div>
          <div className="detailProducts2">
            <div className="detailProducts-name">{props.name}</div>
            <div className="detailProducts-price">{props.price} VND</div>
            <div className="detailProducts-overview">{props.short_desc}</div>
            <div>
              <input />
              <button className="detailProducts-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button>Description</button>
        <div>PRODUCTION DESCRIPTION</div>
        <div>ĐẶC ĐIỂM NỔI BẬT</div>
        <div className="detailProducts-overview">{props.long_desc}</div>
      </div>
    </div>
  );
};
export default Detail;
