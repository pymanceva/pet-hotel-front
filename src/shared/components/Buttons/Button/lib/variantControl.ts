export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
}

export const variantControl = (
  variant: ButtonVariant,
  styles: CSSModuleClasses,
) => {
  switch (variant) {
    case ButtonVariant.primary:
      return {
        root: styles.buttonPrimary,
      };
    case ButtonVariant.secondary:
      return {
        root: styles.buttonSecondary,
      };
    default:
      return {
        root: styles.buttonPrimary,
      };
  }
};
