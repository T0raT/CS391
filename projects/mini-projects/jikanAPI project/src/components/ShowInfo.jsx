export default function ShowInfo(show) {

  return (
      <div key={show?.mal_id} style={{marginBottom: "25px"}}>
        <p>Show title: {show?.title}</p>
        <img src={show?.img} alt={show?.title}/>
        <p>Show type: {show?.type} </p>
        <p>Show synopsis: {show?.synopsis}</p>
      </div>
  )
}