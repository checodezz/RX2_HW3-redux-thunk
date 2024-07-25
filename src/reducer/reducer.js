const initialState = {
    storedItems: [],
    removedItems: [],
    remainingItems: []
}

const inventoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_STOREDITEMS_SUCCESS":
            return {
                ...state, storedItems: action.payload
            }

        case "FETCH_REMOVEDITEMS_SUCCESS":
            return {
                ...state, removedItems: action.payload
            }

        case "FETCH_REMAININGITEMS_SUCCESS":
            return {
                ...state, remainingItems: action.payload
            }

        case "ADD_ITEM_SUCCESS":
            if (action.payload.entryType === "Add to Storage") {
                return {
                    ...state, storedItems: [...state.storedItems, action.payload]
                }
            } else {
                return {
                    ...state, removedItems: [...state.removedItems, action.payload]
                }
            }
        default:
            return state
    }
}

export default inventoryReducer