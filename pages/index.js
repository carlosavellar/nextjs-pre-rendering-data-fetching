import { Fragment } from "react";
function HomePage(props) {
  console.log(props.products);
  return (
    <Fragment>
      <ul>
        {props.products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: [{ id: "p1", title: "Product 1" }],
    },
  };
}

export default HomePage;
