import React, { DOMElement } from "react";
import Link from "next/link";

const MenuItem: React.FC<{
  Icon?: any;
  url?: string;
  Text: string;
}> = ({ Icon, Text, url }) => {
  return (
    <div className="flex items-center mb-3">
      <Link href={"/profile"}>
        <a>
          <span className="mr-3">{Icon}</span>
          <span className="text-xl">{Text}</span>
        </a>
      </Link>
    </div>
  );
};

export default MenuItem;
