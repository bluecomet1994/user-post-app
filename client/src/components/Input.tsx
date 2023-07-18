const Input = (props: any) => {
  return (
    <div className="input-container">
      <input {...props} />
      
      <p>{props.error}</p>
      <span className="bar" />
      <span className="highlight" />
    </div>
  )
}

export default Input;