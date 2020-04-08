import React, {useState} from 'react';
import {fireEvent, render} from '@testing-library/react';
import SideNav, {navLinks} from "./SideNav";

test('tab selects on click', () => {
    const {container, getByText} = render(<SideNav/>);
    // console.log({tabs})
    // const tab = getByText(`${navLinks[1].text}`)
    const tabId = render(<span>{navLinks[1].id}</span>)
    console.log(tabId)
    expect(tabId.textContent).toBe("2")
})