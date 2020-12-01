import Fireblaze from '@fireblaze/core';

import 'styles/globals.scss';

const App = ({ Component, pageProps }) => (
    <Fireblaze>
        <Component {...pageProps} />
    </Fireblaze>
);

export default App;
