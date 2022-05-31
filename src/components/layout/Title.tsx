import React from "react";

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => (
  <div>
    {title && <h1>{title}</h1>}
  </div>
);

export default Title;
