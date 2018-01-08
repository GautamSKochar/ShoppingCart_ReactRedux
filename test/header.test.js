import React from "react";
import Header from "../components/Header";
import { shallow , mount, render} from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import toJson from "enzyme-to-json";


const raf = global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
}
configure({ adapter: new Adapter() });
const store = configureMockStore({});

describe('Header Component', () => {
    it('Snapshot Test', () => {
        const component = shallow(<Provider store={store}><Header /></Provider>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    })
});