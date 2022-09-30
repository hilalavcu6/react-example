import { Component } from "react";
import { AdminLayout } from "../../components/layout";
import { CardBox } from "../../components/common";
export default class MyOrder extends Component {
  render() {
    return (
      <AdminLayout
        contentTitle={"Siparişlerim"}
        contentTitleButton={<i className="fa fa-2x fa-home" />}
        url={this.props.url}
      >
        <div className="row">
          <div className="col-12">
            <CardBox type={"info"} title={"Sipariş Bilgileri"}>
              <div className="col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>100.000</h3>
                    <p>Toplam Ciro</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add"></i>
                  </div>
                  <a href="#" className="small-box-footer">
                    Detaylar <i className="fas fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>456</h3>
                    <p>Toplam Kullanıcı</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add"></i>
                  </div>
                  <a href="#" className="small-box-footer">
                    Detaylar <i className="fas fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
            </CardBox>
          </div>
        </div>

        <div className="col-12">
          <CardBox type={"warning"} title={"Sipariş Bilgileri"}>
            <div className="row">
              <div className="col-3">
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>220</h3>
                    <p>Toplam Sipariş</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add"></i>
                  </div>
                  <a href="#" className="small-box-footer">
                    Detaylar <i className="fas fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-3">
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>56</h3>
                    <p>Yolda Olan Sipariş</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add"></i>
                  </div>
                  <a href="#" className="small-box-footer">
                    Detaylar <i className="fas fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-3">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>144</h3>
                    <p>Tamamlanmış Sipariş</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add"></i>
                  </div>
                  <a href="#" className="small-box-footer">
                    Detaylar <i className="fas fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-3">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>20</h3>
                    <p>Yeni Sipariş</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add"></i>
                  </div>
                  <a href="#" className="small-box-footer">
                    Detaylar <i className="fas fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </CardBox>
        </div>
      </AdminLayout>
    );
  }
}
