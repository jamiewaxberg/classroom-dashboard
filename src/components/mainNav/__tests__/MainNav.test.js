import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import MainNav from "../MainNav";

test('account menu opens on click of icon', () => {
    const {getByTestId} = render(<MainNav/>);
    const icon = getByTestId('account-menu-icon')
    const menu = getByTestId('account-menu')
    fireEvent.click(icon)
    expect(menu.classList.contains('active')).toBe(true)
})

test('account menu closes on second click of icon', () => {
    const {getByTestId} = render(<MainNav/>);
    const icon = getByTestId('account-menu-icon')
    const menu = getByTestId('account-menu')
    fireEvent.click(icon)
    fireEvent.click(icon)
    expect(menu.classList.contains('active')).toBe(false)
})