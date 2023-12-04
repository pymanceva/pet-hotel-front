export enum ButtonSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export const sizeControl = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return {
        height: '32px',
        padding: '8px 16px',
        lineheight: '16px',
        fontSize: '12px',
      };
    case 'medium':
      return {
        height: '44px',
        padding: '12px 32px',
        lineheight: '20px',
        fontSize: '14px',
      };
    case 'large':
      return {
        height: '52px',
        padding: '14px 44px',
        lineheight: '24px',
        fontSize: '16px',
      };
    default:
      return {
        height: '52px',
        padding: '14px 44px',
        lineheight: '24px',
        fontSize: '16px',
      };
  }
};
