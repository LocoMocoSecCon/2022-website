import React from 'react';
import './Training.css';

import jim from '../../static/jim.png';
import kostas from '../../static/kostas.png';
import sven from '../../static/sven.png';

export default function Training() {
  return (
    <div className='sub-page'>

      <div className='page-layout'>
        <h1 className='sub-page-title'>Training</h1>

        <div className='transparent-block'>
          <div className='transparent-block-container'>
            <div className='transparent-block-title'>WEB & API SECURITY WORKSHOP</div>
            <div className='transparent-block-sub-title'>2 day workshop  ·  June 27-28<sup>th</sup></div>
            <div className='transparent-block-text'>This secure coding training class is designed to benefit any web developer, architect, security professional or other software development professional who needs to build and maintain secure web and web service software. Classes are custom built from learning modules including Client Security, Identity and Access Management, and SDLC, AppSec, and DevOps Processes.</div>
          
            <div className='trainer-block'>
              <div className='trainer-instructor'>Instructor: Jim Manico</div>

              <div className='trainer-information'>
                <img src={jim} className='trainer-pic' alt='Jim Manico'/>
                <p className='trainer-para'>Jim Manico is the founder of Manicode Security where he trains software developers on secure coding and security engineering. He is also the co-founder of the LocoMoco Security Conference and is a investor/advisor for BitDiscovery and Signal Sciences. Jim is a frequent speaker on secure software practices and is a member of the JavaOne rockstar speaker community. He is the author of “Iron-Clad Java: Building Secure Web Applications” from McGraw-Hill.
                </p>
              </div>
            </div>
          
          </div>

          <div className='transparent-block-container'>
            <div className='transparent-block-title'>AZURE & AWS SECURITY WORKSHOP</div>
            <div className='transparent-block-sub-title'>2 day workshop  ·  June 27-28<sup>th</sup></div>
            <div className='transparent-block-text'>This workshop is split into two single day courses. The first course focuses on how to build and deploy secure software on the Microsoft Azure cloud platform. You will learn common Azure terminology and the basic components of a secure application architecture in Azure. Other topics include utilizing the Microsoft Identity Platform for access management and how to use Azure specific data controls. On the second day, we will switch topics to one of the most popular cloud platforms, AWS. This course will go through the steps needed to develop and deploy secure applications in AWS. We will also discuss building a secure cloud infrastructure, using AWS Identity and Access Management (IAM) and utilize AWS specific tooling to monitor and protect your application's production data.</div>
          
            <div className='trainer-block'>
              <div className='trainer-instructor'>Instructor: Dr. Kostas Papapanagiotou</div>

              <div className='trainer-information'>
                <img src={kostas} className='trainer-pic' alt='Dr. Kostas Papapanagiotou'/>
                <p className='trainer-para'>Dr. Papapanagiotou is a cyber security consultant that helps organizations around the world improve their security posture. He has more than 20 years of experience in the field of cyber security both as a corporate consultant and as a researcher. Over those years he has led numerous projects ranging from penetration tests to the implementation of complex corporate security, compliance and data loss prevention solutions. He is passionate about teaching and has delivered courses to hundreds of students, security professionals and developers.</p>
                <p className='trainer-para'>He has been involved in OWASP since 2004, leading the OWASP Greek Chapter and several educational initiatives. He is an Adjunct Lecturer at the Hellenic-American University in the field of Cyber Security. He holds a PhD and BSc in Cyber Security from the University of Athens and an MSc in Information Security with distinction from Royal Holloway</p>
              </div>
            </div>
          
          </div>

          <div className='transparent-block-container'>
            <div className='transparent-block-title'>iOS & ANDROID MOBILE SECURITY WORKSHOP</div>
            <div className='transparent-block-sub-title'>2 day workshop  ·  June 27-28<sup>th</sup></div>
            <div className='transparent-block-text'>This workshop is two single day courses focused on iOS and Android mobile security. The course is an end-to-end experience where students are given the opportunity to do static analysis of source code and dynamic analysis during runtime.  Students will exploit vulnerabilities, identify best practices, and verify their effectiveness. Attendees need not bring an iOS nor an Android device.  The hands-on exercises will be executed in a cloud-based virtualized environment that allows attendees to access jail-broken devices during the training.  Each student will be provided one iOS instance and one Android instance.</div>
          
            <div className='trainer-block'>
              <div className='trainer-instructor'>Instructor: Sven Schleier</div>

              <div className='trainer-information'>
                <img src={sven} className='trainer-pic' alt='Sven Schleier'/>
                <p className='trainer-para'>Sven Schleier is an application security expert and the founder of S7ven Consulting.  He has executed hundreds of penetration testing engagements and supported and guided software development projects for mobile and web applications during the whole SDLC.  He is a core project leader and the co-author of the OWASP Mobile Security Testing Guide (MSTG) and OWASP Mobile Application Security Verification Standard (ASVS), and has created the OWASP Mobile Hacking Playground.
                </p>
              </div>
            </div>
          
          </div>


        </div>

      </div>
    
    </div>

  );
}