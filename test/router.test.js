import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import { MemoryRouter } from 'react-router-dom';
import Routes from '../routes/Routes';
import Cart from '../components/Cart';
import EShop from '../components/EShop';
import { Provider } from "react-redux";

const raf = global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
}

configure({ adapter: new Adapter() });
const store = configureMockStore({
    getState: () => { }
});


// test('Shoud render Eshop component when visiting /', () => {
//     const component = mount(
//         <MemoryRouter initialEntries={['/']} initialIndex={0}>
//             <Routes />
//         </MemoryRouter>
//     );
//     expect(component.find(EShop).length).toBe(1);
// });

test('Shoud render Cart component when visiting /cart', () => {
    console.log('tesstttt hereeeeee');
    console.log(store.getState);
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/cart']} initialIndex={0}>
            <Routes />
        </MemoryRouter>
    </Provider>
    );
    expect(component.find(Cart).length).toBe(1);
});