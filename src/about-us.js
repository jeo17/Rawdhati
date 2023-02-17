import React from 'react';
import Topcloud from './comp/topcloud';
import Botcloud from './comp/botcloud';
import "./app.css"



const AboutUs = () => {
 
    return (
        <>
          <Topcloud/>
          <div className='main'>
          <h2 dir="rtl">روضتي : هو عبارة عن موفع الكتروني مصحوب بتطبيق يسهل على الاولياء ايجاد الروضة المناسبة لأطفالهم
           بالمختصر التطبيق يحتوي على نافذتين: نافذ خاصة بالاولياء و أخرى بالروضة حيث يعرض التطبيق كل الأنشطة التي
         تقوم بها الروضة
          </h2>

          </div>
         
          <Botcloud/>
        </>
    );
}

export default AboutUs;
