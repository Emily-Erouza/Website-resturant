import React from "react";
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
          <div id="text">
          {items.map((item) => (
            <div key={item} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </div>
        
        </div>
      </div>

      );
}
 
export default Menu;