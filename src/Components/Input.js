import React, { useReducer } from "react";

function Input({handleUpdate}) {
	const [addPost, setAddPost] = useReducer((prev,next)=>{
		return {...prev, ...next}
	},
	{createdAt: new Date().toISOString('ko-kr').substring(0, 20),
	 updatedAt: new Date().toISOString('ko-kr'),
	 title: '', 
	 author: '', 
	 avatarUrl: 'https://avatars.githubusercontent.com/u/86960007?s=64&u=4863a873d78f406d658e8a50d9b91f3045006920&v=4',
	 content: ''
	 })

	 const handleClick = () => {
		 fetch('http://localhost:4000/discussions', {
			method: 'POST',
  		headers: {
   		 'Content-Type': 'application/json',
 			},
  		body: JSON.stringify(addPost)
		}).then(res=>console.log(res))
		console.log(addPost)
		return handleUpdate()
	 }

	return (
		<section className="form__container">
				<form action="" method="get" className="form">
					<div className="form__input--wrapper">
						<div className="form__input--name">
							<label for="name">Enter your name: </label>
							<input className="form-inputs" type="text" name="name" id="name-2" required onChange={(e)=>setAddPost({author: e.target.value})}/>
						</div>
						<div className="form__input--title">
							<label for="name">Enter your title: </label>
							<input className="form-inputs" type="text" name="name" id="name" required onChange={(e)=>setAddPost({title: e.target.value})}/>
						</div>
						<div className="form__textbox">
							<label for="story">Your question: </label>
							<textarea className="form-inputs" id="story" name="story" placeholder="질문을 작성하세요" required onChange={(e)=>setAddPost({content: e.target.value})}></textarea>
						</div>
					</div>
					<div className="form__submit">
						<input value="submit" onClick={handleClick}/>
					</div>
				</form>
			</section>
	)
}

export default Input