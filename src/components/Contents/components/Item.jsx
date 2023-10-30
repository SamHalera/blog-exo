const Item = (props) => {
  return (
    <article>
      <h3>{props.title}</h3>
      <h4>{props.titleDescription}</h4>
      <img src={props.imgArticle} alt="" />
      <p>{props.text}</p>
    </article>
  );
};

export default Item;
