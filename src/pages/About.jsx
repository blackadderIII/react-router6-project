import { Route, Routes, useNavigate } from "react-router-dom";

import Offers from "./Offers";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="content">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eum
        eaque amet minus possimus dolore fugiat qui sunt dolores sequi. Numquam
        eaque maxime dolorem dolores provident voluptas accusamus unde.
        Delectus. Incidunt, sit dolorum facere porro libero quisquam, quae,
        blanditiis laudantium quam voluptatibus possimus officiis. Harum
        pariatur sed accusamus id animi aliquid quia minima. Alias, assumenda
        doloremque. Officia cum quasi vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eum
        eaque amet minus possimus dolore fugiat qui sunt dolores sequi. Numquam
        eaque maxime dolorem dolores provident voluptas accusamus unde.
        Delectus. Incidunt, sit dolorum facere porro libero quisquam, quae,
        blanditiis laudantium quam voluptatibus possimus officiis. Harum
        pariatur sed accusamus id animi aliquid quia minima. Alias, assumenda
        doloremque. Officia cum quasi vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eum
        eaque amet minus possimus dolore fugiat qui sunt dolores sequi. Numquam
        eaque maxime dolorem dolores provident voluptas accusamus unde.
        Delectus. Incidunt, sit dolorum facere porro libero quisquam, quae,
        blanditiis laudantium quam voluptatibus possimus officiis. Harum
        pariatur sed accusamus id animi aliquid quia minima. Alias, assumenda
        doloremque. Officia cum quasi vitae.
      </p>
      <button onClick={() => navigate("/products")}>Click Me</button>
      <Routes>
        <Route path="offers" element={<Offers />} />
      </Routes>
    </div>
  );
}
