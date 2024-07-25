export const addItem = (item) => async (dispatch) => {
    try {
        const response = await fetch("https://inventory-storage-app-backend-student-neog.replit.app/add-to-store", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json();
        console.log(data.data);

        if (data === true) {
            dispatch({ type: "ADD_ITEM_SUCCESS", payload: data.data })
        }
    } catch (error) {
        console.error("error", error)
    }
};


export const removeItem = (item) => async (dispatch) => {

    try {
        const response = await fetch("https://inventory-storage-app-backend-student-neog.replit.app/remove-from-store", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        console.log(data);
        if (data) {
            dispatch({ type: "ADD_ITEM_SUCCESS", payload: data.data })
        }
    } catch (error) {
        console.error("error", error)
    }

}

export const fetchInventory = () => async (dispatch) => {
    try {
        const response = await fetch("https://inventory-storage-app-backend-student-neog.replit.app/storage-items");
        const data = await response.json();
        console.log(data)
        if (data) {
            dispatch({ type: "FETCH_STOREDITEMS_SUCCESS", payload: data })
        }
    } catch (error) {
        console.error("error", error)
    }
}

export const fetchRemovedItems = () => async (dispatch) => {
    try {
        const response = await fetch("https://inventory-storage-app-backend-student-neog.replit.app/dispatched-from-store");

        const data = await response.json();
        console.log(data)
        if (data) {
            dispatch({ type: "FETCH_REMOVEDITEMS_SUCCESS", payload: data })
        }
    } catch (error) {
        console.error("error", error)
    }
}