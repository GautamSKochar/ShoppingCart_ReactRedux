import React from "react";
import { shallow, mount, render } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from 'enzyme-to-json';
import CartItem from "../components/CartItem";

const product = {
    "id": 1,
    "name": "BagPack",
    "price": 499,
    "currency": "Rs.",
    "imagePath": "images/backpack.jpg"
}
const raf = global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
}
configure({ adapter: new Adapter() });
// const store = mockStore({});
describe('CartItem Component', () => {
    it('Snapshot Test', () => {
        const component = shallow(<CartItem index={product.id} product={product} />);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    })
});