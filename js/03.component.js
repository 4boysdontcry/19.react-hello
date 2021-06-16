//	react는 컴포넌트 제작을 통해 재사용 가능한 조각으로 나눈다.
// 컴포넌트는 항상 대문자로 시작한다 (소문자로 시작하면 태그로 인식함)


		// 이제 컴포넌트를 만들어보자
const app = document.getElementById('app')


// 1. 클래스로 만들기 (16버전)
// sample이라는 객체를 만듬: 객체는 속성과 메서드를 가진다!
class Sample extends React.Component {		// extends React.Component: react.component가 가지고 있는 모든 것을 상속받겠다
	render(){
		return (
			<h1>Hello, Class</h1>
		)
	}
}
ReactDOM.render(<Sample />, app)


// 2. 함수형으로 만들기 (hooks : 17버전에서 추가됨)
const Sample2 = () => {
	return (
		<h1>Hello, Hooks</h1>
	)
}
ReactDOM.render(<Sample2 />, app)


// 3. 컴포넌트 불러오기 - class
// 관습적으로 최상위 컴포넌트를 App이라고 함
class App extends React.Component {
	render(){
		return(
			<div>
				<Sample />
				<Sample2 />
			</div>
		)
	}
}
ReactDOM.render(<App />, app)


// 4. 컴포넌트 불러오기 - hooks
const App2 = () => {
	return (
		<div>
				<App />
				<Sample2 />
			</div>
	)
}
ReactDOM.render(<App2 />, app)