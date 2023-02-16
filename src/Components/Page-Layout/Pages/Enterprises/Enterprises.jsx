import "./Enterprises.css";

import PageTitle from "../../../Re-Used/PageTitle/PageTitle";
import BulletList from "../../../Re-Used/BulletList/BulletList";
import DarkList from "../../../Re-Used/DarkList/DarkList";
import ContactForm from "../../../Re-Used/ContactForm/ContactForm";
import EnterprisesImage from "../../../../Assets/Enterprises-Page/Enterprises.png";
import PartnerImage from "../../../../Assets/Enterprises-Page/Partners.png";

function Enterprises() {
  const title = {
    first: 'MAKE YOUR',
    highlight:'PASSION PAY.',
    next:'UNLIMITED GROWTH',
    last:'AND EARNINGS'
  }

  const benifits = {
    title: 'OUR BENEFITS',

    benifitList : [
        'Premium support to hire the right tech talent.',
        'Save time & money in recruitment.',
        'Train our students and hire the best talent.',
        "Transform your employees with digital skills.",
        'Contribute to fill the gap between academia & industry.'
    ],
  }

  const students = {
    title: 'WHY OUR STUDENTS',

    benifitList : [
        'Job ready individuals',
        'Have high motivation',
        'Persistent problem solver',
        'Have a growth mindset'
    ],
  }

  const partner = {
      title : "LET'S PARTNER..!",

      benifitList : [
        'Select directly from our talent pool – free. Please visit our Talent Pool page.',
        'You can train our students and hire directly – free.',
        'We can transform your staff with digital skills.',
        'Tell us your hiring need we will match the best talent for you.',
        'Tell us your IT requirement we will deliver systems & solutions.',
        'Sponsor a student and impact lives.'
      ],
  }

    return (
      <div className="Enterprises">
          <div className="row g-0">
              <div className="col-12 col-md-4">
                  <PageTitle First={title.first} Highlight={title.highlight} Next={title.next} Last={title.last}></PageTitle>
              </div>

              <div className="col-12 col-md-8 Enroll-Contents">
                  <div className="Why-Enroll mx-4 mb-4 mx-sm-5 mb-sm-5 mx-md-0 mb-md-0 pt-5 pb-4 ps-5 bg-white">
                        <BulletList Title={benifits.title} List={benifits.benifitList} Visible={false}></BulletList>
                        <div className="d-none d-lg-block pe-4">
                            <img src={EnterprisesImage} alt="Enroll-Image"/>
                        </div>
                  </div>
              </div>  
          </div>

          <div className="Enterprises-Paragraph">
              <p className="px-3 text-center py-4">We are an outcome focused group of professionals working together in developing meaningful solution to fill the gap between academia & industry demand. We collaborate with companies , project owners to create win-win opportunities.</p>
          </div>

          <div className="Enterprises-Details mb-3">
              <div className="row g-0">
                  <div className="col-md-4 col-lg-3 d-flex justify-content-center justify-content-md-end">
                      <div className="col-11 col-sm-9 col-md-11 my-4 py-3 px-4 For-Student-E">
                        <BulletList Title={students.title} List={students.benifitList}></BulletList>
                      </div>
                  </div>

                  <div className="col-md-8 col-lg-9 d-flex justify-content-center">
                      <div className="col-11 col-sm-9 col-md-11 For-Partners my-4 py-3 px-4">
                          <DarkList Title={partner.title} List={partner.benifitList}></DarkList>
                          <img className="d-none d-lg-block" src={PartnerImage} alt="Partner-Image" />
                      </div>
                  </div>
              </div>
          </div>

            <ContactForm 
                SubTitle='Speak with the Founder - Shaveen Fernando (+94) 0777428427 ' 
                ContactTitle='Or drop an Email' 
                Email='shaveen@saltglobal.org'>
            </ContactForm>
      </div>
    );
}

export default Enterprises;