import { Outlet } from 'react-router-dom';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

function Default() {
  // const [message, setMessage] = React.useState();
  // const parentClearMessage = () => {
  //   setMessage();
  // };
  return (
    <div id='wrap'>
      <Header />
      <div id="contents">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Default;
