import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Mark Henry" age={23} isStudent={true} />
      <Student name="John Cena" age={34} isStudent={false} />
      <Student name="ReyMysterio" age={22} isStudent={false} />
      <Student name="Under Taker" age={45} isStudent={true} />
      <Student />
    </>
  );
}

export default App;

// Prop Types ın amacı girilen değerlerin hangi tğürede olduklarını belirtmektir bu iyi bir uygulamadır.

// defaultProps un amacı propun default değerini belirtmek için kullanılır.

// Props bileşenler arası veri akışını sağlar
