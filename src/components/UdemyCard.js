import star_full from "../images/star_full.png";
import star_half from "../images/star_half.png";

const UdemyCard = (props) => {
  return (
    <div className="card_container">
      <img src={props.image} />
      <h1>{props.title1}</h1>
      <h1>{props.title2}</h1>
      <h1>{props.title3}</h1>
      <h2>{props.author1}</h2>
      <h2>{props.author2}</h2>
      <h2>{props.author3}</h2>
      <div className="star">
        <p>4.7</p>
        <img className="star_images" src={star_full} />
        <img className="star_images" src={star_full} />
        <img className="star_images" src={star_full} />
        <img className="star_images" src={star_full} />
        <img className="star_images" src={star_half} />
        <p>({props.viewers})</p>
      </div>
      <div className="price">
        <p className="boldFont">£{props.newPrice}</p>
        <p>£{props.oldPrice}</p>
      </div>
      <div className="bestseller">
        <p>Bestseller</p>
      </div>
    </div>
  );
};
export default UdemyCard;
