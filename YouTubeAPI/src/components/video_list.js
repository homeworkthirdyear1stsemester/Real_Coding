import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  //call back으로 onVideoSelct와 video에 전달해줘야 하므로 같은
  //변수명을 써야함
  const videoItems = props.videos.map((video) => {
    return (
    <VideoListItem
      onVideoSelect = {props.onVideoSelect}
      key={ video.etag }
      video = {video} />
    );
  });//key 는 api에 있는 고유 값을 가졍 와야 하므로 안에 선언 해야함

  return (
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  );
};
//함수 호출해서 VideoItem에 data전송

//js 에서 for문대신에 Map이랑 iterator를 사용하길 권장한다
//array.map을 해주면 function으로 변환 해 준다
export default VideoList;
