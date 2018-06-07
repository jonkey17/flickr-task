import React from 'react';

import './PhotoCard.css'
const getAuthorName = (author) => {
  const name = author.split('\"');
  return name[1].replace(/\s/g, '');
}

const generateDescription = (description) => {
  const elem = document.createElement('div');
  elem.innerHTML = description;
  if (elem.childElementCount>2) {
    return {__html: elem.lastChild.outerHTML};
  }
}

const PhotoCard = ({item={}}) => {
  if(item.title){
    return (
      <div className="PhotoCard">
        <div className="Image">
          <img src={item.media.m} />
        </div>
        <div className="Info">
          <div className="Title">
            <a href={item.link}>{item.title} </a>
            by
            <a href={'https://www.flickr.com/photos/'+(item.author_id)}> {getAuthorName(item.author)}</a>
          </div>
          <div className="Description">
            <div className="Subtitle">Description:</div>
            <div dangerouslySetInnerHTML={generateDescription(item.description)} />
          </div>
          <div className="tags">
            <span className="Subtitle">TAGS:</span>
            {item.tags}
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default PhotoCard;