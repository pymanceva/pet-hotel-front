export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  ghost = 'ghost',
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
    case ButtonVariant.ghost:
      return {
        root: styles.buttonGhost,
      };
    default:
      return {
        root: styles.buttonPrimary,
      };
  }
};
