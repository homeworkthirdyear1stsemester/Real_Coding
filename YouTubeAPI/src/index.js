import _ from 'lodash';
import React, { Component } from 'react';//node modules 폴더에 설치된 모듈
//react라이브러리 가져와서 React라는 변수에 할당
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
//해당 js 파일에엇 SearchBar이라는 것을 사용할 것이다.
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD9bHNoqE_JK3AvDvXFjDRRTJe_H5HiNlI';

//ajax를 이용한 코드

//react : java script 라이브러리 이다
//컴포넌트 -> view라고도 한다
//다양한 컴포넌트들을 배치 하면서 어플리 케이션을 작성한다

// create a new component. this component should produce some HTML
// const App = function(){//class이고 인스턴스를 만들기 위한 타입
//   return <div>Hi!</div>;//jsx
// }//인스턴스가 아님
//jsx를 바닐라 자바스크립트로 변환하여 브라우저가 이해할 수 있게 만든다는 점
//바닐라 스크립트 : 프라임워크나 라이브러리 없이 순수한 자바스크립트

//rendering -> 컴포넌트를 HTML페잊에 올린다는 뜻->createElement사용해서
//새당 객체를 생성
//컴포넌트가 만든 HTML을 가져가 페이지에 반영한다(DOM)
//ReactDOM.render(<App />, document.querySelector('.container')); //App이라는 컴포넌트를 render 한다는 뜻
//ReactDom에 올리기위해서 이 라이브러리 사용 -> 실제 Dom과 상호작용한다
//react는 컴포넌트를 생성하고 관리만 한
//<App></App>일경우 안에 아무것도 없다 -> <App/>로 해도됨
//2번째 인자로 어디에 넣을지 하나의 객체를 가져야한다

class App extends Component {//class이고 인스턴스를 만들기 위한 타입
  constructor(props){
    super(props);

    this.state={
       videos: [],
       selectedVideo : null
     };//list 형태
     this.videoSearch('surfboard');
  }

  videoSearch(term){
    YTSearch({ key: API_KEY, term : term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
      //this.setState({ videos: videos })랑동일
    });//컴포넌트가 렌더링 되면서 검색을 실행하고, 검색이 완료되면, 비디오 값들을 업데이트 한다
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    //300밀리초 마다 호출 된다 이 함수가
    return (
      <div>
        <SearchBar onSearchTermChange = { videoSearch }/>
        <VideoDetail video= { this.state.selectedVideo } />
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos={ this.state.videos } />
      </div>
    );//jsx
    //하나의 props로 term이 바뀔 때 마다 videoSearch함수가 호출됨
    //onVideoSelect, videos -> props이다
    //app : video list의 부모 노 그러므로 videos의 state에 접근 할 수 있다
    //video state를 자식인 videoList에 참조 해 준다
    //setState나 다시 랜더링 할때 다시 넘겨 준다는 뜻
    //onVideoSelect 해서 video를 선택했을 경우 selectedVideo에 객체가 넘어가고
    //그 객체를 state에 초기화 해준다
  }
}//에로우 function

ReactDOM.render(<App />, document.querySelector('.container'));
