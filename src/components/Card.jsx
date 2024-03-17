import './card.css'

function Card(props){
    console.log('props--->', props.children)


  return <div className="card">
        {props.children}
  </div>  
}

export default Card