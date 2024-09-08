import { Card, Image, Text, Group, Badge, Center, Button } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import classes from './ProductList.module.css';

function ProductList() {

    const { products } = useProductList('category?type=mobile');
    const features = products.map((item) => (
        <Center key={feature.label}>
            {/* <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} /> */}
            <Text size="xs">{item.title}</Text>
        </Center>
    ));

    return (
        <Card withBorder radius="md" className={classes.card}>
            <Card.Section className={classes.imageSection}>
                <Image src={item.image} alt={item.image} />
            </Card.Section>

            <Group justify="space-between" mt="md">
                <div>
                    <Text fw={500}>Tesla Model S</Text>
                    <Text fz="xs" c="dimmed">
                        Free recharge at any station
                    </Text>
                </div>
                <Badge variant="outline">25% off</Badge>
            </Group>

            <Card.Section className={classes.section} mt="md">
                <Text fz="sm" c="dimmed" className={classes.label}>
                    Basic configuration
                </Text>

                <Group gap={8} mb={-8}>
                    {features}
                </Group>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Group gap={30}>
                    <div>
                        <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                            $168.00
                        </Text>
                        <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
                            per day
                        </Text>
                    </div>

                    <Button radius="xl" style={{ flex: 1 }}>
                        Add to Cart
                    </Button>
                </Group>
            </Card.Section>
        </Card>
    );
}

export default ProductList;