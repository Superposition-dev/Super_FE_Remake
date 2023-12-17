import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    flex: Flex;
    font: Font;
    layout: Layout;
  }
}
