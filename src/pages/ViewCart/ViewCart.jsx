import { Avatar, Badge, Container, Table, Group, Text, ActionIcon, Anchor, rem } from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';

const data = JSON.parse(localStorage.getItem('cartItem'));

function ViewCart() {
    const rows = data.map((item) => (
        <Table.Tr key={item.id}>
             <Table.Td>
                <Group gap="sm">
                    <Avatar size={30} src={item.avatar} radius={30} />
                </Group>
            </Table.Td>
            <Table.Td>
                <Group gap="sm">
                    <Text fz="sm" fw={500}>
                        {item.title}
                    </Text>
                </Group>
            </Table.Td>

            <Table.Td>
                <Anchor component="button" size="sm">
                    1
                </Anchor>
            </Table.Td>
            <Table.Td>
                <Text fz="sm">{item.phone}</Text>
            </Table.Td>
            <Table.Td>
                <Group gap={0} justify="flex-end">
                    <ActionIcon variant="subtle" color="gray">
                        <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                    </ActionIcon>
                    {/* <ActionIcon variant="subtle" color="red" onClick={() => localStorage.removeItem('cartItem',item.id)}>
                        <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                    </ActionIcon> */}
                </Group>
            </Table.Td>
        </Table.Tr>
    ));

    return (

        <>
            <Container size="lg" py="xl">
                <Table.ScrollContainer minWidth={800}>
                    <Table verticalSpacing="sm">
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Product</Table.Th>
                                <Table.Th>Product Name</Table.Th>
                                <Table.Th>Quantity</Table.Th>
                                <Table.Th />
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>{rows}</Table.Tbody>
                    </Table>
                </Table.ScrollContainer>
            </Container>
        </>
    );
}

export default ViewCart;