import React from 'react';
import { mount } from 'enzyme';
import Spinner from 'components/spinner';
import { colors } from 'styles/color';

describe('Spinner', () => {
  test('Accepts proxy props', () => {
    const onClick = jest.fn();
    const spinner = mount(
      <Spinner
        onClick={onClick}
      />,
    );

    expect(spinner.at(0).props().onClick).toBe(onClick);
  });

  test('Standard rendering', () => {
    const spinner = mount(
      <Spinner />,
    );

    expect(spinner.find('div').length).toBe(1);
  });

  test('Assignment of ring and accent colors', () => {
    const spinner = mount(
      <Spinner
        ringColor={colors.gray50}
        accentColor={colors.green}
      />,
    );

    expect(spinner.find('div').props().style.border).toBe(`2px solid ${colors.gray50}`);
    expect(spinner.find('div').props().style.borderTop).toBe(`2px solid ${colors.green}`);
  });
});
