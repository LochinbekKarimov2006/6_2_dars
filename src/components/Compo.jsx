import Compon from "../index.json"
function Compo() {
    console.log(Compon)
  return (
    <div className="div-1">
    {Compon.map((data)=>{
        return (
            <div className="div-2  drop-shadow-md hover:drop-shadow-2xl">
            {/* <img src={data.image} alt="" />
            <h1>{data.lastName}</h1>
            <h1>{data.region}</h1>
            <h1>{data.email}</h1>
            <h1>{data.firstName}</h1>
            <h1>{data.phone}</h1>
            <h1>{data.zip}</h1> */}
<div class="card bg-base-100 shadow-xl">
  <figure>
    <img className="w-full"
      src={data.image}
      alt="Shoes" />
  </figure>
  <div className="">
    <h2>{data.lastName}</h2>
    <p>{data.email}</p>
   
  </div>
</div>
            </div>
        )
    })}
    </div>
  )
}
export default Compo