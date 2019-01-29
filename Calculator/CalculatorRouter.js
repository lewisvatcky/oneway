import * as yup from "yup";
import { calculate } from "./CalculatorService";

const schema = yup.object().shape({
  postcode: yup.string().required(),
  width: yup.string().required(),
  height: yup.string().required(),
  length: yup.string().required(),
  weight: yup.string().required()
});

export default app => {
  app.post("/calculate", async (req, res) => {
    const isValid = await schema.isValid(req.params);
    console.log(req.params);
    if (!isValid) {
      res.status(500).send({ error: "Parameters are not valid" });
    }

    const { postcode, width, height, length, weight } = req.params;

    const estimates = calculate(postcode, width, height, length, weight);

    res.send(estimates);
  });
};
