export default function Header() {
  return (
    <div className="d-flex align-items-center justify-content-between mt-4 header-wrapper">
      <div className="d-flex align-items-center">
        <h3 className="text-dark mb-0 pb-4">sneakers</h3>
        <nav class="nav ms-3 ">
          <a class="nav-link text-secondary mx-4" aria-current="page" href="#">
            Collection
          </a>
          <a class="nav-link text-secondary mx-4" aria-current="page" href="#">
            Men
          </a>
          <a class="nav-link text-secondary active mx-4" aria-current="page" href="#">
            Women
          </a>
          <a class="nav-link text-secondary mx-4" aria-current="page" href="#">
            About
          </a>
          <a class="nav-link text-secondary mx-4" aria-current="page" href="#">
            Contact
          </a>
        </nav>
      </div>
      <div className="d-flex align-items-center">
        <div className="icon-cart">
          <img src="src/assets/images/icon-cart.svg" alt="cart" />
        </div>
          <div className="ms-4 profile-wrapper">
            <img src="src/assets/images/image-avatar.png" alt="cart" />
          </div>
      </div>
    </div>
  );
}
