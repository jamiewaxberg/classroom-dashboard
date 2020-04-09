import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import SideNav from "./SideNav";

test('tab selects on click', () => {
    const {getAllByTestId} = render(<SideNav/>);
    const tab = getAllByTestId('tab')[1]
    fireEvent.click(tab)
    expect(tab.classList.contains('active')).toBe(true)
})