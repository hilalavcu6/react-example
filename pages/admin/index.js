import { Component } from "react";
import { AdminLayout } from "../../components/layout";
import { CardBox } from "../../components/common";
export default class Index extends Component {
  render() {
    return (
      <AdminLayout
        contentTitle={"Ana Menü"}
        contentTitleButton={<i className="fa fa-2x fa-home" />}
        url={this.props.url}
      >
        <div className="row">
          <div className="col-12">
            <CardBox type={"info"} title={"Sipariş Bilgileri"}>
              <div className="row">
                <div className="col-6">
                  <div class="small-box bg-info">
                    <div class="inner">
                      <h3>1000000</h3>
                      <p>Toplam Ciro</p>
                    </div>
                    <div class="icon">
                      <i class="ion ion-person-add"></i>
                    </div>
                    <a href="#" class="small-box-footer">
                      Detaylar <i class="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-6">
                  <div class="small-box bg-warning">
                    <div class="inner">
                      <h3>456</h3>
                      <p>Toplam Kullanıcı</p>
                    </div>
                    <div class="icon">
                      <i class="ion ion-person-add"></i>
                    </div>
                    <a href="#" class="small-box-footer">
                      Detaylar <i class="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </CardBox>
          </div>
          <div className="col-12">
            <CardBox type={"warning"} title={"Sipariş Bilgileri"}>
              <div className="row">
                <div className="col-3">
                  <div class="small-box bg-danger">
                    <div class="inner">
                      <h3>220</h3>
                      <p>Toplam Sipariş</p>
                    </div>
                    <div class="icon">
                      <i class="ion ion-person-add"></i>
                    </div>
                    <a href="#" class="small-box-footer">
                      Detaylar <i class="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-3">
                  <div class="small-box bg-warning">
                    <div class="inner">
                      <h3>56</h3>
                      <p>Yolda Olan Sipariş</p>
                    </div>
                    <div class="icon">
                      <i class="ion ion-person-add"></i>
                    </div>
                    <a href="#" class="small-box-footer">
                      Detaylar <i class="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-3">
                  <div class="small-box bg-success">
                    <div class="inner">
                      <h3>144</h3>
                      <p>Tamamlanmış Sipariş</p>
                    </div>
                    <div class="icon">
                      <i class="ion ion-person-add"></i>
                    </div>
                    <a href="#" class="small-box-footer">
                      Detaylar <i class="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-3">
                  <div class="small-box bg-info">
                    <div class="inner">
                      <h3>20</h3>
                      <p>Yeni Sipariş</p>
                    </div>
                    <div class="icon">
                      <i class="ion ion-person-add"></i>
                    </div>
                    <a href="#" class="small-box-footer">
                      Detaylar <i class="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </CardBox>
          </div>
        </div>
      </AdminLayout>
    );
  }
}
