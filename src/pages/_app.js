import Destacked from '@destacked/core';

import 'styles/globals.scss';

const App = ({ Component, pageProps }) => {
    const config = {};

    return (
        <Destacked {...config}>
            <Component {...pageProps} />
        </Destacked>
    );
};

export default App;
