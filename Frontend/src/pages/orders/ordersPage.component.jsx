import React from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import OrderItem from "../../components/order-item/order-item.component";
import CustomButton from "../../components/custom-button/custom-button.component";
// orders={orders}

class OrdersPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [],
    };
  }

  downloadReport = () => {
    try {
      var gfg = new Array(this.state.persons.length);
      // Loop to create 2D array using 1D array

      for (var i = 0; i < gfg.length; i++) {
        gfg[i] = [];
      }

      // Loop to initialize 2D array elements.
      for (var t = 0; t < this.state.persons.length; t++) {
        for (var j = 0; j < 4; j++) {
          if (j === 0) {
            gfg[t][j] = this.state.persons[t].createdAt.substring(0, 10);
          }
          if (j === 1) {
            gfg[t][j] = this.state.persons[t].trnx_id;
          }
          if (j === 2) {
            gfg[t][j] = this.state.persons[t].amount;
          }
          if (j === 3) {
            gfg[t][j] = this.state.persons[t].number;
          }
        }
      }

      var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "landscape" });

      // doc.table(1, 1, data, headers, { autoSize: true });

      autoTable(doc, {
        head: [["Date", "Transaction ID", "Amount", "Phone"]],
        body: gfg,
      });

      const filename = "trsxrpt.pdf";
      doc.save(filename);
      console.log("report saved successfully");
    } catch (error) {
      console.log("error saving trsxrpt");
    }
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/stk/payments").then((res) => {
      const persons = res.data.data.payments;
      console.log(persons);
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>

          <div className="header-block">
            <span>Code</span>
          </div>

          <div className="header-block">
            <span>Amount</span>
          </div>

          <div className="header-block">
            <span>Phone</span>
          </div>

          {/* <div className="header-block">
            <span>Remove</span>
          </div> */}
        </div>

        {this.state.persons.map((cartItem) => (
          <OrderItem key={cartItem._id} trnx={cartItem} />
        ))}

        <CustomButton onClick={this.downloadReport}>
          Download Transaction Report
        </CustomButton>
      </div>
    );
  }
}

export default OrdersPage;
