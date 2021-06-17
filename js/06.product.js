const { Component, createRef } = React
const { render } = ReactDOM

/* ********************** Title ************************* */
class Title extends Component {
	render(){
		return(
			<div className="jumbotron">
				<h1 className="fa-2x">{ this.props.title.headTitle }</h1>
				<hr />
				<h2>{ this.props.title.subTitle }</h2>
			</div>
		)
	}
}


/* ********************** Search ************************* */
class Search extends Component {
	state = {
		content: ''
	}
		
	searchRef = createRef()

	onClose = (e) => {
		this.setState({
			content: ''
		})
		this.searchRef.current.focus()
	}

	onChange = (e) => {
		this.setState({
			content: e.target.value
		})
    this.props.onChange(e.target.value)
	}

	render(){
		return(
			<form className="form-search">
				<input 
				type="text" 
				ref={this.searchRef}		// 이 인풋에 바로 접근하는 루트이름을 만들어준 것
				placeholder="검색할 이벤트를 적어주세요."
				className="form-control"
				onChange={this.onChange} 
				value={this.state.content} autoFocus />
				{
					this.state.content === '' 
					? '' 
					: <i className="fa fa-times-circle bt-close" onClick={ this.onClose }/>
				}
			</form>
		)
	}
}


/* ********************** Lists ************************* */
class Lists extends Component {
  render() {
    return (
      <ul className="list-wrapper">
      {/* 중괄호 안에 적는건 데이터를 가져오는 부분 map으로 for문을 대체해서 List를 만들어준다 */}
        {
          this.props.evt.map( v => <List key={ uuidv4() } v={ v } /> )
        }
      </ul>
    );
  }
}


/* ********************** List ************************* */
class List extends Component {
  render() {
    const { src, title, price } = this.props.v
    return (
      <li className="list-wrap">
        <div className="img-wrap">
          <img src={ "../img/" + src } alt={ title } className="w-100" />
        </div>
        <div className="content-wrap">
          <h2 className="title">{ title }</h2>
          <h3 className="price">${ price }</h3>
        </div>
      </li>
    );
  }
}



/* ********************** App ************************* */
class App extends Component {
	state = {
    evt: [],
    searchEvt: []
	}

	title = {		// 변수 선언시 let, var, const 이런거 안써도됨 (고정값으로 된 변수를 쓸때는 굳이 state에 넣지 않고 걍 변수로 쓴다.)
		headTitle: 'React를 배우자!',
		subTitle: 'component 배우기'
	}

  async componentDidMount() {   // component가 로드되면(DOM이 랜더링 되고 나면) 바로 실행되는 함수
    try{
      const { data } = await axios('../json/product.json')
      this.setState({
        evt: [...data],
        searchEvt: [...data]
      })
    }
    catch(err){
      console.log(err)
    }
  }

  onChange = content => {
    this.setState({
      ...this.state,
      searchEvt: this.state.evt.filter( v => v.title.includes(content) )
    })
  }

	render(){
		return(
			<div className="container">
				<Title title={ this.title } />
				<Search onChange={ this.onChange } />
				<Lists evt={this.state.searchEvt} />
			</div>
		)
	}
}
render(<App />, document.querySelector('#app'))
