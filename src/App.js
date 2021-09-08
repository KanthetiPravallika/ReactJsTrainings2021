import { Fragment } from 'react';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';

function App(){
  return (
    <Fragment>
      <Header></Header>
      <Contact name="Pravallika Kantheti" mobile= "9963963138" email="pravallika.kantheti@capgemini.com"></Contact>
      <Contact name="Lasya Edupuganti" mobile= "9963963137" email="lasya.edupuganti@capgemini.com"></Contact>
      <Contact name="Surabhi Srivatsava" mobile= "9963961679" email="surabhi.srivatsava@capgemini.com"></Contact>
      </Fragment>
  )
}

export default App;