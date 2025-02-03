import React,{useState} from 'react';

import './Product.css';
function Products() {
  const [cart, setCart] = useState([]);
     const generateCaptcha = () => {
          const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          let captcha = '';
          for (let i = 0; i < 6; i++) {
            captcha += characters.charAt(Math.floor(Math.random() * characters.length));
          }
          return captcha;
        };
     const [captcha, setCaptcha] = useState(generateCaptcha());
     const [captchaInput, setCaptchaInput] = useState('');
     const [isFormVisible, setFormVisible] = useState(false);
     const [selectedProduct, setSelectedProduct] = useState(null);
     const openForm = (productName) => {
          console.log("Opening form for:", productName); // Debugging: Check the productName value
  if (typeof productName === "string" && productName.trim() !== "") {
          setSelectedProduct(productName);
          setFormVisible(true); 
          console.log("Selected product:", productName);
     } else {
          console.error("Invalid product name:", productName);
        }
        };
        
      
        // Handle CAPTCHA input change
        const handleCaptchaChange = (e) => {
          setCaptchaInput(e.target.value);
        };
        const closeForm = () => {
          setFormVisible(false);
          setSelectedProduct(null);
        };
       
      
        const reloadCaptcha = () => {
          setCaptcha(generateCaptcha()); // Regenerate CAPTCHA
    setCaptchaInput('');
        };
        const handleSubmit = (e) => {
          e.preventDefault();
      
          if (captchaInput !== captcha) {
            alert('Captcha does not match. Please try again.');
            return;
          }
      
          // Proceed with form submission logic here...
          alert('Form submitted successfully');
          setFormVisible(false); // Close the form
        };
  const productLinks = [
    { name: 'Can Coolers',
        image:'/pictures/cancoolerbig.jpg',
        about:'Our top-qualityneoprene can coolers with "sharkskin" non slip base and fully glued 5mm panels. Standard sizes to fit either 330ml pop can or 440ml beer can. However, we can also make to any size required. Screen printed or sublimated with your logo - no colour limit, all over printing, neon inks, special coatings including plush, turf, lycra',
        deliveryTime:'3 weeks',
        printingColors:'unlimited',
        pieces:'500',
        enquire: '/enquire/bottle-shirts'},
    { name: 'Can Sleeves', 
        image:'/pictures/sleeves.jpg',
        about:'Base-less, velcro fastening or flat-pack design, this is a simplified product reflected in a keener price than standard can coolers. An ideal, low cost drinks brand promotional item suitable for mailing or on-pack activities. Huge range of neoprene colours and finishes possible.',
        deliveryTime:'3 weeks',
        printingColors:'unlimited',
        pieces:'500',
        enquire:'/enquire/can-sleeves',
     },
    { name: 'Bottle Coolers', 
        image: '/pictures/bottlecooler.jpg',
        about:'Our shaped bottle cooler with access zip. The standard product fits a 33cl beer, pop or alcopop bottles but we do ask our clients for a sample bottle or full dimensions in order to make a perfect fit as bottle shapes and designs may vary. We tailor for any size - All print options possible. Contact us for a very competitive quotation',
        deliveryTime:'3 weeks +',
        pieces:'500',
        printingColors:'unlimited',
        enquire:'',
    },
    { name: 'Bottle Sleeves',
        image:'/pictures/bottlesleeve.jpg',
        about:'Simple, flat pack sleeved shaped bottle cooler. Can be printed both sides or with all-over dysub print. Excellent value for your promotional investment and, as with all of our products, print quality is of the highest standard.',
        deliveryTime:'3 weeks +',
        pieces:'500',
        printingColors:'unlimited',
        enquire:'',
     },
    { name: 'Wine Sleeves',
         image:'/pictures/winecooler2.jpg',
         about:'Larger size prestige cooler for wine bottles and champagne bottles. All bottle shapes differ, we will need exact dimensions for your order to deliver a perfect fit. Numerous styles available. Usually made with straight or curved zipper access and finished in lycra binding. Note that we also make lower-cost sleeves for wine bottle sizes.',
         deliveryTime:'3 weeks +',
        pieces:'250',
        printingColors:'unlimited',
        enquire:'',
        },
    { name: 'Baby Bottle Coolers',
         image:'/pictures/babycooler.jpg',
         about:'This is where neoprene material really excels! The material not only supresses temperature increases but as in wetsuits, allows for the retention of heat. So here we offer our heat retaining baby-bottle insulators. These have become very popular in the USA and are only just becoming recognised here in the UK for their convenience and function. Flexibility of neoprene allows for a multi-size fit.',
         deliveryTime:'3 weeks +',
        pieces:'500',
        printingColors:'unlimited',
        enquire:'',
         },
    { name: 'Bottle Shirts', 
        image:'/pictures/shirt.jpg',
        about:'Simple, economic, flat-pack sleeve shaped bottle cooler. Ideal for sports team merchandising or team sponsors. We have a number of different designs available. Products can be tailored to fit water bottle, beer bottle or soda bottle.',
        deliveryTime:'3 weeks +',
        pieces:'500',
        printingColors:'6 or di-sub',
        enquire:'',
    },
    { name: 'Cool Tubes',
         image:'/pictures/cooltube2.jpg',
         about:'Cool portable storage fo canned drink products. Different sizes available. A different and innovative promotional product at a great price!',
         deliveryTime:'3 weeks +',
         pieces:'500',
        printingColors:'6 or di-sub',
        enquire:'',

        },
    { name: '6-Pack Coolers',
         image:'/pictures/neoprenecarrybag.jpg',
         about:'Cool portable storage for any application. Canned and bottled drink products, food, picnicsetc. Can and Bottle totes can be made for 2 / 4/ 6 or 8 containers.',
         deliveryTime:'3 weeks +',
         pieces:'250',
        printingColors:'6 or di-sub',
        enquire:'',

         },
    { name: 'CD Cases', 
        image:'/pictures/CD-case.jpg',
        about:'12 or 24 CD/DVD neoprene pouch. Safe and simple portable storage for all your media / software discs. Zip closure . Print by screen print or di-sublimation for photo-quality finish. Neopremia are licencees for Disney and many other major brands.',
        deliveryTime:'from 5 weeks ',
         pieces:'500',
        printingColors:'4 or di-sub',
        enquire:'',

     },
    { name: 'General Bags',
         image:'/pictures/medicalbags.jpg',
         about:'We make a range of bags, pouches and cases for medical products. We invite customers to submit their designs and we will be happy to quote you. 500 pieces is a guideline MOQ. Please ask us about this.',
        deliveryTime:'3 weeks ',
         pieces:'250',
        printingColors:'6 or di-sub',
        enquire:'',
         },
    { name: 'Medical Pouches',
         image:'/pictures/neobags.jpg',
         image:'/pictures/medibag.jpg',
         about:'We can make you protective travel and storage bags for a vast range of commercial products. This list covers product areas we have made bags for in the past:Medical devices, Sunglasses, PDAs, Cameras, Binoculars, BackPacks, Bumbags, and many more. Please contact us with your brief for further information',
        deliveryTime:'3 weeks +',
         pieces:'250',
        printingColors:'6 or di-sub',
        enquire:'',
         },
    { name: 'Document Wallet',
         image:'/pictures/docwallets.jpg',
         about:'Unusual waterproof and protective sleeve for documents made in a variety of neoprene finishes including smoothskin, sharkskin, embossed and standard double polyester-lined neoprene.',
        deliveryTime:'3 weeks +',
         pieces:'500',
        printingColors:'6 or di-sub',
        enquire:'',
         },
    { name: 'Laptop Cases',
         image:'/pictures/laptopcase3.jpg',
         about:'Specially fabricated protective neoprene sleeves and carrycases for your valuable laptop or notebook computer, your PDA or your media player. Made to order to your exact design spec. We also offer stock product here allowing you to buy one-offs from us.',
        deliveryTime:'3 weeks +',
         pieces:'500',
        printingColors:'6 or di-sub',
        enquire:'',
         },
    { name: 'Sunglass Retainers',
         image:'/pictures/retainers.jpg',
         about:'Different styles are available both in adult and kids sizes. We have the ability to make a huge range of different product in our unique material. Sunglasses retainers are a cheap and cheerrful promotional item for anyone in the marine trade and also ideal for ABC1/2 targeted youth promotions.',
        deliveryTime:'3 weeks +',
         pieces:'500',
        printingColors:'6 or di-sub',
        enquire:'',
         },
    { name: 'Golf Club Covers',
         image:'/pictures/golfcovers.jpg',
         about:'Quality built neoprene protective sleeves for drivers, putters and irons.',
        deliveryTime:'from 5 weeks',
         pieces:'250',
        printingColors:'4 or di-sub',
        enquire:'',
         },
    { name: 'Headbands',
         image:'pictures/headband.jpg',
         image:'/pictures/neoprenewristbands.jpg',
         about:'Specially fabricated neoprene headbands and wristbands for use in water, on the snow or for general winter warmth. Ideal for people wishing to avoid getting water in the ears. "Forehead" branding - there really is nothing more in-yer-face',
        deliveryTime:'3 weeks +',
         pieces:'500',
        printingColors:'6 or di-sub',
        enquire:'',
         },
    { name: 'Sheet Neoprene',
         image:'/pictures/Neoprenesheet.jpg',
         about:'From UK Stockholding, we offer polyester laminated neoprene sheets in both 2.5mm and 5.0mm thicknesses. The sheet size is 1200 x 2200mm. The majority of stock is black/ black material but we also have some black/blue, black/red and black/yellow. Our pricing is very competitive. If you are looking for a company to help you make a new product sample, you have found us.Contact us for further info.',
        deliveryTime:'3 weeks +',
         pieces:'250',
        printingColors:'6 or di-sub',
        enquire:'',
        },
    { name: 'Phone Totes',
         image:'/pictures/phoneholder.jpg',
         about:'Belt clip holder for your mobile phone with security closure. Safe and convenient storage for your phone. Specific fits or generic options. Easily branded and many different styles are available!',
        deliveryTime:'3 weeks +',
         pieces:'500',
        printingColors:'6 or di-sub',
        enquire:'',
         },
    { name: 'Car Seat Belt Pads', 
        image:'/pictures/seatpad.jpg',
        about:'Here is a great new promotional product from Neopremia. Automotive accessory offering comfort and support for car drivers and passangers. Easy to position and made with a handdy mini-pocket for your bluetooth earpiece. We will also be adding a fixture for a sleep pad in the near future. Neoprene construction with velcro fastening.',
        deliveryTime:'3 weeks +',
         pieces:'250',
        printingColors:'6 or di-sub',
        enquire:'',
     },
    { name: 'buy plain stock laptop cases',
         image:'/pictures/stock-laptop-case-S.jpg',
         image:'/pictures/stock-laptop-case-M.jpg',
         image:'/pictures/stock-laptop-case-L.jpg',
        enquire:'',
         },
    { name: 'ipad/tablet pouch',
         image:'/pictures/ipad.jpg',
         about:'Super-thick neoprene pouces designed to carry and protect your technology. Our Ipad / tablet pouches feature an extra pocket internally so that card or plastic protection can be added to enhance the durability of the pouch.',
         deliveryTime:'3 weeks +',
          pieces:'500',
         printingColors:'6 or di-sub',
         },
    { name: 'other items',
        about:'New LED Can coolers in PE Foam with transfer print. A great new promo item!',

         image:'/pictures/led-can-cooler.jpg',
        rashitems:'Rash Vests: Short Sleeve, Long Sleeve, wet shirts, unisex, adults and kids. Low minimum runs using the best UV protective lycra materials. An ideal solution for holiday and travel companies. Also a practical and sensible kids promotional item. Let us know what you are looking for and we will offer quotations.',
        image:'/pictures/custom-rashguard.jpg',
        sportsupport:'Sports Supports:A range of orthopedic neoprene supports and wraps for ankle, knee, waist, shoulder, elbow and wrist. Fully brandable and with low miimum orders. NHS / government purchase orders welcome.',
        image:'/pictures/neopreneankle.jpg',
         },
  ];
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart.`);
  };

  const buyNow = (product) => {
    alert(`Proceed to buy ${product.name} for $${product.price}`);
    // Redirect to a payment gateway or purchase page here
  };
  return (
     <section id="products" className="products">
     <h2>Our Products</h2>
     <div className="product-grid">
       {productLinks.map((product, index) => (
         <div className="product-item" key={index}>
           <img src={product.image} alt={product.name} className="product-image" />
           <h3>{product.name}</h3>
           <p>{product.about}</p>
           <p>${product.price}</p>
           <div className="product-info">
             <p>
               <strong>Delivery Time:</strong> {product.deliveryTime}
             </p>
             <p>
               <strong>Printing Colors:</strong> {product.printingColors}
             </p>
             <p>
               <strong>Pieces:</strong> {product.pieces}
             </p>
           </div>
           <button className="enquire-now" onClick={()=> openForm(product.name)}>
             Enquire Now
           </button>
           <div className="product-actions">
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <button onClick={() => buyNow(product)}>Buy Now</button>
            </div>
         </div>
       ))}
     </div>
     {isFormVisible && (
           <div className={`modal ${isFormVisible ? "show" : ""}`}>
        
          <div className="modal-content">
            <span className="close" onClick={closeForm}>
              &times;
            </span>
            <h2>Product Enquiry Form</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="first-name">Name*</label>
              <div className="name-fields">
                <input type="text" id="first-name" placeholder="First Name" required />
                <input type="text" id="last-name" placeholder="Last Name" />
              </div>

              <label htmlFor="phone">Phone Number*</label>
              <div className="phone-fields">
                <input type="text" id="area-code" placeholder="Area Code" required />
                <input type="text" id="phone-number" placeholder="Phone Number" required />
              </div>

              <label htmlFor="email">E-mail*</label>
              <input type="email" id="email" placeholder="ex: myname@example.com" required />

              <label htmlFor="contact-method">Preferred Method of Contact*</label>
              <select id="contact-method" required>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
                <option value="either">Either</option>
              </select>

              <label htmlFor="product-interest">Product Interest</label>
              <select id="product-interest" required>
                <option value={selectedProduct||""}>{selectedProduct || "Please select a product"}</option>
              </select>

              <label htmlFor="quantity">Proposed Quantity</label>
              <input type="number" id="quantity" placeholder="e.g., 23" />

              <label htmlFor="comments">Comments/Special Requests</label>
              <textarea id="comments" rows="4"></textarea>

              <label htmlFor="captcha">Enter the message as it's shown*</label>
              <div className="captcha">
                <input type="text" id="captcha" placeholder="Captcha text here"
                value={captchaInput}
                onChange={handleCaptchaChange} required />
                <button type="button" onClick={reloadCaptcha}>
                  Reload
                </button>
                <p>Captcha: <strong>{captcha}</strong></p> {/* Display CAPTCHA */}
              <button type="submit">Submit</button>
              </div>

              
            </form>
          </div>
        </div>
     )}
   </section>
       
  );
}

export default Products;
