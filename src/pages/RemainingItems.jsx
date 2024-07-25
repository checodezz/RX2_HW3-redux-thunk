import { useSelector, useDispatch } from "react-redux";
import { fetchInventory, fetchRemovedItems } from "../actions/actions";
import { useEffect, useState } from "react";
const RemainingItems = () => {
  const dispatch = useDispatch();
  const storedItems = useSelector((state) => state.storedItems);
  const removedItems = useSelector((state) => state.removedItems);

  const totalStoredItems = storedItems.reduce(
    (acc, curr) => acc + curr.itemQuantity,
    0
  );
  const totalRemovedItems = removedItems.reduce(
    (acc, curr) => acc + curr.itemQuantity,
    0
  );
  const remainingItems = totalStoredItems - totalRemovedItems;

  useState(() => {
    dispatch(fetchInventory());
  }, []);

  useEffect(() => {
    dispatch(fetchRemovedItems());
  }, []);

  return (
    <div>
      <h1>Remaining Items in Inventory</h1>
      <h2>Inventory Total : {remainingItems}</h2>
    </div>
  );
};

export default RemainingItems;
