
const Menu = () => {
  
    let items = [
      /**
       * When you look at your page, you'll see that the "<b>" tags show up instead of the text being bold.
       * This is because React doesn't render html by default. Rendering html can be a security risk
       * as you could be rendering malicious code. In this case though, it's your code and you can render
       * it safely. What you want to do here is to set the `innerHTML` with this:
       * 
       * https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html
       */
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
              /**
               * This console.log is probably just testing code, but the only thing it's testing is which item it is
               * and that's already in the DOM
               */
              <li className="recipe" key={item} onClick={() => console.log(item)}> {item} </li>
            ))}
          </ul>

           <button type="submit"  className="button">
            {/* Because you're not in a form here, this code doesn't apply */}
            <a id="modal" href="#modal" value="modal">click</a>
          </button> 
 

        </div>
        
        </div>
      </div>

      );
}
 
export default Menu;