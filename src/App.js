import './App.css';
import ListeProfil from './components/ListeProfil';
const liste =[
  {
    name: "Salsabil Kaabachi", 
    bio :"To be or not to be ",
    profession:"Technicin supérieur en réseaux informatique",
  }
]
function App() {
  return (
    <div className="App">
     <ListeProfil profil={liste}/>
</div>
 );
 }
 
export default App;
