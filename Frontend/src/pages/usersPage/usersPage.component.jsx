import React from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import UserItem from "../../components/user-item/user-item.component";
import CustomButton from "../../components/custom-button/custom-button.component";
// orders={orders}

class UsersPage extends React.Component {
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
            gfg[t][j] = this.state.persons[t].name;
          }
          if (j === 1) {
            gfg[t][j] = this.state.persons[t].email;
          }
          if (j === 2) {
            gfg[t][j] = this.state.persons[t].role;
          }
          if (j === 3) {
            gfg[t][j] = this.state.persons[t]._id;
          }
        }
      }

      var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "landscape" });

      // doc.table(1, 1, data, headers, { autoSize: true });

      autoTable(doc, {
        head: [["Name", "Email", "Role", "ID"]],
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
    axios.get("http://127.0.0.1:8000/api/users").then((res) => {
      const persons = res.data.data.users;

      this.setState({ persons });
    });
  }

  render() {
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Name</span>
          </div>

          <div className="header-block">
            <span>email</span>
          </div>

          <div className="header-block">
            <span>Role</span>
          </div>

          <div className="header-block">
            <span>ID</span>
          </div>

          {/* <div className="header-block">
            <span>Remove</span>
          </div> */}
        </div>

        {this.state.persons.map((cartItem) => (
          <UserItem key={cartItem._id} trnx={cartItem} />
        ))}

        <CustomButton onClick={this.downloadReport}>
          Download User Report
        </CustomButton>
      </div>
    );
  }
}

export default UsersPage;
