// element는 React앱의 가장 작은 단위
// element가 모여서 component가 된다.
const app = document.getElementById('app')
const el = <h1>Hello World</h1>
ReactDOM.render(el, app)

function tick(){
const el = (
		<div>		{/* 이 div가 root태그임 */}
			{/* jsx 안에서 주석은 이렇게 표현된다. */}
			{/* JSX는 항상 하나의 root태그를 갖는다. */}
			{/* {}안에서는 js 표현식만 가능하다. (변수선언, 함수선언, if, for 등 불가능) */}
			{/* if 대신 삼항연산자, for 대신 map, filter를 사용 */}
			{/* new Date().toLocalTimeString() */}
			{/* arr.map( v => v + 1 ) */}
			<h1>Hello, World</h1>
			<h2>현재 시간은 { new Date().toLocaleTimeString() }</h2>
		</div>
	)
	ReactDOM.render(el, app)
}

setInterval(tick, 1000)		/* tick 전체(html 요소 전체)를 1초마다 재실행 하지만, h2의 new Date(데이터가 변화하는 부분)만 리로드 된다. */