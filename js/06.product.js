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




/* ********************** App ************************* */
class App extends Component {
	state = {

	}

	title = {		// 변수 선언시 let, var, const 이런거 안써도됨 (고정값으로 된 변수를 쓸때는 굳이 state에 넣지 않고 걍 변수로 쓴다.)
		headTitle: 'React를 배우자!',
		subTitle: 'component 배우기'
	}

	render(){
		return(
			<div className="container">
				<Title title={ this.title } />
				<Search />
			</div>
		)
	}
}
render(<App />, document.querySelector('#app'))
