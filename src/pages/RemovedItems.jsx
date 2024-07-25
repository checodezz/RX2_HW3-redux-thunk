import { useDispatch, useSelector } from "react-redux";
import { fetchRemovedItems } from "../actions/actions";
import { useEffect } from "react";
const RemovedItems = () => {
  const dispatch = useDispatch();
  const removedItems = useSelector((state) => state.removedItems);
  const totalRemovedItems = removedItems.reduce(
    (acc, curr) => acc + curr.itemQuantity,
    0
  );
  useEffect(() => {
    dispatch(fetchRemovedItems());
  }, []);
  return (
    <div>
      <h1>Removed Items from Inventory</h1>
      <ul>
        {removedItems.map((item, index) => (
          <li key={index}>
            {item.itemName} : {item.itemQuantity}
          </li>
        ))}
      </ul>
      <h2>Total Removed Items: {totalRemovedItems}</h2>
    </div>
  );
};

export default RemovedItems;
