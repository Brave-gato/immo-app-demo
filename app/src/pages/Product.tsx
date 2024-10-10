import { Immo } from "../components/Immo";
import { Form } from "../components/Form";
import { Newsletter } from "../components/Newsletter";
import { useParams } from "react-router-dom";

export function Product() {
  const params = useParams();
  const {id} = params;
  return (
    <>
      <Immo id={id}/>
      <Form />
      <Newsletter />
    </>
  );
}
