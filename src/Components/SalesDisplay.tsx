import ProductDisplay from './ProductDisplay.tsx';
import SalesGraph from './SalesGraph.tsx';
import SalesGrid from './SalesGrid.tsx';
import '../styles/Styles.css'

import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store.ts';
import { setData } from '../redux/dataSlice.ts';
import copy from '../data_copy.json'

export default function SalesDisplay() {

  // state
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data.data);

  // since data is constant in this prototype useEffect does not contain 
  // dependencies relating to the data itself
  // This could be different in a production environment where the product may
  // switch during runtime or data may update
  useEffect(() =>{
    const fetchData = async () => {
      fetch('/sales-data.json')
        .then(response => response.json())
        .then((json) => {
          // in this example only one product should occupy the screen
          // the data model could be shifted to account for several products
          // such as in a multi product display
          if (Array.isArray(json) && json.length > 0) {
            const product = json[0];
            dispatch(setData(product));
          } 
          else {
            throw new Error('JSON data is empty or not an array');
          }
        }) 
    }
    fetchData();
  },[dispatch]) 

  // sanity check. If for some reason the API fails fall
  // back to local copy
  if (data === null) {
    dispatch(setData(copy[0]));
  }

  // the display is two columns with product details on the left hand side and
  // sales data (grid and graph) on the right hand side. If necessary, the right
  // hand side will scroll
  return (
    <div className='container'>
      <div className='left-column'>
        <ProductDisplay product={data}></ProductDisplay>
      </div>
      <div className='right-column'>
        <div>
          <SalesGrid salesData={data?.sales}></SalesGrid>
          { /* Problem statement only requires one of the two of Grid or Graph. If both were 
               required the object below would be a functioning component*/ }
          <SalesGraph props={data?.sales}></SalesGraph>
        </div>
      </div>
    </div>
  );
}