const Card = (props: any) => (
  <>
    <p>{props.data.type}</p>
    <p>{props.data.quantity}</p>
    <p className="item_size">{props.data.size}</p>
  </>
);
export default Card;