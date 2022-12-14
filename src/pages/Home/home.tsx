import React, { useEffect, useState } from "react";
import { Row, Col, Carousel, Divider, Typography, Button } from "antd";
import HomeMenu from "../../components/Home/Menu";
import styled from "styled-components";
import Banner1 from "../../assets/images/banner1.png";
import Banner2 from "../../assets/images/banner2.png";
import Banner3 from "../../assets/images/banner3.png";
import Banner4 from "../../assets/images/banner4.png";
import Banner5 from "../../assets/images/banner5.png";
import Banner6 from "../../assets/images/banner6.png";
import Meta from "antd/lib/card/Meta";
import Card from "antd/lib/card/Card";
import LogoImage from "../../assets/image/Rectangle.png";
import LogoImage1 from "../../assets/image/Rectangle2.png";
import PhukienApple from "../../assets/image/phukienApp.png";
import { ProductType } from "../../types/Product";
// import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
import { StarOutlined } from "@ant-design/icons";
import { getAll } from "../../api/product";
const { Text, Title } = Typography;

const style: React.CSSProperties = {
  background: "#ffffff",
  padding: "25px 0",
};
const styles: React.CSSProperties = {
  //   background: "#FFA3A3",
  //   padding: "10px 0",
  //   color: "#ffffff",
};

const HomePage = () => {
  //useState luu va tra du lieu
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await getAll();
      console.log(data);
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col span={6}>
              <HomeMenu />
            </Col>
            <Col span={18}>
              <Carousel autoplay>
                <Slider src={Banner1} />
                <Slider src={Banner2} />
                <Slider src={Banner3} />
                <Slider src={Banner4} />
              </Carousel>
            </Col>
          </Row>
        </Container>
        <Section>
          <Divider orientation="left">??i???n tho???i n???i b???t</Divider>
          <Row gutter={[16, 24]}>
            {products &&
              products.map((product, index) => {
                return (
                 
                  <Col className="gutter-row" span={4} style={style} key={index}>
                    <div>
                      <Card
                        hoverable
                        cover={<Image alt="example" src={product.img} />}
                      >
                        <Title level={5}><Link to={`detail/${product.id}`}>{product.name}</Link></Title>
                        <Row>
                          <Col span={12}>
                            <Text type="danger">{product.originalPrice}vnd</Text>
                          </Col>
                          <Col span={12}>
                            <Text type="secondary">{product.saleOffPrice}vnd</Text>
                          </Col>
                        </Row>
                        <Borders>
                          <Text>
                            [HOT] Thu c?? l??n ?????i gi?? cao - Th??? t???c nhanh - Tr???
                            gi?? l??n t???i 1.000.000??
                          </Text>{" "}
                        </Borders>
                        <br />
                        <Row>
                          <Col span={12}>
                            <Link to="">{<StarOutlined />}</Link>
                            <Link to="">{<StarOutlined />}</Link>
                            <Link to="">{<StarOutlined />}</Link>
                            <Link to="">{<StarOutlined />}</Link>
                            <Link to="">{<StarOutlined />}</Link>
                          </Col>
                          <Col span={12}>
                            <Text type="secondary">72 ????nh gi??</Text>
                          </Col>
                        </Row>
                      </Card>
                    </div>
                  </Col>
                 
                  
                );
              })}
          </Row>
        </Section>
        <Section>
          <Divider orientation="left">Ph??? ki???n</Divider>
          <Dt>
            <Row gutter={[16, 24]}>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#FFADB6" }}>
                  <Text>N???i b???t</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#FFB8B8" }}>
                  <Text style={styles}>Ph??? ki???n Apple</Text>
                  <br />
                  <img alt="example" src={PhukienApple} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#FF94EB" }}>
                  <Text style={styles}>D??n m??n h??nh</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#E0B3FF" }}>
                  <Text style={styles}>???p l??ng - Bao da</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#C6D8FB" }}>
                  <Text style={styles}>C??p, s???c</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#4D91FF" }}>
                  <Text style={styles}>Pin d??? ph??ng</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#85FFB1" }}>
                  <Text style={styles}>Thi???t b??? m???ng</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#F5D63D" }}>
                  <Text style={styles}>Camera</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#FDA363" }}>
                  <Text style={styles}>Chu???t, b??n ph??m</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#FF6666" }}>
                  <Text style={styles}>Th??? nh???, USB</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#D6D6D6" }}>
                  <Text style={styles}>Apple Care</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#FFADB6" }}>
                  <Text style={styles}>D??y ??eo Airtag</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#96FDB5" }}>
                  <Text style={styles}>Gaming Gear</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#6BCEFF" }}>
                  <Text style={styles}>Ph??? ki???n ch???p ???nh</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#D8A8FF" }}>
                  <Text style={styles}>Ph??? ki???n Laptop</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
            </Row>
          </Dt>
          <Divider orientation="left">Linh ki???n m??y t??nh</Divider>
          <Dt>
            <Row gutter={[16, 24]}>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#FCA5A5" }}>
                  <Text style={styles}>PC r??p s???n</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#FDA4AF" }}>
                  <Text style={styles}>CPU</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#F9A8D4" }}>
                  <Text style={styles}>Mainboard</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#C4B5FD" }}>
                  <Text style={styles}>RAM</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#A5B4FC" }}>
                  <Text style={styles}>??? c???ng</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#93C5FD" }}>
                  <Text style={styles}>Card m??n h??nh</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#6EE7B7" }}>
                  <Text style={styles}>Ngu???n m??y t??nh</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
              <Col className="gutter-row" span={3}>
                <Bo style={{ backgroundColor: "#FCD34B" }}>
                  <Text style={styles}>T???n nhi???t</Text>
                  <br />
                  <img alt="example" src={LogoImage1} />
                </Bo>
              </Col>
            </Row>
          </Dt>
        </Section>
      </div>
    </>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;
const Slider = styled.img`
  /* height: 300px;
  color: '#fff',;
	text-align: center;
	background-color: #364d79; */
`;
const Image = styled.img`
  height: 160px;
  width: 160px;
  left: 92px;
  top: 585px;
  border-radius: 0px;
  margin: auto;
  margin-top: 20px;
`;
const Section = styled.div`
  /* background-color: #eddddd; */
  max-width: 1505px;
  margin: auto;
`;
const Borders = styled.div`
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
`;
const Dt = styled.div`
  width: 1150px;
  margin: auto;
`;
const Bo = styled.div`
  border-radius: 10px;
  text-align: center;
  line-height: 1.8;
  height: 125px;
`;

export default HomePage;
