import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form } from "semantic-ui-react";
import { Segment } from "semantic-ui-react";
import Loader from "../../Common/Loader/Loader";
import { Button } from 'semantic-ui-react'
import SearchCard from "./SearchCard/searchCard";
import "./SearchCard/Styles.css";
export function AddProduct() {
  const [isLoading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState({});
  const [formData, setData] = useState({});
  const [headerData, setHeaderData] = useState({
    product_name: "Product Name",
    product_mrp: "Price (MRP)",
    product_price: "Product Price",
    availability_status: "Stock",
    delivery_estimation: "Delivery Estimated Days",
    rating_value: "Ratings",
    rating_count: "Rating count",
  });
  useEffect(() => {
    if (window.location.href.includes("admin")) {
      setHeaderData((prevState) => ({ ...prevState, url: "Url" }));
    }
  }, []);
 
  const downloadcsvfile=()=>{
    var link ='https://marketrate.infoware.xyz/priceprediction/getcsv';
    window.location.href = link;
  }
  const searchProduct = () => {
    console.log(formData);
    const payload = {
      productName: formData.name,
      pincode: formData.pincode,
      city: formData.city,
      productCop: formData.companyprice,
      productMrp: formData.mrpprice,
    };
    setLoading(true);
    fetch("https://marketrate.infoware.xyz/priceprediction/v2/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        debugger;
        console.log("Success:", data);
        setResponseData(data);
        // window.location.href = "#/searchedResult";
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
 
  // if (
  //   responseData?.data?.data?.amazon_data?.products?.product_price ||
  //   responseData?.data?.data?.bb_data?.products?.product_price ||
  //   responseData?.data?.data?.grofer_data?.products?.product_price ||
  //   responseData?.data?.jio_data?.products?.product_price
  // ) {
  //   const res = responseData?.data?.amazon_data?.products?.product_price.match(/(\d+)/);
  //   const res1 = responseData?.data?.bb_data?.products?.product_price.match(/(\d+)/);
  //   const res2 = responseData?.data?.grofer_data?.products?.product_price.match( /(\d+)/);
  //   const res3 = responseData?.data?.jio_data?.products?.product_price.match(/(\d+)/);

  //   if (res?.length || res1?.length || res2?.length || res3?.length) {
  //     var res_data = [];
  //     res_data.push(res != null ? res[0] : null);
  //     res_data.push(res1 != null ? res1[0] : null);
  //     res_data.push(res2 != null ? res2[0] : null);
  //     res_data.push(res3 != null ? res3[0] : null);
  //     // res_data.push(res,res1,res2,res3);
  //   }
  //   var min = Math.min(...res_data?.filter((item) => item));
  //   console.log(min);
  // }
  return (
    <div>
      <Segment inverted color="blue">
        <Link style={{ color: "white", float: "left" }} to="/">
          Home
        </Link>
        <img
          src="https://www.fwpgroup.co.uk/wp-content/uploads/2020/03/male-profile-icon-white-on-the-blue-background-vector-3451989.jpg"
          style={{ position: "relative", bottom: "12px" }}
          className="ui mini right floated image" alt=" "
        />
        <Link style={{ color: "white", float: "right" }} to="#">
          My Account
        </Link>
      </Segment>
      <div className="ui container logc">
        <div class="page-login">
          <div class="ui centered grid container">
            <div class="nine wide column">
              <div class="ui fluid card">
                <div class="content">
                  <form class="ui form" onSubmit={(e) => e.preventDefault()}>
                    <div class="field">
                      <label>Product Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Product Name"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="field">
                      <label>Product Code</label>
                      <input
                        type="number"
                        name="code"
                        placeholder="Enter code"
                      />
                    </div>
                    <div class="field">
                      <label>Category</label>
                      <input
                        type="text"
                        name="cost"
                        placeholder="Enter category"
                      />
                    </div>
                    <div class="field">
                      <label>Brand</label>
                      <input
                        type="text"
                        name="code"
                        placeholder="Enter brand"
                      />
                    </div>
                    <Form.Group widths="equal">
                      <Form.Input
                        fluid
                        label="Company Offer Price (₹)"
                        type="number"
                        name="companyprice"
                        placeholder="Enter company offer price ₹"
                        onChange={handleChange}
                      />
                      <Form.Input
                        fluid
                        label="MRP(₹)"
                        placeholder="First name"
                        type="number"
                        name="mrpprice"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input
                        fluid
                        label="City"
                        type="text"
                        name="city"
                        placeholder="Enter city"
                        onChange={handleChange}
                      />
                      <Form.Input
                        fluid
                        label="PinCode"
                        type="number"
                        name="pincode"
                        placeholder="Enter pincode"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <div
                      className="form-check"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <div class="ui checkbox">
                        <input type="checkbox" tabindex="0" />
                        <label>Amazon</label>
                      </div>
                      {/* <div class=" ui checkbox"><input type="checkbox" tabindex="0" /><label>Flipkart</label></div> */}
                      <div class=" ui checkbox">
                        <input type="checkbox" tabindex="0" />
                        <label>Jiomart</label>
                      </div>
                      <div class=" ui checkbox">
                        <input type="checkbox" tabindex="0" />
                        <label>Grofers</label>
                      </div>
                      <div class="ui checkbox">
                        <input type="checkbox" tabindex="0" />
                        <label>BigBasket</label>
                      </div>
                    </div>
                    <button
                      class="ui primary button"
                      style={{ marginBottom: "1rem" }}
                      onClick={() => searchProduct()}
                    >
                      Start Search{" "}
                      <i
                        style={{ marginLeft: "1rem" }}
                        aria-hidden="true"
                        className="search icon"
                      ></i>
                    </button>
                    <div class="three blue ui buttons">
                      <button class="ui button">
                        <i aria-hidden="true" className="add icon"></i>
                        Add Single Product
                      </button>
                      <button class="ui button">
                        <i aria-hidden="true" className="list icon"></i>
                        Batch Import
                      </button>
                      <button class="ui button">
                        <i aria-hidden="true" className="edit icon"></i>
                        Manage
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <h1>Please Wait Data is Loading...</h1>
        // <Loader />
      ) : responseData?.data?.amazon_data?.products ||
        responseData?.data?.bb_data?.products ||
        responseData?.data?.grofer_data?.products ||
        responseData?.data?.jio_data?.products ? (
        <div class="row">
          <table class="content-table">
            <thead class="thead-light">
              <tr className="file-data">
                <th scope="col">#</th>
                <th scope="col">Amazon</th>
                {/* <th scope="col">Flipkart</th> */}
                <th scope="col">BigBasket</th>
                <th scope="col">Jio Mart</th>
                <th scope="col">Grofers</th>
                <th scope="col">Company Online </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="">
                  <SearchCard data={headerData} />
                </td>
                <td className="">
                  {responseData?.data?.amazon_data ? (
                    <SearchCard data={responseData?.data?.amazon_data?.products} />
                  ) : null}
                </td>
                {/* <td className="">{responseData?.data?.flipkart_data ? <SearchCard data={responseData?.data?.flipkart_data?.products} /> : null}</td> */}
                <td className="">
                  {responseData?.data?.bb_data ? (
                    <SearchCard data={responseData?.data?.bb_data?.products} />
                  ) : null}
                </td>
                <td className="">
                  {responseData?.data?.jio_data ? (
                    <SearchCard data={responseData?.data?.jio_data?.products} />
                  ) : null}
                </td>
                <td className="">
                  {responseData?.data?.grofer_data ? (
                    <SearchCard data={responseData?.data?.grofer_data?.products} />
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="table-dash">
            Recommended price(Lowest Price) = Rs {responseData?.recommended_price}
          </div>
          <Button primary  onClick={()=>
            //  exportTableToCSV('Searched Products.csv')
            downloadcsvfile()
             }>Export To CSV</Button>
        </div>
      ) : (
        <h1>No Search Result Found...</h1>
      )}
    </div>
  );
}
