import { Badge, Group, Text, Container } from '@mantine/core';
import classes from './Home.module.css';
import Products from '../Products/Products';

function Home() {

  return (
    <>
      <Container size="lg" py="xl">
        <Group justify="center">
          <Badge variant="filled" size="lg">
            Know about us
          </Badge>
        </Group>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. gTrends houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured about finding them all here. For those of you with erratic working hours, gTrends is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down.
        </Text>

      </Container>
      <Container size="lg" py="xl">
        <Group justify="center">
          <Badge variant="filled" size="lg">
            More top products for you
          </Badge>
        </Group>
        <br />
        <Products />
      </Container>
    </>
  );
}

export default Home;