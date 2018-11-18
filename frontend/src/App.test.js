import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';
import NavBar from "./NavBar";

const renderer = new ShallowRenderer();
renderer.render(<App />);
const result = renderer.getRenderOutput();

describe('Shallow Rendering Testing', () => {
    expect(result.type).toBe('div');
    expect(result.props.children).toEqual([
        <NavBar />
    ]);
    
});

