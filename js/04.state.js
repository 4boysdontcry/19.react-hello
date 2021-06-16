/* 
1. 부모가 자식에게 값을 보낼때 부모는 속성으로 보내고 자식은 props로 받는다. (vue와 동일)

2. 자식이 부모에게 값을 보낼때는 부모에게 받은 props에 등록된 event로 보낸다. (vue와 동일: this.$emit( '', v(보낼값) ) )

3. 자식에게 값을 받으려는 부모는 props에 함수로 내려보내줘야 한다.
	ex) <Search onChangeTitle={this.changeTitle} />  onChangeTitle이 props임
*/

/*********** List *************/
class List extends React.Component {
	render(){
		return(
			<h3>{ this.props.title }</h3>
		)
	}
}


/*********** TitleBar *************/
class Title extends React.Component {
	render() {
		return (
			<h1 className="title-bar">{ this.props.title }</h1>
		)
	}
}


/*********** Search *************/
class Search extends React.Component {
	onInputChange = (e) => {
		// 하위 컴포넌트가 상위 컴포넌트에게 값을 전달하여면 event로 보내야 한다.
		this.props.onChangeTitle(e.target.value)
	}
	onSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmitTitle(e.target.query.value)
		e.target.query.value = ''
		e.target.query.focus()
	}

	render() {
		// jsx에서 이벤트는 camel 표기법으로 작성한다.(onclick, onsubmit 등 html의 이벤트와 충돌 방지)
		return (
			<form onSubmit={ this.onSubmit }>
				<input type="text" className="input" name="query" onChange={this.onInputChange} autoFocus />
				<button>저장</button>
			</form>
		)
	}
}


/*********** App *************/
class App extends React.Component {
	// 변화되는 값을 체크하고 DOM에서 표현, 사용하기 위해 state에 등록
	state = {
		title: '',
		lists: []
	}

	changeTitle = (v) => {
		// state값을 변화시키려면 setState({})를 사용한다.
		// this.state.title = v (x)
		this.setState({
			...this.state,		// title: '', lists: []
			title: v					// title: v의 값, lists: []
		})
	}

	submitTitle = (v) => {
		this.setState({
			title: '',
				lists: [...this.state.lists, v]		/* 기존의 lists에 새로 받은 v를 추가 */
			})
	}

	render() {
		return (
			<div>
			{/* map: lists의 값만큼 돌면서 v를 찍어준다. */}
			{/* 속성(title={})은 모두 props로 자식 컴포넌트에 전달된다. */}
			<Title title={ this.state.title } />
				<Search onChangeTitle={this.changeTitle} onSubmitTitle={this.submitTitle} />
				<div className="list-wrap">
					{ this.state.lists.map( v => <List key={uuidv4()} title={v} /> ) }
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))