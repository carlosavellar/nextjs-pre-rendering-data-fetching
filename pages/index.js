import fs from "fs";
import path from "path";

import { Fragment } from "react";
function HomePage(props) {
  return (
    <Fragment>
      <ul>
        {props.products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  debugger;
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: { products: data.products },
  };
}

export default HomePage;
