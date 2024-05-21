export function TodoList(){
  const name = "Hedy Lamar";
  return(
    <div style={person.theme}>
      <h1>{person.name} was the creator of Mario</h1>
      <img 
        src="https://i.imgur.com/jWoqEHW.png"
        alt="Hedy Lamar"
      />
      <ul style={{
        backgroundColor: 'black',
        color: 'green'
      }}>
        <li>Corra para fora, respire o ar fresco</li>
        <li>Sinta o amor e a esperança</li>
        <li>Aproveite cada momento</li>
      </ul>
    </div>
  );

}
const today = new Date();

function formatDate(date){
  return new Intl.DateTimeFormat(
    'pt-BR',
    { weekday: 'long'},
  ).format(date);
}

const person = {
  name: "Shigeru Miyamoto",
  theme: {
    backgroundColor: 'white',
    color: 'green'
  }
}

export function SuperMario(){
  return (
    <>
      <img  
        src="https://www3.minijuegosgratis.com/v3/games/thumbnails/205484_7_sq.jpg"
        alt="Mario"
      />
    </>
  )
}


function Galeria(){
  return (
    <>
      <section>
        <div style={{ color: 'red' }}>Super Mario World</div>
        <SuperMario />
        <SuperMario />
        <SuperMario />
        <SuperMario />
        <SuperMario />
        <SuperMario />
        <TodoList />
      </section>
    </>
  );
}



export default Galeria;