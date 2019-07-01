import React, {Component} from 'react';
//react라는 곳에 Component가 있다는 것을 명시 해 주기때문에
//다른 곳에서 React.Component로 할 필요가 없다

// const SearchBar = () => {
//   return <input />; //React.createElement
// };

class SearchBar extends Component{//object 형

  constructor(props){//함수형 컴포넌트는 스테이트를 가지지 않는다, 클래스 기반만 가짐
    super(props);//부모클래스에 초기화
    this.state = { term: '' };//term이 변경사항을 받아 들인다
    //term말고 다른거로 이름 바꿔도된다
  }// 클래스 생성될 때 마다 자동으로 실행 된

  //render 함수 정의를 해야하마

  render() {
    // return <input onChange={ event => console.log(event.target.value)} />;//return 형을 jsx형태로 해야한다
    //onChange = { this.onInputChange } 와동일
    return (
      <div className="search-bar">
        <input
          value ={this.state.term}
          onChange={ event => this.onInputChagne(event.target.value) }
        />
      </div>
    );
    //jsx의 변수를 참조 할 때마다 {}를 써줘야 한다.
  }//메소드

  //state가 변경도되록 하는 부분

  // onInputChange(event) {//evenet handler, 다른 이름을 사용해도됨
  //   //event 는 모든 브라우저 이벤트나 네이티브 요소인 input, div, span, button과
  //   //같은 요소에서 triger를 받아 들이는 것들
  //   console.log(event.target.value);
  // }//처음 on/ handle, tag이름 Input, Change event 이름 으로 주로 이름 지음


  onInputChagne(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}//상속을 사용하여 사용->React component로부터 모든 기능을 제공받는다

export default SearchBar;//내보내는 코드
//무족건 컴포넌트로 해야한다 -> 가리키고 있는 실제 주소를 리턴해야한다
//만약 하나의 컴포넌트가 바뀌게 된다면 다시 리 render된다 이때 자식 컴포넌트가 전부 rerander된다



//typing할때 일정 주기를 주면 좋지 않을까 하는 생각으로
//lodash라 불리는 함수 라이브러리사용하는 게 좋다
