import { Grid, Skeleton, Container, Card, Image, Text, Group, Badge, Center, Button } from '@mantine/core';
import useProductList from '../../services/useProductList';
import classes from './Products.module.css';
import ReactReadMoreReadLess from "react-read-more-read-less";
// import { Image, Card, Text, Group, Button, rem } from '@mantine/core';
// import ProductList from '../ProductList/ProductList';

const child = <Skeleton height={140} radius="md" animate={false} />;

function Products() {
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
                            {/* <ReactReadMoreReadLess
                                charLimit={100}
                                ellipsis='...'
                            > */}
                                {item.title}
                            {/* </ReactReadMoreReadLess> */}
                        </Text>
                        {/* <Text fz="xs" c="dimmed">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}
                                ellipsis='...'
                            >
                                {item.description}
                            </ReactReadMoreReadLess>
                        </Text> */}
                    </div>
                    {/* <Badge variant="outline">{item.discount}% off</Badge> */}
                </Group>

                <Card.Section className={classes.section} mt="md">
                    {/* <Text fz="sm" c="dimmed" className={classes.label}>
                    Basic configuration
                </Text> */}

                    {/* <Group gap={8} mb={-8}>
                    {item}
                </Group> */}
                </Card.Section>

                <Card.Section className={classes.section}>
                    <Group gap={30}>
                        <div>
                            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                                ${item.price}
                            </Text>
                        </div>

                        <Button radius="xl" style={{ flex: 1 }}>
                            Add to Cart
                        </Button>
                    </Group>
                </Card.Section>
            </Card>
        </Grid.Col>
    ))

    return (
        <Container my="md">
            <Grid>
                {productCard}
                {/* <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col> */}
            </Grid>
        </Container>
    );
}

export default Products;