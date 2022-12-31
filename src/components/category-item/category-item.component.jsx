import './category-item.styles.scss'

const CategoryItem  = ({category})=>{
    const {title, image} = category;
    return(
    <div className="category-container">
    <div className="category-image">
    <img src={image} alt="Awesome Sunglasses"/>
    </div>
    <div className="category-container-body">
      <h2>{title}<br/><span>Men's Collection</span></h2>
      
      <a href="#">Show Now</a>
    </div>
  </div>
    )
  }
export default CategoryItem;