import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import PhotoList from '../'

afterEach(cleanup);

describe('PhotoList is rendering', () => {
    it('renders', () => {
        const { asFragment } = render(<PhotoList />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders', () => {
        const { asFragment } = render(<PhotoList />)
        expect(asFragment()).toMatchSnapshot();
    });
})