

function Messages({text,time,sentence}) {
  return (
    <>
      <div className="card my-3 lead  p-3 container">
        <p> {text} </p>
        {sentence}
        <span class="d-flex justify-end "> {time} </span>
      </div>
      
            
    </>
  )
}

export default Messages