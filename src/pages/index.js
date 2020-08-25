import React, { useState } from "react";
import Field from "../components/field/field";
import FieldBn from "../components/field/fieldButton";
import Layout from "../components/layout";

import SEO from "../components/seo";

const IndexPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <FieldBn open={open} setOpen={setOpen} />
      <Field open={open} setOpen={setOpen} dir={"right"} color={"red"}></Field>
    </Layout>
  );
};
export default IndexPage;
