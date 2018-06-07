import React from 'react';

import PhotoCard from '../PhotoCard';

import './PhotoCardList.css'

const PhotoCardList = ({items=[]}) => {
  return (
    <div className="PhotoCardList">
    {
      items.map((item) => (<PhotoCard item={item} key={item.link}/>))
    }
    </div>
  );
}

export default PhotoCardList;