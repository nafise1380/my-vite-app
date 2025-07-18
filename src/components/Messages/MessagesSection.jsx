

function Messages({text,time,sentence}) {
  return (
    <>
      <div className="card my-3 lead  p-3  colors">
        <p> {text} </p>
        {sentence}
        <span class="d-flex justify-end text-gray-400"> {time} </span>
      </div>     
    </>
  )
}

export default Messages