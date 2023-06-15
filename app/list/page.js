import Image from "next/image"
import Link from "next/link"

export default function List() {
	let music = ["your light", "all i wanna do", "rainy day"]  // db에서 가져온 데이터라고 치고~~
	return (
		<div>
			<h4 className = "title">로동요 목록</h4>
			{
				
				
		
				music.map((a,i)=>{  // map 반복문 사용시 key={유니크한값}을 넣으면 좋음
					return (
					<div className="lodong" key={i}>
						<img src={"/lodong " + (i+1) + ".jpg"} className="lodong-img" alt={a}></img>
						<h4>music title: {a}</h4>
						<Link href="/description">Description</Link>
					</div>
					)
					
				})
			}
			
		</div>
	)
	
}