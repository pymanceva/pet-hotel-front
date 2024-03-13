import { useDisclosure } from '@mantine/hooks';
import { Flex, Group, Loader, Modal, Tabs, Text } from '@mantine/core';
import ContentHeader from '@/widgets/ContentHeader/ui/ContentHeader';
import CategoryGrid from '@/widgets/Grids/CategoryGrid/CategoryGrid';
import { useGetAllCategories } from '../api/queries';
import { ICategory } from '@/shared/types/request';
import { ErrorPage } from '@/pages/Error';
import CreateCategoryForm from '@/features/categories/create-category/ui/CreateCategoryForm';
import { Button } from '@/shared/components/Buttons';
import { useDeleteCategory } from '@/features/categories/delete-category/mutations';
import UpdateCategoryForm from '@/features/categories/update-category/ui/UpdateCategoryForm';

const CategoriesPage = () => {
  const { mutateAsync: deleteCategory } = useDeleteCategory();
  const { data, isLoading } = useGetAllCategories();

  const [
    openedCreateModal,
    { open: openCreateModal, close: closeCreateModal },
  ] = useDisclosure(false);

  const [openedEditModal, { open: openEditModal, close: closeEditModal }] =
    useDisclosure(false);

  const [
    openedDeleteModal,
    { open: openDeleteModal, close: closeDeleteModal },
  ] = useDisclosure(false);

  const handleDeleteCategory = async (id: number) => {
    await deleteCategory(id);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <ErrorPage />;
  }

  return (
    <Group px="md" w="100%">
      <ContentHeader
        handleClick={openCreateModal}
        contentTitle="Категории"
        actionText="Создать новую категорию"
      />
      <Modal
        onClose={closeCreateModal}
        opened={openedCreateModal}
        title="Создать категорию"
        withCloseButton={false}
      >
        <CreateCategoryForm onClose={closeCreateModal} data={{ ...data }} />
      </Modal>
      <Modal
        onClose={closeEditModal}
        opened={openedEditModal}
        title="Редактировать категорию"
        withCloseButton={false}
      >
        <UpdateCategoryForm onClose={closeEditModal} data={{ ...data }} />
      </Modal>
      <Modal
        onClose={closeDeleteModal}
        opened={openedDeleteModal}
        title="Удалить комнату"
      >
        <Text size="lg">Вы уверены, что хотите удалить данную комнату?</Text>
        <Flex justify="space-between">
          <Button onClick={closeDeleteModal}>Отмена</Button>
          {/* <Button onClick={handleDeleteCategory}>Удалить</Button> */}
        </Flex>
      </Modal>
      <CategoryGrid
        handleUpdateCategory={openEditModal}
        data={data as ICategory[]}
        handleDeleteCategory={handleDeleteCategory}
      />
    </Group>
  );
};

export default CategoriesPage;
