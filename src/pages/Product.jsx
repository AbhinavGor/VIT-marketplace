import styled from "styled-components"
import Footer from "../components/Footer";
import Navbars from "../components/Navbars";

const Container=styled.div``;


const Wrapper=styled.div`
    padding: 50px;
    display: flex;
    `;


const ImgContainer=styled.div`
    flex:1;
    `;
const Image=styled.img`
    width:80%;
    height:80%;
    object-fit: cover;
    `;


const InfoContainer=styled.div`
    flex:1;
    padding: 0px 50px;
    `;
const Title=styled.h1`
    font-weight: 300;
    `;
const Desc=styled.p`
margin:20px 0px;
    `;
const Price=styled.span`
    font-weight: 100;
    font-size: 40px;
    `;





const Product = () => {
    return (
       <Container>
        <Navbars/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://assetscdn1.paytm.com/images/catalog/product/B/BA/BAGRUGZAK-WATERCB-E8493971BF3C457/1596790349548_0..jpg?imwidth=320&impolicy=hq"/>

            </ImgContainer>
            <InfoContainer>
                <Title>
                Rugzak Waterproof Bag
                </Title>
                <Desc>
                <h3>Key Features</h3>
                <ul>
                    <li>Type: Backpack</li>
                    <li>Laptop Sleeve: Yes</li>
                    <li>With Rain Cover: No</li>
                    <li>Compatible Laptop Size: 17 inches</li>
                    <li>Style Code: PRIME19CBBLU</li>
                    <li>Color Code: Blue</li>
                    <li>Color: Blue</li>
                    <li>Material: Polyester</li>
                    <li>Total Compartments: 3</li>
                    </ul>
                    <br/>
                <h3>Product Description</h3>
                    Rug-Zak Rugzak waterproof expandable 15.6 inches laptop bag with rain cover (grey) Small (Upto 17 inches) Waterproof Laptop Backpack - Grey.
                    Id velit ea enim ex laborum ut officia et.Ipsum proident tempor elit ullamco ad sunt ut. Et do in adipisicing ea tempor Lorem ex anim qui pariatur fugiat est consectetur. Sunt fugiat cupidatat anim eiusmod sint officia voluptate minim eu pariatur dolore. Sit Lorem exercitation proident officia ut labore id do.
                </Desc>
                <Price>
                    Rs.1,000
                </Price>
        
            </InfoContainer>
        </Wrapper>
        <Footer/>

        Hello
       </Container>
    )
}

export default Product
