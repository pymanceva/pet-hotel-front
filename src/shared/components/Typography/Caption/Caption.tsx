const style = {
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '16px',

  color: '#757575',
};

const Caption = ({ children }: { children: React.ReactNode }) => {
  return <h6 style={style}>{children}</h6>;
};

export default Caption;
