// useDataApi.js
import { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/context'; // Adjust the path accordingly

const useDataApi = (apiEndpoint) => {
  const { setLoading, data, setData, setSuccessMessage, setErrorMessage } =
    useContext(AppContext);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(apiEndpoint);
      setLoading(false);
      setData(res.data);
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
      console.log(error.message);
    }
  };

  const updateData = async (updateEndpoint, newData, successMessage) => {
    try {
      setLoading(true);
      const updatedData = await axios.put(updateEndpoint, newData);
      setData([updatedData.data]);
      setLoading(false);
      setSuccessMessage(successMessage);
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      handleRequestError(error, 'Data did not update');
    }
  };

  const deleteData = async (deleteEndpoint, successMessage) => {
    try {
      setLoading(true);
      await axios.delete(deleteEndpoint);
      setData(null); // You might want to adjust this based on your use case
      setLoading(false);
      setSuccessMessage(successMessage);
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      handleRequestError(error, 'Error deleting data');
    }
  };

  const postData = async (postEndpoint, newData, successMessage) => {
    try {
      setLoading(true);
      const response = await axios.post(postEndpoint, newData);
      setData(response.data);
      setLoading(false);
      setSuccessMessage(successMessage);
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      handleRequestError(error, 'Error posting data');
    }
  };

  const handleRequestError = (error, defaultMessage) => {
    setLoading(false);
    setErrorMessage(defaultMessage);
    setErrorMessage(error.message);
    setTimeout(() => setErrorMessage(''), 3000);
    console.error(`Error: ${defaultMessage}`, error.message);
  };

  return { fetchData, updateData, deleteData, postData };
};

export default useDataApi;
