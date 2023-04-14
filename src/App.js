import Header from './components/header';
//react component
import Card from './components/card';
import Footer from './components/Footer';
//style component
import { Container } from './components/styles/container.styled';
import GlobalStyles from './components/styles/global.styled';
import './App.css';
//data
import contents from './content';
function App() {
  return (
    <>
    <GlobalStyles />
      <Header />
    {contents.map((content)=> <Card key={content.id} content={content} />)}
    <Footer />
    </>
  );
}

export default App;
