import 에이지 from './data.js' // ../ 라고 쓰면 상위폴더 이동

export default function decription() {
	return (
		<div>
			<h4 className="title">Music</h4>
			<div className="music-item">
				<p>음악이름</p>
				<p>가수: </p>
				<p>{에이지}</p>
			</div>
			<Music_item/>
			
			
		</div>
	)
	
}
// 종류
// 1. server components - 아무렇게나 대충 만든것들
// html에 자바스크립트 기능넣기 불가능/로딩속도 빠름/ 검색엔진 노출 유리 
// 2. client components - 파일 맨 위에 'use client'넣고 만든것
// -> 결론: 큰페이지는 server components js기능 필요한 곳만 client components

// components 만드는법
// 1. fuction 작명
// 2. return(축약할 긴 html)
//3. <작명/> 사용
// 단점: 컴포넌트끼리 데이터 공유 귀찮
function Music_item(props){
	return (
		<div className="music-item">
				<p>음악이름</p>
				<p>가수: </p>
				<p>링크</p>
			</div>
	)
}