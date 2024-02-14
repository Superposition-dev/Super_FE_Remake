import { keyframes } from '@emotion/react';

export const whiteShadowLight = keyframes`
0%{
  filter: drop-shadow(0px 2px 8px rgba(255, 255, 255, 0.1));
}
50%{
  filter: drop-shadow(0px 2px 8px rgba(255, 255, 255, 0.2));
}
100%{
  filter: drop-shadow(0px 2px 8px rgba(255, 255, 255, 0.1));
}
`;

export const redShadowLight = keyframes`
0%{
  filter: drop-shadow(0px 4px 8px rgba(254, 8, 8, 0.1));
}
50%{
  filter: drop-shadow(0px 4px 8px rgba(254, 8, 8, 0.2));
}
100%{
  filter: drop-shadow(0px 4px 8px rgba(254, 8, 8, 0.1));
}
`;

export const heartBling = keyframes`
0% { transform: scale( 1.0 ); }
  30% { transform: scale( 0.9 ); }
  50% { transform: scale( 1.0 ); }
  70% { transform: scale( 0.9 ); }
  100% { transform: scale( 1.0 ); }
`;
