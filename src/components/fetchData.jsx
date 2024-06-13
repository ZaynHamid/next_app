const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json()
}

const FetchData = async () => {
    const data = await getData()
  return (
    <div>
        {data.map((val, i) => (
            <div className="border-2 px-6 py-3 my-6" key={i}>
                <h2 className="font-bold capitalize">{val.title}</h2>
                <p className="font-light">{val.body}</p>
            </div>
        ))}

    </div>
  )
}


export default FetchData