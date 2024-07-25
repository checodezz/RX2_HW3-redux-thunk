import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../actions/actions";

const AddNewItemForm = () => {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuatity] = useState("");
  const [entryType, setEntryType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entryType === "Add to Storage") {
      dispatch(
        addItem({ itemName, itemQuantity: parseFloat(itemQuantity), entryType })
      );
    } else {
      dispatch(
        removeItem({
          itemName,
          itemQuantity: parseFloat(itemQuantity),
          entryType,
        })
      );
    }
    setItemName("");
    setItemQuatity("");
    setEntryType("Add to Storage");
  };
  return (
    <div>
      <h1>Inventory Admin App</h1>

      <form onSubmit={handleSubmit}>
        <label>Item Name:</label>
        <br />
        <input
          type="text"
          required
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <br />
        <br />
        <label>Item Quantity:</label>
        <br />
        <input
          type="number"
          required
          value={itemQuantity}
          onChange={(e) => setItemQuatity(e.target.value)}
        />
        <br />
        <br />
        <label>Entry Type: </label>
        <br />
        <select
          value={entryType}
          onChange={(e) => setEntryType(e.target.value)}
        >
          <option>Add to Storage</option>
          <option>Remove from Storage</option>
        </select>
        <br />
        <br />
        <button type="submit">Add Item Data</button>
      </form>
    </div>
  );
};

export default AddNewItemForm;
