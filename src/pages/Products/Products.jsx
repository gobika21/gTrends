import { Grid, Skeleton, Container, Card, Image, Text, Group, Button } from '@mantine/core';
import useProductList from '../../services/useProductList';
import classes from './Products.module.css';
import { Link, useNavigate } from "react-router-dom";

const child = <Skeleton height={140} radius="md" animate={false} />;

function Products() {
    const navigate = useNavigate();
    const { products } = useProductList('category?type=mobile');

    const productCard = products.map((item) => (
        <Grid.Col span={{ base: 12, xs: 3 }}>
            <Card withBorder radius="md" className={classes.card}>
                <Card.Section className={classes.imageSection}>
                    <Image src={item.image} alt={item.image} />
                </Card.Section>

                <Group justify="space-between" mt="md">
                    <div>
                        <Text fw={500} className={classes.product_title}>
                                {item.title}
                        </Text>
                    </div>
                </Group>

                <Card.Section className={classes.section}>
                    <Group gap={30}>
                        <div>
                            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                                ${item.price}
                            </Text>
                        </div>

                        <Button radius="xl" style={{ flex: 1 }} onClick={() => navigate(`/products/${item.id}`)}>
                            View Details
                        </Button>
                    </Group>
                </Card.Section>
            </Card>
        </Grid.Col>
    ))

    return (
        <Container size="lg" py="xl">
            <Grid>
                {productCard}
            </Grid>
        </Container>
    );
}

export default Products;