import Item from "./Item";
import imgArticle1 from "../images/landscape1.jpg";
import imgArticle2 from "../images/landscape2.jpg";

const MainContent = () => {
  return (
    <div className="articles-container">
      <Item
        title="Lorem ipsum"
        titleDescription="Lorem ipsum dolor sit amet consectetur
        adipisicing elit."
        imgArticle={imgArticle1}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus illum
        animi ea sint quaerat aperiam quos ut, dolores iusto amet iure magnam
        nihil fuga voluptatum in quae enim minus saepe. Non, eligendi? Eius
        odio. "
      />
      <Item
        title="Ipsum Megaternum"
        titleDescription="Consectetur adipisicing elit Lorem ipsum dolor sit amet ."
        imgArticle={imgArticle2}
        text=" Non, eligendi? Eius
        odio, illo sed quae ad odit modi architecto porro velit officiis iste,
        laudantium harum pariatur voluptate. Eos neque iste minima perferendis
        laudantium ullam culpa magni aliquam aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </div>
  );
};

export default MainContent;
