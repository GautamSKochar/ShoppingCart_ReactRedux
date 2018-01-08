import React from "react";
import Layout from "../components/Layout";
import { shallow , mount, render} from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from 'enzyme-to-json';
import configureMockStore from "redux-mock-store";

const raf = global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
}
configure({ adapter: new Adapter() });
const store = configureMockStore({});

describe('Layout Component', () => {
    it('Snapshot Test', () => {
        const component = shallow(<Layout />);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    })
});