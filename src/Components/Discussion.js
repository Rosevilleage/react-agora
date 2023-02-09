function Discussion({data}) {
	const {avatarUrl, url, title, createdAt, author, answer} = data;
	return(
		<li class="discussion__container">
      <div class="discussion__avatar--wrapper">
        <img class="discussion__avatar--image"
          src={avatarUrl}
          alt={`avatar of ${author}`}/>
      </div>
      <div class="discussion__content">
        <h2 class="discussion__title"><a href={url}>{title}</a></h2>
        <div class="discussion__information">{`${author} / ${createdAt.slice(0, 10)} | ${createdAt.slice(-9, -1)}`}</div>
      </div>
      <div class="discussion__answered"><p>{answer?<i class="fa-solid fa-check"></i> : <i class="fa-solid fa-xmark"></i>}</p></div>
    </li>
	)
}

export default Discussion