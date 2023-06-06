import { FC } from "react";

type Props = {
  description1: string;
  description2: string;
  position1: string;
  position2: string;
  position3: string;
  position4: string;
  position5?: string;
  pos1quantity: string;
  pos2quantity: string;
  pos3quantity: string;
  pos4quantity: string;
  pos5quantity?: string;
};

const ProductDescription: FC<Props> = ({
  description1,
  description2,
  position1,
  position2,
  position3,
  position4,
  position5,
  pos1quantity,
  pos2quantity,
  pos3quantity,
  pos4quantity,
  pos5quantity,
}) => {
  return (
    <section className="flex gap-[125px] mb-[160px]">
      <article className="flex flex-col w-[55%]">
        <p className="text-h3 mb-8">FEATURES</p>
        <p className="text-body opacity-50">
          {description1}
          <br />
          <br />
          {description2}
        </p>
      </article>
      <aside>
        <p className="text-h3 mb-8">IN THE BOX</p>
        <section className="flex gap-[21px]">
          <div className="flex flex-col gap-2 text-body text-orange font-bold">
            <p>{pos1quantity}</p>
            <p>{pos2quantity}</p>
            <p>{pos3quantity}</p>
            <p>{pos4quantity}</p>
            <p>{pos5quantity}</p>
          </div>
          <div className="flex flex-col gap-2 text-body opacity-50">
            <p>{position1}</p>
            <p>{position2}</p>
            <p>{position3}</p>
            <p>{position4}</p>
            <p>{position5}</p>
          </div>
        </section>
      </aside>
    </section>
  );
};

export default ProductDescription;
