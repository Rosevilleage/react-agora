function Pagination({total, limit, page, setPage}) {
	const numPages = Math.ceil(total / limit);

	return (
		<ul className="pageUl">
			<li className="btn prev" onClick={()=>setPage(page-1)} disabled={page===1}>◀ Prev</li>
			{Array(numPages).fill(0).map((el, i)=>(
				<li
				className={`numb ${page===i+1&&'active'}`}
					key={i+1}
					onClick={()=>setPage(i+1)}
					>{i+1}</li>
			))}
			<li className="btn next" onClick={()=>setPage(page+1)} disabled={page===numPages}>next ▶︎</li>			
    </ul>
	)
}

export default Pagination