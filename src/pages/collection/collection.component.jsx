import React, { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';

import CollectionsContext from '../../contexts/collections/collections.context';

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

  // return(
  //   <CollectionsContext.Consumer>
  //   {
  //     collections => {
  //       const collection = collections[match.params.collectionId];
  //       const { title, items } = collection;
  //       return(
  //         <div className='collection-page'>
  //           <h2 className='title'>{ title }</h2>
  //           <div className='items'>
  //             {
  //               items.map(item => (
  //                 <CollectionItem 
  //                   className='collection-item' 
  //                   key={ item.id } 
  //                   item={ item } 
  //                 /> 
  //               ))
  //             }
  //           </div>
  //         </div>
  //       )
  //     }
  //   }
  //   </CollectionsContext.Consumer>
  // )
  
}

export default CollectionPage;