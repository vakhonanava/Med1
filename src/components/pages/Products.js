import React from 'react';
import '../../components/Products.css';
import imageSlider from '../imageSlider';

export default function Abouts() {
  return (
    
      <div class="about-section">
        <div class="inner-width">
          <h1>About Us</h1>
          <div class="border"></div>
          <div class="about-section-row">
            <div class="about-section-col">
              <div class="about">
                <p>
                  ჩვენს შესახებ:
                    ჩვენი პროექტი წარმოადგენს თბილისის სახემლმწიფო სამედიცინო უნივერსიტეტის მედიცინის ფაკულტეტის სტუდენტების ინიციატივას, რომელიც ხორციელდება AMEE (Association for Medical Education in Europe) დაფინანსებით. AMEE ამჟამად უკვე ცნობილია როგორც სამედიცინო განათლების საერთაშორისო ასოციაცია, აერთიანებს ხუთი კონტინენტის 90-ზე მეტი ქვეყნის უმაღლეს სამედიცინო სასწავლებლებს, ეროვნული ასოციაციებსა და სხვა საერთაშორისო ორგანიზაციებს, მათ შორის სამედიცინო განათლების მსოფლიო ფედერაციას (WFME) და ჯანმრთელობის მსოფლიო ორგანიზაციას (WHO). AMEE-ს მიზანია მსოფლიოს მასშტაბით სამედიცინო განათლების დონის ამაღლება.
                    ამ პროექტის ფარგლებში შევქმენით ონლაინ პლატფორმა, სადაც სტუდენტებს შეუძლიათ აირჩიონ სასურველი კლინიკა და დეპარტამენტი, გაირონ რეგისტრაცია, ატვირთონ საკუთარი მონაცემები, CV და სამოტივაციო წერილი, რის შემდეგაც კლინიკების მიერვე შეირჩევიან საუკეთესო კანდიდატები. მათ საშუალება ექნებათ გაიარონ პრაქტიკული ტრენინგები ჩვენი პარტნიორი კლინიკების სხვადასხვა დეპარტამენტში და მიიღონ კურსის გავლის დამადასტურებელი სერთიფიკატი.
                    ჩვენი გუნდი იმედოვნებს, რომ აღნიშნული პროექტით ხელს შევუწყობთ მედიცინის ფაკულტეტის სტუდენტებს მიიღონ უკეთესი გამოცდილება და გადადგან პირველი პრაქტიკული ნაბიჯები მომავალ პროფესიაში.

                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div class="about-section-col">
              <div class="skills">
                <div class="skill">
                  <div class="title">Time</div>
                  <div class="progress">
                    <div class="progress-bar p1"><span>25%</span></div>
                  </div>
                </div>

                <div class="skill">
                  <div class="title">Trust</div>
                  <div class="progress">
                    <div class="progress-bar p2"><span>25%</span></div>
                  </div>
                </div>

                <div class="skill">
                  <div class="title">LOVE</div>
                  <div class="progress">
                    <div class="progress-bar p3"><span>50%</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}