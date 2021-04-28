import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'

const portrait = { name: 'portraits', desciption: 'Portraits of people in my life.' }

afterEach(cleanup);

describe('Gallery is rendering', () => {
    it('renders', () => {
        render(<Gallery currentCategory={portrait} />);
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<Gallery currentCategory={portrait} />);
        expect(asFragment()).toMatchSnapshot();
    })

    it('renders', () => {
        const { getTestById } = render(<Gallery currentCategory={portrait} />);
        expect(getTestById('h1tag')).toHaveTextContent('Portraits');
    })
});

