import { useParams, Route, Routes } from "react-router-dom";

import Offers from "./Offers";

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="content">
      <div className="product">
        <div className="image">
          <img src="https://via.placeholder.com/520x400" alt="site-banner" />
        </div>
        <div className="details">
          <h2> Product -{id}</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eum
          eaque amet minus possimus dolore fugiat qui sunt dolores sequi.
          Numquam eaque maxime dolorem dolores provident voluptas accusamus
          unde. Delectus. Incidunt, sit dolorum facere porro libero quisquam,
          quae, blanditiis laudantium quam voluptatibus possimus officiis. Harum
          pariatur sed accusamus id animi aliquid quia minima. Alias, assumenda
          doloremque. Officia cum quasi vitae. Perspiciatis inventore expedita
          dolore sed voluptas ipsam soluta commodi, et fuga quasi sequi quae
          architecto natus quaerat temporibus nesciunt, aperiam officiis.
          Pariatur veritatis maiores aliquid, voluptate accusamus ab quae sit.
          Ad, ipsam iste possimus dolorum in sunt fugit! Ipsam rem itaque
          recusandae quidem possimus esse suscipit odit inventore, eos
          voluptates earum qui, debitis ea laudantium adipisci ut, quasi quae
          molestias?
        </div>
      </div>
      <Routes>
        <Route path={"offers"} element={<Offers />} />
      </Routes>
    </div>
  );
}
