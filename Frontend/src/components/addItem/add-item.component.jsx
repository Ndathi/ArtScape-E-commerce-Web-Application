import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./add-item.styles.css";
import axios from "axios";

class AddArtwork extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      price: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { price, title, description } = this.state;

    const image =
      "qwertyuiop5678aaghjka3e67890avbnma56789567f8acdc7a8ofcatyuaifyuaifc5a67fcfa7a8cfa";

    try {
      //   await auth.signInWithEmailAndPassword(email, password);

      await axios({
        url: "http://127.0.0.1:8000/public/My-profile.html/AddItem.html",
        method: "post",
        data: {
          name: title,
          image: image,
          price: price,
          description: description,
          orientation: "vertical",
        },
      });
      this.setState({ title: "", price: "" });
    } catch (error) {
      console.log(error);
    }
  };

  //Function to get the value of the input field and set it as state.
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="itemrequest">
        <form onSubmit={this.handleSubmit} className="additemform">
          <div className="imagetext">
            <label for="file">Choose Image to upload </label>
            <input type="file" id="file" name="file" multiple />
          </div>

          <FormInput
            name="price"
            type=""
            label="Enter the price of the art"
            value={this.state.price}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="title"
            type="text"
            label="Enter the title of the art"
            value={this.state.title}
            handleChange={this.handleChange}
            required
          />
          <div>
            {/* <label for="w3review">Enter Item description</label> */}

            <h3> Enter a description of the art work</h3>
            <textarea
              id="w3review"
              name="descriprion"
              rows="4"
              cols="50"
            ></textarea>
          </div>

          <div className="buttons">
            <CustomButton type="submit">Submit art</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default AddArtwork;
