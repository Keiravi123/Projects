function Heading() {
    return <h1>My favorite cat</h1>;
}
function Card(props) {
    return (
    <div classname="imagemy-style">
       {}
       <h2>{props.name}</h2>
       <img src="tommy.png" alt="avatar_img"  />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
    );
}