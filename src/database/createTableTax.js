import React, { Component } from 'react';
import { noteData } from './configFirebase';
import UserItem from './UserItem';
class CreateTableTax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThai: true,
      dataFirebase: [],
    };
  }
  UNSAFE_componentWillMount() {
    noteData.on('value', notes => {
      var arrayData = [];
      notes.forEach(element => {
        const key = element.key;
        const address = element.val().address;
        const name = element.val().name;
        const email = element.val().email;
        const nhanLai = element.val().nhanLai;
        const nopThem = element.val().nopThem;
        const tamNop = element.val().tamNop;
        const tienThue = element.val().tienThue;
        const tongLuong = element.val().tongLuong;
        arrayData.push({
          id: key,
          address: address,
          name: name,
          email: email,
          nhanLai: nhanLai,
          nopThem: nopThem,
          tamNop: tamNop,
          tienThue: tienThue,
          tongLuong: tongLuong,
        });
      });
      this.setState({
        dataFirebase: arrayData,
      });
    });
  }

  addData = () => {
    var dataAdd = {};
    dataAdd.name = this.props.data.name;
    dataAdd.email = this.props.data.email;
    dataAdd.address = this.props.data.address;
    dataAdd.tongLuong = this.props.tongLuong;
    dataAdd.tamNop = this.props.tamnop;
    dataAdd.tienThue = this.props.tienThue;
    dataAdd.nhanLai = this.props.nhanLai;
    dataAdd.nopThem = this.props.nopThem;
    noteData.push(dataAdd);
    this.setState({
      trangThai: !this.state.trangThai,
    });
  };
  show = () => {
    if (this.state.trangThai === true) {
      return (
        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Tổng Thu Nhập</th>
                <th>Tổng Thuế Phải Nộp</th>
                <th>Thuế Tạm Nộp</th>
                <th>Tiền Nhận Lại</th>
                <th>Tiền Đóng thêm </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.tongLuong}</td>
                <td>{this.props.tienThue}</td>
                <td>{this.props.tamnop}</td>
                <td>{this.props.nhanLai}</td>
                <td>{this.props.nopThem}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <small>Đơn vị: triệu đồng</small>
          </div>
          <div
            onClick={() => this.addData()}
            className="btn btn-outline-danger form-control"
          >
            Kết Thúc
          </div>
        </div>
      );
    } else {
      return this.state.dataFirebase.map((value, key) => (
        <UserItem
          key={key}
          name={value.name}
          address={value.address}
          email={value.email}
          tienLuong={value.tongLuong}
          nopThem={value.nopThem}
          nhanLai={value.nhanLai}
          tienThue={value.tienThue}
          tamNop={value.tamNop}
          id={value.id}
        ></UserItem>
      ));
    }
  };
  render() {
    return (
      <div>
        <this.show></this.show>
      </div>
    );
  }
}

export default CreateTableTax;
