import ProductDisplay from './ProductDisplay.tsx';
import SalesGraph from './SalesGraph.tsx';
import SalesGrid from './SalesGrid.tsx';
import '../styles/Styles.css'

import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store.ts';
import { setData } from '../redux/dataSlice.ts';
import json from '../data.json';

export default function SalesDisplay() {

  // state
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data.data);

  // since data is constant in this prototype useEffect does not contain dependencies.
  // This could be different in a production environment where the product may
  // switch during runtime or data may update
  useEffect(() =>{
    const fetchData = async () => {
      try {
        const response = await fetch('../data.json');
        const jsonData = await response.json();
        dispatch(setData(jsonData[0])); //data in this example is a single item. Data model could potentially be mutated to loop over several items
      } catch (error) {
        console.error('Error fetching data:', error);
        // fake API call will fail in localhost. Fall back to directly grapping data
        const jsonData = json[0];
        dispatch(setData(jsonData));
      }
    };
    fetchData();
  },[dispatch]) 

  if (data === null) dispatch(setData(json[0]));
  
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