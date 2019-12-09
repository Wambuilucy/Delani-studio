       DELANI STUDIO.

 This copy was made by WambuilucyKinyanjui.


       DESCRIPTION.

    The website explains what Delani Studio does.The website kicks off with a tagline followed by an about us section. The Services section explains briefly the phases a of project. What we do highlights in detail the company undertakings. A portfolio section is included to show previous projects. Finally the footer contains a contact form for reaching out to the company.Social Icons are present in case one wants to link with Delani on social media latforms.
    Behaviour Driven Development

Behaviour Driven Development 
Behaviour driven developments is an organized manner of pinning requirements in terms of what the user does. These requirements are then automatically interpreted into code to enhance agile development and automated testing.

Feature
As a user I would like to

View a small description of what the website is all about on the landing page.
Hover over a particular what-we-do icon to see a detail description of the heading
View the project name in portfolio section by hovering over the respective image
Submit my message to Delani Studio and get a Thank You note.
View the site on all my devices with varying widths to create a seamless experience
Background: Given the following examples of email, names , messages and Response note
  Form Submission
Condition	Response
name or email or message is null	This field is required
name , email is in name@gmail.com or	Thank you Message
name@domain format, message is not null	
email not in format name@gmail.com or name@domain.com	Email is in incorrect format
SCENARIO: Enter name email and message

GIVEN:My name "johndoe" ,email "johndoe@gmail.com",message "Great Job"

WHEN: I click submit button

THEN: The website should give me "johndoe we have received your message. Thank you for reaching out to us." pop up

SCENARIO:Enter no name, email nor message

GIVEN: My name,email and message are null

WHEN: I click submit button

THEN: The system should raise error flags on input fields alerting me that the credentials are required

Setup Instructions
Open terminal and type >> git clone https://github.com/Wambuilucy/delanistudio.git to clone this project.You can also download it manually
After having a local copy navigate to me folder by >> cd delanistudio
Open the folder in your favourite editor for atom >>atom . for visual studio code >> code .
To run the website in your browser >> browser-name index.html
Technologies Used
HTML5-Uses flex model to provide responsiveness layouts
CSS3-Basic animations are made around this as well as custom styles -Bootstrap4 -For mobile first web design
FontAwesome Icons
Google fonts- To blend normal fonts therefore creating seamless user experience
JQuery-A JavaScript library is used to produce custom animations and apply styles dynamically
MailChimp API-To track user subscriptions and messages
Contact Information
Email -Wambuilucie99@gmail.com
Phone number- +254721105540
Contribution
In case of any issues drop it at https://github.com/Wambuilucy/delanistudio/issues
Contributions are highly appreciated and done by creating a pull request at https://github.com/Wambuilucy/delanistudio/pulls





