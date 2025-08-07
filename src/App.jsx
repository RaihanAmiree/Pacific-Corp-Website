import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './Components/Container'
import Background from './Components/Background'
import NavBar from './Components/NavBar'
import Button from './Components/Button'
import Title from './Components/Title'
import InsuranceCard from './Components/InsuranceCard'
import CommentBox from './Components/CommentBox'
import BenefitsCard from './Components/BenefitsCard'
import Gallery from './Components/Gallery'
import Rating from './Components/Rating'
import Footer from './Components/Footer'
import Subscribe from './Components/Subscribe'
import Avatar1 from './assets/Avatar1.png'
import Avatar2 from './assets/Avatar2.png'
import Avatar3 from './assets/Avatar3.png'
import Unbiased from './assets/Unbiased.png'
import Prize from './assets/Prize.png'
import Advocate from './assets/Advocate.png'
import Available from './assets/Available.png'
import Simple from './assets/Simple.png'
import Home from './assets/Home.png'
import Life from './assets/Life.png'
import Car from './assets/Car.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Background></Background>
      <Container>
        <NavBar></NavBar>
        <div className='flex text-start mt-[100px]'>
        <div>
          <h1 className='text-[70px] font-[700] font-sans text-[#313131] w-[680px] text-start leading-[90px] mb-[30px]'>We Are Ready To Make Your New Life Happier</h1>
          <p className='w-[627px] text-[20px] text-[#676767] text-start mb-[40px]'>We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.</p>
          <div>
            <Button>Get a consultation</Button>
          </div>
        </div>
      </div>
      <Title name='OUR SERVICES' title='Insurance made simple for you' description='We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.'></Title>
      <div className="flex justify-between">
        <InsuranceCard image={Home} name='Home insurance' detail='Home insurance is a type of insurance policy that provides cover for your home.'></InsuranceCard>
        <InsuranceCard image={Life} name='Life insurance' detail='Helping you bridge gaps in your health care coverage during times of transition'></InsuranceCard>
        <InsuranceCard image={Car} name='Car insurance' detail='Car insurance is a type of insurance policy that provides cover for your car.'></InsuranceCard>
      </div>
      <div className="bg-[url('/Images/Background.png')] mt-[130px] bg-cover bg-center w-full mx-auto h-[587px] rounded-xl py-[45px] px-[45px]">
        <CommentBox name='Daniel Anderson' comment="This platform is one of the best companies I have dealt with in Indonesia. They're always happy to help, and i wouldn't hesitate to recommend them."></CommentBox>
      </div>
      <Title name='OUR BENEFITS' title="We're Your Right Insurance Advocate" description='We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.'></Title>
      <div className='flex justify-between mt-[50px]'>
        <BenefitsCard image={Unbiased} name="We're unbiased" detail="Our online tools help you decide what product is best for you. We're here to insurance plan you choose."></BenefitsCard>
        <BenefitsCard image={Prize} name="We have the best prices" detail="Our insurance plans offers are priced the same everywhere else. We just make them easier for you to find."></BenefitsCard>
        <BenefitsCard image={Advocate} name="We're your insurance advocate" detail="We will deal with the insurance companies for you, even after you've bought your plan."></BenefitsCard>
      </div>
      <div className='flex justify-center gap-5 mt-[30px]'>
        <BenefitsCard image={Available} name="We're availabe 24/7" detail="We have your back 24/7 between our online chat function, email and telephone support."></BenefitsCard>
        <BenefitsCard image={Simple} name="We make insurance simple" detail="We're commited to making applying for insurance as simple as can be for our customers."></BenefitsCard>
      </div>
      <Title name='our tips for you' title="Reinventing Your Protection" description="We share common trends, strategies ideas, opinion, short & log stories from the team behind company"></Title>
      <Gallery></Gallery>
      <Title name='TESTIMONIAL' title="What Our Customer Have To Says" description="We share common trends, strategies ideas, opinion, short & log stories from the team behind company"></Title>
      <div className='flex justify-between mt-[48px]'>
      <Rating comment="I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality." name="Viola Manisa" image={Avatar1}></Rating>
      <Rating comment="I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality." name="Viola Manisa" image={Avatar2}></Rating>
      <Rating comment="I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality." name="Viola Manisa" image={Avatar3}></Rating>
      </div>
      </Container>
      <Subscribe></Subscribe>
      <Container>
        <Footer></Footer>
      </Container>
      
      
    </>
  )
}

export default App