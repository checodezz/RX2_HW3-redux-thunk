import { useSelector, useDispatch } from "react-redux";
import { fetchInventory } from "../actions/actions";
import { useEffect } from "react";

const Inventory = () => {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.storedItems);

  console.log(inventory);

  const totalItems = inventory.reduce(
    (acc, curr) => acc + curr.itemQuantity,
    0
  );

  useEffect(() => {
    dispatch(fetchInventory());
  }, []);

  return (
    <div>
      <h1>Inventory Items</h1>
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>
            {item.itemName} : {item.itemQuantity}
          </li>
        ))}
      </ul>
      <h2>Total Inventory Items: {totalItems}</h2>
    </div>
  );
};

export default Inventory;
