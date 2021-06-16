const { useState, useRef, useMemo, useCallback, useEffect, createRef } = React

/* ************* Title ************* */
const Title = (props) => {
	console.log(props)
	return(
		<div className="jumbotron">
			<h1 className="fa-2x">{ props.title.mainTitle }</h1>
			<hr />
			<h2>{ props.title.subTitle }</h2>
		</div>
  )
}


/* ************* Search ************* */
const Search = () => {

	const [content, setContent] = useState(content);

	const onDel = (e) => {
		console.log()
	}

	return(
		<form className="form-search">
			<input 
			type="text" 
			placeholder="typing here!"
			className="form-control"
			autoFocus />
			<i className="fa fa-times-circle bt-close" onClick={ onDel } />
		</form>
	)
}


/* ************* App ************* */
const App = () => {

	const title = {
		mainTitle: 'React 셀프로 만들기',
		subTitle: '혼자서도 잘해요'
	}
	
	return(
		<div className="container">
			<Title title={ title } />
			<Search  />
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('#app'))