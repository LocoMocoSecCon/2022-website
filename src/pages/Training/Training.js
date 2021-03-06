import React from 'react';
import './Training.css';

import jim from '../../static/jim.png';
import kostas from '../../static/kostas.png';
import sven from '../../static/sven.png';
import philippe from '../../static/philippe.jpeg';
import seth from '../../static/seth.jpeg';
import ken from '../../static/ken.jpeg';

export default function Training() {
  return (
    <div className='sub-page'>

      <div className='page-layout'>
        <h1 className='sub-page-title'>Training</h1>

        <div className='transparent-block'>

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
            <div className='transparent-block-title'>BECOME AN API SECURITY CHAMPION WORKSHOP</div>
            <div className='transparent-block-sub-title'>2 day workshop  ·  June 27-28<sup>th</sup></div>
            <div className='transparent-block-text'>Building secure APIs and microservices is hard, really hard. Not only do you have to make the right architectural security decisions, you also have to be aware of various implementation vulnerabilities to ensure the security of your applications. This workshop provides API developers with the necessary knowledge to assess and improve the security of their APIs. In this workshop, you will discover best practices for building secure APIs. We investigate various techniques to implement authentication and authorization, along with their trade-offs and pitfalls. We dive deep into handling JSON Web Tokens, along with current best practices for securing an API with OAuth 2.0. Additionally, we complement primary defenses with defense-in-depth strategies to enhance the security of your APIs. This course offers practical and immediately applicable security advice for architects and developers. Throughout the course, Philippe is available to answer any questions, including concrete scenarios applying to your own applications.</div>
          
            <div className='trainer-block'>
              <div className='trainer-instructor'>Instructor: Dr. Philippe De Ryck</div>

              <div className='trainer-information'>
                <img src={philippe} className='trainer-pic' alt='Dr. Philippe De Ryck'/>
                <p className='trainer-para'>Philippe De Ryck helps developers protect companies through better web security. His Ph.D. in web security from KU Leuven lies at the basis of his exceptional knowledge of the security landscape. As the founder of Pragmatic Web Security, Philippe delivers security training and security consulting to companies worldwide. His online course platform allows anyone to learn complex security topics at their own pace. Philippe is a Google Developer Expert and an Auth0 Ambassador for his community contributions on the security of web applications and APIs.
                </p>
              </div>
            </div>
          
          </div>

{/* 
          <div className='transparent-block-container'>
            <div className='transparent-block-title'>iOS & ANDROID MOBILE SECURITY WORKSHOP</div>
            <div className='transparent-block-sub-title'>2 day workshop  ·  June 27-28<sup>th</sup></div>
            <div className='transparent-block-text'>This hands-on workshop is split into two single day courses focused on iOS and Android mobile security. The course is an end-to-end experience where students are given the opportunity to do static analysis of source code and dynamic analysis of iOS and Android apps developed by the instructor. Students will get a crash-course in Frida, exploit vulnerabilities, identify best practices to mitigate them, and verify their effectiveness. Attendees need not bring an iOS nor an Android device. The hands-on exercises will all be executed in a cloud-based virtualized environment (Corellium) that allows attendees to access a jail-broken and rooted device during the training. Each student will be provided with one iOS instance and one Android instance. At the end of each day students will play a CTF to put their new skills into action and have the chance to win a prize.</div>
          
            <div className='trainer-block'>
              <div className='trainer-instructor'>Instructor: Sven Schleier</div>

              <div className='trainer-information'>
                <img src={sven} className='trainer-pic' alt='Sven Schleier'/>
                <p className='trainer-para'>Sven Schleier is an application security expert and the Technical Director of F-Secure Consulting Singapore. He has executed hundreds of penetration testing engagements and supported and guided software development projects for mobile and web applications during the whole SDLC. He is a core project leader and co-author of the OWASP Mobile Security Testing Guide (MSTG) and OWASP Mobile Application Security Verification Standard (MASVS), and has created the OWASP Mobile Hacking Playground. Sven was giving talks and workshops about mobile security worldwide to various audiences, ranging from penetration testers, to students and developers.
                </p>
              </div>
            </div>
          
          </div> */}


          <div className='transparent-block-container'>
            <div className='transparent-block-title'>PRACTICAL SECURITY CODE REVIEW WORKSHOP</div>
            <div className='transparent-block-sub-title'>2 day workshop  ·  June 27-28<sup>th</sup></div>
            <div className='transparent-block-text'>Ready to take your bug hunting to a deeper level? Ever been tasked with reviewing source code for SQL Injection, XSS, Access Control and other security flaws? Does the idea of reviewing this code leave you with heartburn? Join us for Practical Secure Code Review, aka Seth & Ken’s Excellent Adventures (in Secure Code Review). This course introduces a proven methodology and framework for performing a secure code review, as well as addressing common challenges in modern secure code review. Short circuit developing individual secure code review techniques by gleaning from Seth & Ken's past adventures in performing hundreds of code reviews and the lessons we’ve learned along the way. We will share a proven methodology to perform security analysis of any source code repository and suss out security flaws, no matter the size of the code base, or the framework, or the language.</div>
          
            <div className='trainer-block'>
              <div className='trainer-instructor'>Instructor: Seth Law</div>
              <div className='trainer-information'>
                <img src={seth} className='trainer-pic' alt='Seth Law'/>
                <p className='trainer-para'>Seth Law is an experienced Application Security Professional with over 15 years of experience in the computer security industry. During this time, Seth has worked within multiple disciplines in the security field, from software development to network protection, both as a manager and individual contributor. Seth has honed his application security skills using offensive and defensive techniques, including tool development. Seth is employed as a security consultant, hosts the Absolute AppSec podcast with Ken Johnson, and is a regular speaker at developer meetups and security events, including Blackhat, Defcon, CactusCon, and other regional conferences.
                </p>
              </div>

              <div className='trainer-instructor'>Instructor: Ken Johnson</div>
              <div className='trainer-information'>
                <img src={ken} className='trainer-pic' alt='Ken Johnson'/>
                <p className='trainer-para'>Ken Johnson, has been hacking web applications professionally for 12 years and given security training for 9 of those years. Ken is both a breaker and builder and currently works on the GitHub application security team. Previously, Ken has spoken at RSA, You Sh0t the Sheriff, Insomnihack, CERN,  DerbyCon, AppSec USA, AppSec DC, AppSec California, DevOpsDays DC, LASCON, RubyNation, and numerous Ruby, OWASP, and AWS events about appsec, devops security, and AWS security. Ken's current projects are WeirdAAL, OWASP Railsgoat, and the Absolute AppSec podcast with Seth Law.
                </p>
              </div>
            </div>
          
          </div>

{/* 

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
          
          </div> */}

        </div>

      </div>
    
    </div>

  );
}