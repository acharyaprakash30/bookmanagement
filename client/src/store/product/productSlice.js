import { createSlice } from "@reduxjs/toolkit";
import { createItem, deleteItem, getAllItems, searchItems, updateItem,getItemById} from "./productAction";




const initialState = {

    loading: false,
    error: null,
    success: false,
    items: [],
    itemById:null

};

const productSlice = createSlice({
    name: "items",
    initialState: initialState,

    reducers: {
        clearFields: (state, { payload }) => {
            state.success = false;
            state.loading = false;
            state.error = null;
        },
    },

    extraReducers: {

        //create Product
        [createItem.fulfilled]: (state, { payload }) => {
            // console.log(state);
            state.error = null;
            state.success = payload;
            state.loading = false
        },
        [createItem.pending]: (state) => {

            state.loading = true;
            state.error = null;
            state.success = false
        },
        [createItem.rejected]: (state, { payload }) => {
            console.log(payload);
            state.error = payload
            state.loading = false
            state.success = false;
        },



        [getAllItems.fulfilled]: (state, { payload }) => {

            state.items = payload
            state.error = null;
            state.success = true;
            state.loading = false

        },
        [getAllItems.pending]: (state) => {

            state.loading = true;
            state.error = null;
            state.success = false;


        },
        [getAllItems.rejected]: (state, { payload }) => {
            console.log(payload);
            state.error = payload
            state.loading = false
            state.success = false;
            state.items = []


        },

        //get items by id
        [getItemById.fulfilled]: (state, { payload }) => {

            state.itemById = payload
            state.error = null;
            state.success = true;
            state.loading = false

        },
        [getItemById.pending]: (state) => {

            state.loading = true;
            state.error = null;
            state.success = false;

        },
        [getItemById.rejected]: (state, { payload }) => {
            console.log(payload);
            state.error = payload
            state.loading = false
            state.success = false;
            state.itemById = null
        },


        //search
        [searchItems.fulfilled]: (state, { payload }) => {
            state.items = payload
            state.error = null;
            state.success = true;
            state.loading = false

        },
        [searchItems.pending]: (state) => {

            state.loading = true;
            state.error = null;
            state.success = false;


        },
        [searchItems.rejected]: (state, { payload }) => {
            console.log(payload);
            state.error = payload
            state.loading = false
            state.success = false;

        },
        //delete

        [deleteItem.fulfilled]: (state, { payload }) => {

            // state.items = payload
            state.error = null;
            state.success = payload.message
            state.loading = false

        },
        [deleteItem.pending]: (state) => {

            state.loading = true;
            state.error = null;
            state.success = false


        },
        [deleteItem.rejected]: (state, { payload }) => {
            state.error = payload
            state.loading = false
            state.success = false;


        },

        //update
        [updateItem.fulfilled]: (state, { payload }) => {

            // state.items = payload
            state.error = null;
            state.success = payload.message
            state.loading = false

        },
        [updateItem.pending]: (state) => {

            state.loading = true;
            state.error = null;
            state.success = false


        },
        [updateItem.rejected]: (state, { payload }) => {
            state.error = payload
            state.loading = false
            state.success = false;


        },



    }

})

export default productSlice.reducer;
export const { clearFields } = productSlice.actions;