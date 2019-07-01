import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  //const video = props.video;//상위에 사용된 video를 가져온다
  //위 코드가 props 대신 {video}와 동일하다
  const imageUrl = video.snippet.thumbnails.default.url;

//해당 list의 item을 video에 전달한다
  return (
    <li onClick = { () => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className = "media-left">
          <img className ="media-object" src = {imageUrl} />
        </div>
        <div className="media-body">
          <div className ="media-heading">
            { video.snippet.title }
          </div>
        </div>
      </div>
    </li>
  );
};

//위의 div는 메인 이미지와 써네일, 아래는 타이틀 같은거

export default VideoListItem;
