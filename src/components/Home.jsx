
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

const Home = () => {
    
    const { items } = useSelector(state => state.products);
    console.log("gomedataaaa",items?.data);
    return (
        <div className="main-menu-container">

      {items?.data.map((item) => {
        return <MenuItem key={item.id} item={item} />;
      })}
    </div>
     )
}
 
export default Home;