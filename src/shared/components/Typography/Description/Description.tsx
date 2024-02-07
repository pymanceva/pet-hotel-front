const style = {
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '24px',

  color: '#181A1A',
};

const Description = ({ children }: { children: React.ReactNode }) => {
  return <p style={style}>{children}</p>;
};

export default Description;
