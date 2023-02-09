
import { useEffect, useState } from "react";
import Discussion from "./Discussion";
import Pagination from "./Pagination";

function Discussions({update}) {
	const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1);
	const limit=5;
  const offset = (page - 1) * limit;

	useEffect(()=>{
		fetch('http://localhost:4000/discussions')
		.then(res=>res.json())
		.then(json=>setPosts(json))
	}, [update])

	return (
		<section class="discussion__wrapper">
      <ul class="discussions__container">
        {posts.slice(offset, offset+limit).map(data=><Discussion key={data.id} data={data}/>)}
				{/**여기까지가 discussion */}
      </ul>
      <div class="pagination">
        <Pagination 
					total={posts.length}
					limit={limit}
					page={page}
					setPage={setPage}
				/>
      </div>
    </section>
	)
}

export default Discussions