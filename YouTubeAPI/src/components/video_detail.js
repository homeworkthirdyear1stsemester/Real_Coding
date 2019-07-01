//video detail은 state가 필요하지않는다 그러므로 class가 필요없다
import React from 'react';

const VideoDetail = ( { video } ) => {
  //props의 video 객체를 가져옴
  if(!video){
    return <div>Loading...</div>;
  }
  //return 을 만나므로 다음 내용을 실행하지 않는다

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${ videoId }`;

  return (
    <div className = "video-detail col-md-8">
      <div className = "embed-responsive embed-responsive-16by9">
        <iframe className = "embed-responsive-item" src={ url }></iframe>
      </div>
      <div className = "details">
        <div>{ video.snippet.title }</div>
        <div>{ video.snippet.description }</div>
      </div>
    </div>
  );
}

export default VideoDetail;
