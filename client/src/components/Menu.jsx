
const Menu = () => {
  
    let items = [
      "<b>Wraps</b>",
      "Turkey - R63",
      "Chicken - R70",
      "Mix Beef - R100",
      "<b>Burger</b>",
      "Crunchy Double Chicken - R150",
      "BBQ Chicken Cheese - R180",
      "<b>Chicken</b>",
      "Wings - R90",
      "Grilled Chicken - R200",
      "Chili Fried Chicken - R120",
      "<b>Others</b>",
      "Jollof Rice - R350",
      "Spaghetti - R50",
      "Malva Pudding - R380",
      "Chocolate Cake - R365",
      "<b>Drinks</b>",
      "Cocktails - R150",
      "Coke - R30",
      "Milkshake - R42",
      "Orange Juice - R35",
      "Beverages",
      "Wine - R180",
      "Beer - R97",
      "Cider - R150",
    ];


    return (

        <div className="container">
        <div className="title">
          <h3>Menu</h3>
        
        <div className="menu" id="ordermenu">

          {items.length === 0 && <p>No items found </p>}
          <ul className="recipe-item ">
            {items.map((item) => (
              <li className="recipe" key={item} onClick={() => console.log(item)}> {item} </li>
            ))}
          </ul>

           <button type="submit"  className="button">
            <a id="modal" href="#modal" value="modal">click</a>
          </button> 
 

        </div>
        
        </div>
      </div>

      );
}
 
export default Menu;