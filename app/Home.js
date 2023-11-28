// const Home = () => {
//   return (
//     <div className="container">
//         <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
//       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src="https://static.vecteezy.com/system/resources/previews/028/793/242/non_2x/e-commerce-shopping-cart-with-multiple-products-a-sunlit-abstract-background-e-commerce-concept-ai-generative-free-photo.jpg" alt="First slide" width={2400} height={600} layout="responsive" />
//           </div>
//           <div className="carousel-item">
//             <img src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/article6229.jpg" alt="Second slide" width={2400} height={600} layout="responsive" />
//           </div>
//           <div className="carousel-item">
//             <img src="https://www.gulftoday.ae/-/media/gulf-today/images/articles/business/2020/10/11/online-shopping-750.ashx?h=450&w=750&hash=21366F03F89C7E17EA9A9FAF6EAE39A3" alt="Third slide" width={2400} height={600} layout="responsive" />
//           </div>
//         </div>
//         <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="sr-only">Previous</span>
//         </a>
//         <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//       <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
//       <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
//       <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
//     </div>
//   );
// };

const Home = () => {
  return (
    <div className="container-fluid">
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        style={{ height: '500px' }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://static.vecteezy.com/system/resources/previews/028/793/242/non_2x/e-commerce-shopping-cart-with-multiple-products-a-sunlit-abstract-background-e-commerce-concept-ai-generative-free-photo.jpg"
              alt="First slide"
              // className="d-block w-100"
              style={{ height: '500px' ,width:'1930px',marginLeft:'50px'}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.tastingtable.com/img/gallery/the-best-day-of-the-week-to-go-grocery-shopping-at-target/intro-1660767333.jpg"
              alt="Second slide"
              // className="d-block w-100"
              style={{ height: '500px' ,width:'1930px',marginLeft:'50px'}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.gulftoday.ae/-/media/gulf-today/images/articles/business/2020/10/11/online-shopping-750.ashx?h=450&w=750&hash=21366F03F89C7E17EA9A9FAF6EAE39A3"
              alt="Third slide"
              // className="d-block w-100"
              style={{ height: '500px' ,width:'1930px',marginLeft:'50px'}}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
};

export default Home;





