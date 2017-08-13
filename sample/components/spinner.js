import React from 'react';
import { Spacing, Spinner, Text, colors } from 'react-elemental';

const SampleSpinner = () => (
  <div>
    <Spacing size="huge" bottom>
      <Text size="gamma" color="primary" uppercase>
        Spinners
      </Text>
      <Text>
        Spinners indicate indeterminate progress when there is no clearly defined container in the
        interface.
      </Text>
    </Spacing>

    <Spacing size="huge" bottom>
      <Spacing bottom>
        <Text size="iota" color="gray70" uppercase bold>
          Sizes
        </Text>
      </Spacing>

      <Spacing bottom>
        <Spacing size="tiny" bottom>
          <Text size="kilo" color="gray30" uppercase bold>
            Alpha
          </Text>
        </Spacing>

        <Spinner size="alpha" />
      </Spacing>

      <Spacing bottom>
        <Spacing size="tiny" bottom>
          <Text size="kilo" color="gray30" uppercase bold>
            Beta
          </Text>
        </Spacing>

        <Spinner size="beta" />
      </Spacing>

      <Spacing bottom>
        <Spacing size="tiny" bottom>
          <Text size="kilo" color="gray30" uppercase bold>
            Gamma
          </Text>
        </Spacing>

        <Spinner size="gamma" />
      </Spacing>

      <Spacing bottom>
        <Spacing size="tiny" bottom>
          <Text size="kilo" color="gray30" uppercase bold>
            Delta
          </Text>
        </Spacing>

        <Spacing size="small" right inline>
          <Spinner size="delta" />
        </Spacing>
        <Text color="gray50" size="kilo" uppercase bold inline>
          Loading
        </Text>
      </Spacing>
    </Spacing>

    <Spacing size="huge" bottom>
      <Spacing bottom>
        <Text size="iota" color="gray70" uppercase bold>
          Customizable colors
        </Text>
      </Spacing>

      <Spacing size="small" bottom>
        <Spacing size="small" right inline>
          <Spinner size="delta" color={colors.green} />
        </Spacing>
        <Text color="gray50" size="kilo" uppercase bold inline>
          Succeeding
        </Text>
      </Spacing>

      <Spacing size="small" bottom>
        <Spacing size="small" right inline>
          <Spinner size="delta" color={colors.red} />
        </Spacing>
        <Text color="gray50" size="kilo" uppercase bold inline>
          Erroring
        </Text>
      </Spacing>

      <Spacing size="small" bottom>
        <Spacing size="small" right inline>
          <Spinner size="delta" color={colors.orange} />
        </Spacing>
        <Text color="gray50" size="kilo" uppercase bold inline>
          Why not orange?
        </Text>
      </Spacing>
    </Spacing>

    <Spacing size="huge" bottom>
      <Spacing bottom>
        <Text size="iota" color="gray70" uppercase bold>
          Pulsation state
        </Text>
      </Spacing>

      <Spacing size="small" bottom>
        <Spacing size="small" right inline>
          <Spinner size="delta" color={colors.green} pulsate={false} />
        </Spacing>
        <Text color="gray50" size="kilo" uppercase bold inline>
          Disabled pulsation
        </Text>
      </Spacing>
    </Spacing>
  </div>
);

export default SampleSpinner;
