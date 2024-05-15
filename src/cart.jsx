export default function Cart(){
    return(
        <div className="row gx-0 w-100">
          <div className="col-5 px-3">
            <div className="select-img-wrapper w-100">
              <img src="src/assets/images/image-product-1.jpg" alt="" />
            </div>
          </div>
          <div className="col-7 px-3">
            <h6 className="text-uppercase text-primary">Sneaker company</h6>
            <h1>Fall Limited Edition <br /> Sneakers</h1>
            <p className="mt-3 text-secondary">These low-profile sneakers are your perfect casual wear companion.
             Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer</p>
             <div className="d-flex flex-column">
              <div className="d-flex align-items-center">
              <h2 className="mb-0">$125.00</h2>
              <div className="ms-2 px-2 discount-label">
                50%
              </div>
              </div>
              <div className="minus-discount text-secondary">
                $250.00
              </div>
              <div className="mt-3 d-flex align-items-center cart-add-wrapper">
                <button type="button" className="d-flex align-items-center justify-content-center">-</button>
                <input type="number" className="border-0" />
                <button type="button" className="d-flex align-items-center justify-content-center">+</button>
              </div>
             </div>
          </div>
        </div>
    )
}