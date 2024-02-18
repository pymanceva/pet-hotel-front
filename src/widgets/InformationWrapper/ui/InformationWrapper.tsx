import { FC } from 'react';

interface InformationWrapperProps {
  renderHeader: () => JSX.Element;
  renderContent: () => JSX.Element;
}

export const InformationWrapper: FC<InformationWrapperProps> = ({
  renderContent,
  renderHeader,
}) => {
  return (
    <>
      <div>{renderHeader()}</div>
      <div>{renderContent()}</div>
    </>
  );
};
