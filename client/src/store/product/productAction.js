import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APIURL } from "../../utils/constants";
import { toast } from "react-hot-toast";
import { getToken } from "../getToken";
const token = localStorage.getItem("userToken");

export const createItem = createAsyncThunk(
  "Create An Item",
  async (values, { rejectWithValue }) => {

    try {
      const formData = new FormData();
      formData.append("file", values.file);
      // console.log(authHeaders);
      const fileRes = await axios.post(`${APIURL}/file`, formData, getToken());
      values.image = fileRes.data.url;
      const { file, ...others } = values;
      const res = await axios.post(`${APIURL}/item`, others, getToken());
      // console.log(res);
      return res.data.message;
    } catch (error) {
      console.log(error);

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        console.log(error);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getAllItems = createAsyncThunk(
  "Get All Items",
  async (values, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${APIURL}/item`, {
        params: { category: values },
      });
      // console.log(res);

      return res.data;
    } catch (error) {
      // console.log(error);

      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        toast.error(error.message);
        console.log(error);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getItemById = createAsyncThunk(
  "Get Item By Id",
  async (values, { rejectWithValue }) => {
   
    try {
      const res = await axios.get(`${APIURL}/item/${values}`, {
      });
      // console.log(res);

      return res.data;
    } catch (error) {
      // console.log(error);

      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        toast.error(error.message);
        console.log(error);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const searchItems = createAsyncThunk(
  "Search Item xd",
  async (value, { rejectWithValue }) => {
    // console.log('searching');

    // console.log(value);

    try {
      const res = await axios.get(`${APIURL}/item/search`, {
        params: { query: value.searchValue, category: value.category },
      });
      // console.log(res.data);

      return res.data;
    } catch (error) {
      // console.log(error);

      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        toast.error(error.message);
        console.log(error);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const deleteItem = createAsyncThunk(
  "Delete An Item",
  async (values, { rejectWithValue }) => {
    // console.log(values);

    // console.log(token);
    try {
      // console.log(1);

      const fileRes = await axios.delete(
        `${APIURL}/file/${values.image}`,
        getToken()
      );
      console.log(fileRes);

      const res = await axios.delete(`${APIURL}/item/${values.id}`, getToken());
      toast.success(res.data.message);

      return res.data;
    } catch (error) {
      // console.log(error);

      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        console.log(error);
        toast.error(error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateItem = createAsyncThunk(
  "Update An Item",
  async (values, { rejectWithValue }) => {
    try {
      console.log(values);
      if (typeof values.file === "string") {
        const res = await axios.put(
          `${APIURL}/item/${values.id}`,
          values,
          getToken()
        );
        toast.success(res.data.message);
        return res.data;
      }
      const formData = new FormData();
      formData.append("file", values.file);
      const fileRes = await axios.put(
        `${APIURL}/file/${values.image}`,
        formData,
        getToken()
      );
      values.image = fileRes.data.url;
      const { file, ...others } = values;

      const res = await axios.put(
        `${APIURL}/item/${values.id}`,
        others,
        getToken()
      );

      toast.success(res.data.message);

      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        console.log(error);
        toast.error(error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);
