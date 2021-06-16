const app = document.getElementById('app')


// 1. React의 createElement로 DOM 생성 - ReactDOM에 들어갈 내용들
const el = React.createElement(		// ReactDOM이 어떻게 생겨나는지 알 수 있음
	'h1',		// 태그명
	{className: 'title-wrap', title: 'React title'},		// 속성
	'Hello, React2'		// 내용
	)
	ReactDOM.render(el, app)


// 2. ReactDOM에 JSX 문법으로 만들어냄
	ReactDOM.render(   // ReactDOM: vue에서의 Templete을 만들어주는 역할
		<h1>Hello React !</h1>,    // 첫번째 인자: 화면에 만들어낼 html 태그 자체를 던져줌
		app		// 두번째 인자: 해당 인자를 넣어줄 영역
	)


// 3.	변수에 만들어낼 내용을 담아서 사용
const userid = 'henry'
const el2 = (
	<div className="title-wrap">
		<h1>Hello { userid }</h1>
	</div>
)
ReactDOM.render(el2, app)