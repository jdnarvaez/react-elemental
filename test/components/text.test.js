import React from 'react';
import { shallow } from 'enzyme';
import Text from 'components/text';

describe('Text', () => {
  test('Standard rendering', () => {
    const text = shallow(
      <Text>
        text
      </Text>,
    );

    expect(text.find('p').length).toBe(1);
    expect(text.find('p').children().text()).toBe('text');
  });

  test('Inline rendering', () => {
    const text = shallow(
      <Text inline>
        text
      </Text>,
    );

    expect(text.find('p').length).toBe(0);
    expect(text.find('span').length).toBe(1);
    expect(text.find('span').children().text()).toBe('text');
  });

  test('Uppercase modifier', () => {
    const text = shallow(
      <Text uppercase>
        text
      </Text>,
    );

    expect(text.find('p').props().style.textTransform).toBe('uppercase');
  });

  test('Primary/secondary font style', () => {
    const primaryText = shallow(
      <Text>
        text
      </Text>,
    );
    expect(primaryText.find('p').props().style.fontFamily).toBe('karla--regular');

    const secondaryText = shallow(
      <Text secondary>
        text
      </Text>,
    );
    expect(secondaryText.find('p').props().style.fontFamily).toBe('source-code-pro--regular');
  });
});