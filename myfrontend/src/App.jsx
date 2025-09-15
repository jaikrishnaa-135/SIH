import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Body from './Body.jsx'
import Card from './Card.jsx'
const App = () => {
  return(
    <>
       <Header></Header>
       <center><Card></Card>
       <Card></Card>
       <Card></Card></center>
       <Footer/>
    </>
  );
}
export default App