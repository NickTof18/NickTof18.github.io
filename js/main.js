var TITLE_TEXT = "Hi, I'm Nick Tofani";

$('#footer-year').text((new Date()).getFullYear());

var shouldPlayAnimation = !Cookies.get('typed');
if (shouldPlayAnimation) {
	$('#typing-title').css('z-index', 100);
	$('#typing-title').css('color', 'white');
	var waitAndDisplay = () => {
		setTimeout(showPage, 500);
	}
	$(".title").typed({
		strings: [TITLE_TEXT],
		typeSpeed: 100,
		callback: waitAndDisplay
	});
} else {
	var title = $("#typing-title .title");
	title.text(TITLE_TEXT);
	showPage();
}

var twelveHours = 12/24;
Cookies.set('typed', 'true', { expires: twelveHours });

function showPage() {
	// make the elements take up space by removing
	// display: none, without removing opacity 0
	$("#project-cards").removeClass("nonexistent");

	// get rid of the solid black
	$("#dark-start").css('background-color', 'transparent');

	// change title text color
	$('#typing-title').css('color', '#212529');

	// begin the transition
	$("#dark-start").addClass("transition");
}

function popupEmail() {
	swal({
		title: 'Email me!',
		content: {
			element: 'div',
			attributes: {
				style: 'text-align: center;',
				innerHTML: '<a href="mailto:nicholastofani@yahoo.com" style="color: light-blue;">nicholastofani@yahoo.com</a>'
			}
		}
	});
}

function popupMetlife() {
	var innerHTML = 'Metlife was my first internship.  I spent the most of my internship working on an application ' +
	'for continuous integration of SalesForce files.  For the project I used tools such as Jenkins, Git, and Ant.  I also used ' +
	'the programming languages Groovy, Java, Windows Batch Scripting, Apex, and Visual Force to bring the project together.  ' +
	'Some of the features of the Application I created are: <br><br>' +
		'<ul style="text-align: left;"><li>The application will recognize when users push their code to Git</li>' +
		'<li>The application will push the code to a Salesforce Environment based on the Git Commit Comment</li>' +
		'<li>The application will push the code to a Salesforce Environment based on the branch it was pushed to</li>' +
		'<li>Configurable settings for push triggers and destinations</li>' +
		'<li>Configurable User Authentication so only certain users can push to certain locations</li>' +
		'</ul>';
	swal({
		content: {
			element: 'p',
			attributes: { innerHTML }
		},
	});
}

function popupScranton() {
	var innerHTML = 'During my Senior Year/First Year Graduate Student I began teaching Undergraduate Students.' +
		'The class I taught in the Fall 2018 Semester was Computer Science 2 Lab.  Some of the topics we covered in class were <br><br>' +
		'<ul style="text-align: left;"><li>Inheritance</li>' +
		'<li>Polymorphism</li>' +
		'<li>Queues and Stacks</li>' +
		'<li>ArrayLists</li>' +
		'<li>Recursion</li>' +
		'<li>Trees</li>' +
		'<li>HashMaps/HashTables</li>' +
		'<li>Hashing and DAG Vertex Sorting</li>' +
		'<li>Huffman Compression</li>' +
		'</ul>';
	swal({
		content: {
			element: 'p',
			attributes: { innerHTML }
		},
	});
}

function popupUrMessages() {
	var innerHTML = 'Send your messages your way with urMessages! Messages can be locked with a password or a ' +
	'Finger Print so only you and your intended party can view its contents.For increased' +
	'security, your message can be set to delete after a certain amount of time.If you ever '+
	'send a urMessages message to the wrong person or regret sending a message, you can easily '+
	'delete it from everyones\' phone! Text sent through this app is never stored on any server, '+
	'instead it is directly sent to the recipient\'s phone. Any Pictures sent through the app '+
	'are stored completely anonymously in Apple\'s highly secured iCloud. The pictures are '+
	'completely deleted from the server the instant the urMessage message is deleted or '+
	'one week after the message was sent. User privacy is urMessages\'s number one priority.';
	swal({
		content: {
			element: 'p',
			attributes: { innerHTML }
		},
	});
}

function popupIDXchange() {
	var innerHTML = 'Meet someone new? With IDXchange you can exchange contact information in seconds! '+
	'IDXchange is the future of giving out your contact info.Simply scan one barcode '+
	'or use the Search Function to add someone.Both people will be prompted to add '+
	'the other person into their contacts.You chose what information is added to the '+
	'other person’s phone when you setup your contact card.You can also export your '+
	'barcode by pressing the copy button, so you can paste it as if it was text onto '+
	'documents, websites, or applications. IDXchange is powered by iCloud, so your '+
	'personal information is always safe.';
	swal({
		content: {
			element: 'p',
			attributes: { innerHTML }
		},
	});
}

function popupStayConnected() {
    var innerHTML = 'StayConnected is an online application aimed to keep alumni and current students in the Software Engineering Graduate Program at the University of Scranton connected while they are in the program and after they have graduated. Currently, alumni and current students do not have a convenient way to stay in touch with each other, but Stay Connected aims to fix this problem.' +
    '\n StayConnected was created using Java SpringBoot, HTML, CSS, Javascript, and Thymeleaf for the class SE516 at the University of Scranton.';
    swal({
        content: {
            element: 'p',
            attributes: { innerHTML }
        },
    });
}

function popupClassroomAttendance() {
    var innerHTML = 'My senior thesis is creating an app for teachers to learn their students’ names and to take attendance of them. It will be a companion for teaching. The people who need this app are teachers in any school. Specifically Dr._ from the Biology Department at the University of Scranton requested the app. This app is needed because teachers can have trouble learning student’s names and quickly taking attendance. If the students always sit in the same seat, a teacher can quickly take attendance and be able to put names to faces. The app will be used by teachers at the University of Scranton, and any school where a teacher has access to an Apple Device. The hardware needed to develop the app will be a Macintosh Computer and an Apple mobile device such as an iPhone or iPad. To use the app, only an Apple Mobile Device will be needed. The software needed to develop the app will be xCode, which is a free app on the Mac App Store used to create apps for Apple devices. The intended user group would be teachers at the University of Scranton as well as any teacher with an Apple mobile device.';
    swal({
        content: {
            element: 'p',
            attributes: { innerHTML }
        },
    });
}