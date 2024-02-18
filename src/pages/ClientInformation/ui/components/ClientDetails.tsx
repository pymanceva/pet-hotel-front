import { CSSProperties, FC } from 'react';
import { InformationWrapper } from '@/features/Client';
import { TClientInformation } from '../../model/types';
import { GridHeader } from '@/shared/components/Grid/ui/GridHeader';
import { ClientInformationCard } from '@/widgets/ClientInformationCard/ui/ClientInformationCard';

const styles: CSSProperties = {
  borderRadius: '0px 0px 8px 8px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.09)',
  marginBottom: '40px',
};
export const ClientDetails: FC<{ client: TClientInformation }> = ({
  client,
}) => {
  return (
    <InformationWrapper
      renderContent={() => (
        <div style={{ ...styles }}>
          <ClientInformationCard client={client} />
        </div>
      )}
      renderHeader={() => <GridHeader firstColTitle="Личные данные" />}
    />
  );
};
