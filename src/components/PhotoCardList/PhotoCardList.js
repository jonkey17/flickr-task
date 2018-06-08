import React from 'react';

import PhotoCard from '../PhotoCard';

import './PhotoCardList.css'

const PhotoCardList = ({items=[]}) => {
  return (
    <div className="PhotoCardList">
    {
      items.map((item, index) => (<PhotoCard item={item} key={index}/>))
    }
    </div>
  );
}

export default PhotoCardList;