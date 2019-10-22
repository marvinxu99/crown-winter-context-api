<<<<<<< HEAD
import React, { useContext } from 'react';
=======
import React from 'react';
import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';
//import { createStructuredSelector } from 'reselect';
>>>>>>> master

import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';

<<<<<<< HEAD
import CollectionsContext from '../../contexts/collections/collections.context';
=======
const CollectionPage = ({ collection }) => {
  //console.log(match.params);
  
  //if(!collection) {
  //console.log('need re-direct');
  //  return(<Redirect to='/shop' />);
  //}
>>>>>>> master


const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;
 
   return(
    <div className='collection-page'>
      <h2 className='title'>{ title }</h2>
      <div className='items'>
        {
          items.map(item => (
            <CollectionItem 
              className='collection-item' 
              key={ item.id } 
              item={ item } 
            /> 
          ))
        }
      </div>
    </div>
  )
}

export default CollectionPage;