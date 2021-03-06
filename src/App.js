import logo from './logo.svg';
import './App.css';
import './reponsive.css';
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaFacebookMessenger } from "@react-icons/all-files/fa/FaFacebookMessenger";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaUserCheck } from "@react-icons/all-files/fa/FaUserCheck";
import { FaCrosshairs } from "@react-icons/all-files/fa/FaCrosshairs";
import { FaThumbsUp } from "@react-icons/all-files/fa/FaThumbsUp";
import { FaAddressCard } from "@react-icons/all-files/fa/FaAddressCard";


function App() {
  function defaultShowSelt() {
    var defaultShowSelt = document.getElementById("contentInfoSelt").style.display = "block";
  }
  function handleShowSelf() {
    var x = document.getElementById("contentInfoSelt").style.display = "block";
    if (x) {
      document.getElementById("Selt").style.background = "rgb(204 196 196)";
      document.getElementById("Interest").style.background = "rgba(255, 255, 255, 0.5)";
      document.getElementById("Target").style.background = "rgba(255, 255, 255, 0.5)";
      document.getElementById("Result").style.background = "rgba(255, 255, 255, 0.5)";
    }
    var y = document.getElementById("contentInfoResult").style.display = "none";
    var z = document.getElementById("contentInfoTarget").style.display = "none";
    var f = document.getElementById("contentInfoInterests").style.display = "none";
  }
  function handleShowResult() {

    var y = document.getElementById("contentInfoResult").style.display = "block";
    if (y) {
      document.getElementById("Result").style.background = "rgb(204 196 196)";
      document.getElementById("Interest").style.background = "rgba(255, 255, 255, 0.5)";
      document.getElementById("Target").style.background = "rgba(255, 255, 255, 0.5)";
      document.getElementById("Selt").style.background = "rgba(255, 255, 255, 0.5)";
    }
    var x = document.getElementById("contentInfoSelt").style.display = "none";
    var z = document.getElementById("contentInfoTarget").style.display = "none";
    var f = document.getElementById("contentInfoInterests").style.display = "none";
  }
  function handleShowTarget() {
    var z = document.getElementById("contentInfoTarget").style.display = "block";
    if (z) {
      document.getElementById("Target").style.background = "rgb(204 196 196)";
      document.getElementById("Interest").style.background = "rgba(255, 255, 255, 0.5)";
      document.getElementById("Result").style.background = "rgba(255, 255, 255, 0.5)";
      document.getElementById("Selt").style.background = "rgba(255, 255, 255, 0.5)";
    }
    var y = document.getElementById("contentInfoResult").style.display = "none";
    var x = document.getElementById("contentInfoSelt").style.display = "none";
    var f = document.getElementById("contentInfoInterests").style.display = "none";
  }
  function handleshowInterest() {
    var f = document.getElementById("contentInfoInterests").style.display = "block";
    if (f) {
      document.getElementById("Interest").style.background = "rgb(204 196 196)";
      document.getElementById("Target").style.background = "rgba(255, 255, 255, 0.5)";
      document.getElementById("Result").style.background = "rgba(255, 255, 255, 0.5)";
      document.getElementById("Selt").style.background = "rgba(255, 255, 255, 0.5)";
    }
    var z = document.getElementById("contentInfoTarget").style.display = "none";
    var y = document.getElementById("contentInfoResult").style.display = "none";
    var x = document.getElementById("contentInfoSelt").style.display = "none";
  }
  return (

    <div className='main'>

      <marquee>Ch??o M???ng B???n ?????n WebSite C???a T??i || Ng??y T???o 4/7/2022 </marquee>
      <div className='container'>
        <div className='row header'>
          <div className='header-left col l-6 m-12 c-12'>
            <div className='row'>
              <div className='header-avatar col l-4 m-4 c-12'>
                <img className='avatar' />
              </div>
              <div className='header-info col l-8 m-8 c-12'>
                <h1 className='name'>Nguy???n Khoa Tr?????ng</h1>
                <div className='description'>Ch??a H???</div>
                <div className='icon-contact'>
                  <div className='facebook'>
                    <a href='https://www.facebook.com/hkkoa.truong' target={'_blank'} className='facebook-info'>
                      <i className='icon-facebook'><FaFacebook /></i>
                    </a>
                  </div>
                  <div className='message'>
                    <a href='https://www.facebook.com/hkkoa.truong' target={'_blank'} className='message-info'>
                      <i className='icon-message'> <FaFacebookMessenger /></i>
                    </a>
                  </div>
                  <div className='twitter'>
                    <a href='https://twitter.com/khoa_trng' target={'_blank'} className='twitter-info'>
                      <i className='icon-twitter'><FaTwitter /></i>
                    </a>
                  </div>
                  <div className='github'>
                    <a href='https://github.com/NguyenKhoaTruong' target={'_blank'} className='github-info'>
                      <i className='icon-git'> <FaGithub /></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='header-right col l-6 m-12 c-12'>
            <div className='row'>
              <div className='header-right-info col l-6 m-6 c-12'>
                <h3>
                  EMAIL
                  <p>truongnk70@wru.vn</p>
                </h3>
                <h3>
                  NG??Y SINH
                  <p>23/11/1999</p>
                </h3>
              </div>
              <div className='header-right-info col l-6 m-6 c-12'>
                <h3>
                  S??? ??I???N THO???I
                  <p>0335138167</p>
                </h3>
                <h3>
                  QU?? QU??N
                  <p>Ph?? H??a - Ph?? Y??n</p>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className='row containern'>
          <div className='container__selection-all col l-2 m-12 c-12 '>
            <div className='container__selection '>
              <div className='container__selection-item' onClick={handleShowSelf} id="Selt">
                <p className='contaier-selection-item-selt'>
                  <i className='icon-self'><FaAddressCard /></i>
                </p>
                <span className='title-selt'>B???n Th??n</span>
              </div>
              <div className='container__selection-item' onClick={handleShowResult} id="Result">
                <p className='container-selection-item-result'>
                  <i className='icon-result'><FaUserCheck /></i>
                </p>
                <span className='title-result'>K???t Qu???</span>
              </div>
              <div className='container__selection-item' onClick={handleShowTarget} id="Target">
                <p className='container-selection-item-target'>
                  <i className='icon-target'><FaCrosshairs /></i>
                </p>
                <span className='title-target'>M???c Ti??u</span>
              </div>
              <div className='container__selection-item' onClick={handleshowInterest} id="Interest">
                <p className='container-selection-item-interest'>
                  <i className='icon-interests'><FaThumbsUp /></i>
                </p>
                <span className='title-interest'>S??? Th??ch</span>
              </div>
            </div>
          </div>
          <div className='container__content-all col l-10 m-12 c-12' onLoad={defaultShowSelt}>
            <div className='container__content' id='contentInfoSelt'>
              <div className='container-content-info'>
                <div className='container-content-title'>
                  <h1>Gi???i Thi???u!</h1>
                </div>
                <div className='title-description'>
                  <br></br>
                  <p>Sinh Vi??n Tr?????ng Ph??n Hi???u ?????i H???c Th???y L???i. Trong th???i gian ?????i nh???n b???ng t???t nghi???p.</p>
                  <p>Ki???n th???c h???c ???????c tr??n l???p ?????u ch??a ??p d???ng ???????c m???i th??nh qu??? ???????c h???c t??? Internet.</p>
                  <p>Bi???t S??? D???ng ReactJS Component, NodeJS Express, MySQL, SQL Server, Javascript, Java, HTML, CSS, Boostrap C?? B???n</p>
                  <p>B???ng ??i???m H???c T???p</p>
                  <img className='transcript' />
                </div>
              </div>
            </div>
            <div className='container__content' id='contentInfoResult'>
              <div className='container-content-info'>
                <div className='container-content-title'>
                  <h1>M???t s??? Project c???a t??i!</h1>
                </div>
                <div className='container-content-img col l-6 m-6 c-12'>
                  <div className='img-link'>
                    <div className='results-img'>
                      <a href=' ' target="_blank">
                        <img className='img-project-toeic' />
                      </a>
                      <div className='results-img-hover'>
                        <a href='' target="_blank">
                          <div className='display-flex'>
                            <h1>Ng??n ng???:</h1>
                            <span>JavaScrip, HTML, CSS, Boostrap</span>
                          </div>
                          <div className='display-flex'>
                            <h1>C??ng c??? s??? d???ng:</h1>
                            <span> ReactJS: Class Component, Nodejs:Express, MySql <br></br>
                            </span>
                          </div>
                        </a>
                        <div className='source-code'>
                          <a href='https://github.com/NguyenKhoaTruong/toeic-free-front-end' target="_blank">Source Code FrontEnd</a>
                          <a href='https://github.com/NguyenKhoaTruong/toeic-free-backend' target="_blank"> Source Code BackEnd</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <span className='name-website'><a href='https://toiec-free.herokuapp.com/' target="_blank">WebSite Luy???n Thi Toeic</a></span>
                </div>
                <div className='container-content-img col l-6 m-6 c-12'>
                  <div className='img-link'>
                    <div className='results-img'>
                      <a href=' ' target="_blank">
                        <img className='img-project-shopee' />
                      </a>
                      <div className='results-img-hover'>
                        <a href='' target="_blank">
                          <div className='display-flex'>
                            <h1>Ng??n ng???:</h1>
                            <span>HTML, CSS</span>
                          </div>
                        </a>
                        <div className='source-code'>
                          <a href='https://github.com/NguyenKhoaTruong/shopee-clone-nkt' target="_blank"></a>
                          <a href='https://github.com/NguyenKhoaTruong/shopee-clone-nkt' target="_blank"> Source Code</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <span className='name-website'><a href='https://nguyenkhoatruong.github.io/shopee-clone-nkt/' target="_blank">Shopee Clone</a></span>
                </div>
                <div className='container-content-img col l-6 m-6 c-12'>
                  <div className='img-link'>
                    <div className='results-img'>
                      <a href=' ' target="_blank">
                        <img className='img-project-profile' />
                      </a>
                      <div className='results-img-hover'>
                        <a href='' target="_blank">
                          <div className='display-flex'>
                            <h1>Ng??n ng???:</h1>
                            <span>JavaScrip, HTML, CSS</span>
                          </div>
                          <div className='display-flex'>
                            <h1>Th?? Vi???n Framework:</h1>
                            <span>ReactJS</span>
                          </div>
                        </a>
                        <div className='source-code'>
                          <a href='' target="_blank"></a>
                          <a href='' target="_blank"> Source Code</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <span className='name-website'><a href=''></a>Profile</span>
                </div>
              </div>
            </div>
            <div className='container__content' id='contentInfoTarget'>
              <div className='container-target'>
                <h1 className='title-target'>M???c Ti??u</h1>
                <h2 className='have-learned'>H???c HTMl - CSS - Javascript c?? b???n</h2>
                <h4 className='date-success-target'>5/11/2021(Ho??n th??nh)</h4>
                <p className='content-target'>
                  L?? ng??n ng??? ????? b???t ?????u b?????c v??o con ???????ng l???p tr??nh HTML v?? CSS c?? m???i t????ng quan m???t thi???t.
                  HTML l?? n???n t???ng c???a site v?? CSS gi??p ?????nh h??nh phong c??ch (t???t c??? nh???ng g?? t???o n??n giao di???n website).
                  Hai y???u t??? n??y ho??n to??n kh??ng th??? t??ch r???i. HTML ????ng vai tr?? cung c???p c???u tr??c n???i dung v?? x??c ?????nh n???i dung ????.
                  C??c n???i dung n??y c?? th??? k??? ?????n nh?? ti??u ?????, ??o???n v??n ho???c h??nh ???nh.
                </p>
                <h2 className='have-learned' >H???c s??? d???ng GIT v?? SASS C?? B???n</h2>
                <h4 className='date-success-target'>6/12/2021(Ho??n th??nh)</h4>
                <p className='content-target'>
                  Hi???n nay, Git tr??? th??nh m???t trong c??c ph???n m???m qu???n l?? m?? ngu???n ph??? bi???n nh???t.
                  Vi???c bi???t s??? d???ng Git s??? l?? l???i th??? l???n v???i nh?? tuy???n d???ng v?? ????? ph??? bi???n v?? s??? ???ng d???ng cao c???a n??.
                  V???i SASS, b???n c?? th??? vi???t CSS theo th??? t??? r?? r??ng, qu???n l?? c??c bi???n ???? ???????c ?????nh ngh??a s???n,
                  c??c class d??ng chung hay c?? th??? t??? ?????ng n??n t???p tin CSS l???i ????? b???n ti???t ki???m dung l?????ng.
                </p>
                <h2 className='have-learned'>H???c ReactJS: Hook v?? luy???n t???p Javascript</h2>
                <h4 className='date-success-target'>01/07/2022(Trong ti???n tr??nh)</h4>
                <p className='content-target'>
                  ReactJS l?? y??u c???u thi???t y???u c???a c??c nh?? tuy???n d???ng Front End, nh???m n??ng cao v?? t???i ??u ho?? UI.
                  ???? s??? d???ng ReactJS: Component cho WebSite luy???n thi Toiec.
                  B??n c???nh ???? vi???c n??ng kh??? n??ng Javascript c??ng quan tr???ng kh??ng k??m, c?? kh??? n??ng vi???t t???t Javascript m???i k???t h???p ???????c t???t c??? ki???n th???c t???o ra s??? tr??n tru m???ch l???c.
                  Trong th???i gian n??y b???n th??n s??? c??? g???ng luy???n code nhi???u nh???t c?? th???, m???t tu???n s??? c??? g???ng cho ra m???t s???n ph???m ho??n ch???nh v?? s??? ???????c ????a v??o CV.
                </p>
                <h2 className='have-learned'>H???c th??m c??c ki???n th???c v??? NodeJS</h2>
                <h4 className='date-success-target'>01/12/2021(Trong ti???n tr??nh)</h4>
                <p className='content-target'>
                  NodeJS ???????c vi???t b???ng JavaScript v???i c???ng ?????ng ng?????i d??ng l???n m???nh. N???u b???n c???n h??? tr??? g?? v??? NodeJS, s??? nhanh ch??ng c?? ng?????i h??? tr??? b???n.
                  T???c ????? x??? l?? nhanh. Nh??? c?? ch??? x??? l?? b???t ?????ng ????? (non-blocking), NodeJS c?? th??? x??? l?? h??ng ng??n k???t n???i c??ng l??c m?? kh??ng g???p b???t c??? kh?? kh??n n??o.
                  D??? d??ng m??? r???ng. N???u b???n c?? nhu c???u ph??t tri???n website th?? t??nh n??ng d??? d??ng m??? r???ng c???a NodeJS l?? m???t l???i th??? c???c k??? quan tr???ng.
                  H?????ng ?????n m???c ti??u l?? FullStack Developer Nodejs v?? c??ng quan tr???ng ph??t tri???n ???ng d???ng web BackEnd.
                </p>
              </div>
            </div>
            <div className='container__content' id='contentInfoInterests'>
              <div className='container-interests'>
                <h1 className='title-interests'>S??? Th??ch</h1>
                <div className='interests-item'>
                  <img className='img-interests' src='https://cdn.tgdd.vn/2020/07/CookProduct/dsvsd-1200x676.jpg' />
                  <div className='interests-description'>
                    <h1 className='title-enjoy'>B??nh Canh H???</h1>
                    <p className='description-enjoy'>
                      B??nh canh h??? Ph?? Y??n l?? m???t ?????c s???n th??m ngon v?? n???c ti???ng c???a v??ng ?????t n??y.
                      N???u l??? ???sa??? v??o l?????i t??nh v???i m??n ??n n??y nh??ng ch??a c?? d???p quay l???i ????y th?? h??m nay h??y v??o b???p c??ng B??ch h??a XANH ????? ???????c
                      h?????ng d???n c??ch n???u b??nh canh h??? Ph?? Y??n ?????m ???? chu???n b??? d??? l??m t???i nh??.
                    </p>
                  </div>
                </div>
                <div className='interests-item'>
                  <img className='img-interests' src='https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/06_2022/jinx-anima-squad-prestige-avatar.jpg' />
                  <div className='interests-description'>
                    <h1 className='title-enjoy'>Li??n Minh Huy???n Tho???i</h1>
                    <p className='description-enjoy'>
                      Li??n Minh Huy???n Tho???i l?? m???t tr?? ch??i video th??? lo???i ?????u tr?????ng tr???n chi???n tr???c tuy???n
                      nhi???u ng?????i ch??i ???????c Riot Games ph??t tri???n v?? ph??t h??nh tr??n n???n t???ng Windows v?? MacOS,
                      l???y c???m h???ng t??? b???n mod Defense of the Ancients cho tr?? ch??i video Warcraft III: Frozen Throne.
                    </p>
                  </div>
                </div>
                <div className='interests-item'>
                  <img className='img-interests' src='https://24hsport.vn/webroot/img/images/giai-da-cau-tre-2017-3-1.jpg' />
                  <div className='interests-description'>
                    <h1 className='title-enjoy'>???? C???u</h1>
                    <p className='description-enjoy'>
                      ???? c???u l?? m???t m??n th??? thao th?????ng ???????c ch??i nhi???u ??? Vi???t Nam v?? Trung Qu???c,
                      trong ???? ng?????i ch??i t??m c??ch ??i???u khi???n m???t qu??? c???u ??? tr??n kh??ng sao cho kh??ng b??? r??i xu???ng ?????t b???ng c??c b??? ph???n c???a c?? th???, tr??? tay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>

    //   </header>
    // </div>
  );
}

export default App;
